import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { RestService } from '../services/rest.service';
declare var google;
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // map: GoogleMap;
  loading: any;
  AEDLocation: any;
  SOS = false;
  SOSHelp = false;
  count = 1;
  role = 1;
  first = true;
  step = 1;
  currentPosition: any;

  lat: any;
  lng: any;

  alldevice = [];
  alldeviceList = [];
  height = '100%';
  zoom = 13;
  currentLat = 13.7601366;
  currentLng = 100.5659859;
  userData: any;
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,
    public rest: RestService,
    public storage: Storage,
    private geolocation: Geolocation,
    private alertCtrl: AlertController,
    private iab: InAppBrowser
  ) {

    // หลังเข้าหน้า home จะเรียกคำสั่งดึงข้อมูลเครื่องทั้งหมด
    this.getAllDevices();


    // ดึงข้อมูล user จาก storage
    this.storage.get('userId').then(user => {
      this.userData = user;
      // console.log(user);
      // if (user.userType === 'V') {
      //   setTimeout(() => {
      //     // somecode
      //     // this.presentAlert();
      //   }, 30000);
      // }
    });

    // this.getAllEvent();
  }

  async presentAlert() {
    const alertCtr = await this.alertCtrl.create({
      header: 'แจ้งเตือนเหตุฉุกเฉิน',
      message: 'กดเพื่อนำทาง',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'นำทาง',
          handler: () => {
            this.iab.create('https://www.google.com/maps/search/?api=1&query=13.8601816,100.5128416');
          }
        }
      ]
    });
    await alertCtr.present();
  }

  ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    // await this.platform.ready();
    // await this.loadMap();
    // await this.start();

    // this.getAllDevices();
  }

  getAllDevices() {
    console.log('get device');

    // เรียก API ดึงข้อมูลเครื่อง
    this.rest.getDeviceAll().then((result: any) => {
      console.log(result);

      // set ข้อมูลเครื่อง ลง alldevice
      this.alldevice = result;

      // โหลดและ set googlemap
      this.loadMap();

    });
  }

  loadMap() {
    // this.addMarkersToMap();

    // ดึงที่อยู่ปัจจุบัน
    this.geolocation.getCurrentPosition().then((resp) => {

      // ข้อมูลที่อยู่ปัจจุบัน
      console.log(resp);

      // เก็บค่า latitude
      this.lat = resp.coords.latitude;
      // เก็บค่า longtitude
      this.lng = resp.coords.longitude;
      // เก็บค่า latitude
      this.currentLat = resp.coords.latitude;
      // เก็บค่า longtitude
      this.currentLng = resp.coords.longitude;

      // สร้าง object ตำแหน่งปัจจุบัน
      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      // set Marker ลง google map
      this.addMarkersToMap();

      // this.addMarkersCurrentToMap(latLng);
      // this.loading.dismiss();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  addMarkersToMap() {

    // วน loop เครื่องทั้งหมด
    this.alldevice.forEach(device => {

      // สร้าง object ที่อยู่ปัจจุบัน
      const current = new google.maps.LatLng(this.currentLat, this.currentLng);
      // สร้าง object ที่อยู่ของเครื่อง
      const target = new google.maps.LatLng(device.latitude, device.longitude);

      // คำนวนระยะทางระหว่าง ที่อยู่ปัจจุบัน กับ ที่อยู่เครื่อง
      // return เป็น เมตร
      const distanceMet = google.maps.geometry.spherical.computeDistanceBetween(current, target);
      console.log((distanceMet / 1000).toFixed(2));

      // ระยะทางที่หาได้ แปลงเป็น กิโลเมตร
      const distance = (distanceMet / 1000).toFixed(2);
      // distance = distance * 1;
      // var myLatlng = new this.map.
      // tslint:disable-next-line:radix

      // เช๋็คถ้าระยะทางน้อยกว่าเท่ากับ 5 กิโล
      if (parseInt(distance) <= 5) {

        // set เครื่องลง alldeviceList สำหรับทำ marker
        this.alldeviceList.push(device);

      }
    });
    // this.estates.forEach(element => {

    //   const current = new google.maps.LatLng(this.lat, this.lng);
    //   const target = new google.maps.LatLng(element.lat, element.lng);

    //   // หาระยะทาง
    //   const distanceMet = google.maps.geometry.spherical.computeDistanceBetween(current, target);
    //   console.log((distanceMet / 1000).toFixed(2));

    //   // ระยะทางที่หาได้
    //   const distance = (distanceMet / 1000).toFixed(2);
    //   // tslint:disable-next-line:radix
    //   if (parseInt(distance) <= 10) {
    //     const icon = {
    //       url: element.imgUrl,
    //       scaledSize: {
    //         width: 40,
    //         height: 40
    //       }
    //     };
    //     element.icon = icon;
    //     this.nearbyList.push(element);

    //   }
    // });

  }

  // loadMap() {
  //   this.map = GoogleMaps.create('map_canvas', {
  //     camera: {
  //       target: {
  //         lat: 43.0741704,
  //         lng: -89.3809802
  //       },
  //       zoom: 18,
  //       tilt: 30
  //     }
  //   });

  // }

  // async start() {
  //   this.map.clear();

  //   this.loading = await this.loadingCtrl.create({
  //     message: 'Please wait...'
  //   });
  //   await this.loading.present();
  //   const that = this;
  //   // Get the location of you
  //   this.map.getMyLocation().then((location: MyLocation) => {
  //     this.loading.dismiss();
  //     console.log(JSON.stringify(location, null, 2));

  //     this.lat = location.latLng.lat;
  //     this.lng = location.latLng.lng;

  //     // Move the map camera to the location with animation
  //     this.map.animateCamera({
  //       target: location.latLng,
  //       zoom: 17,
  //       tilt: 30
  //     });
  //     this.currentPosition = location.latLng;
  //     // add a marker
  //     const marker: Marker = this.map.addMarkerSync({
  //       title: 'AED จุดที่ 1',
  //       snippet: 'โรงพยาบาลมหาราช',
  //       position: location.latLng,
  //       animation: GoogleMapsAnimation.BOUNCE
  //     });

  //     that.getAllDevices();

  //     // show the infoWindow
  //     marker.showInfoWindow();

  //     // If clicked it, display the alert
  //     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((event) => {
  //       // this.showToast('clicked!');
  //       // console.log(event.latLng);
  //       // console.log(event.latLng.lat);
  //       // window.open('https://maps.google.com/?q=13.7551,100.4984', '_system');
  //     });
  //   })
  //     .catch(err => {
  //       this.loading.dismiss();
  //       this.showToast(err.error_message);
  //     });
  // }

  sos() {
    if (this.count === 3) {
      this.SOS = !this.SOS;
      this.count++;
      this.createEvent();
    } else if (this.count === 4) {
      this.SOS = !this.SOS;
      this.count = 1;
    } else {
      this.count++;
    }
    this.AEDLocation = 'แจ้งเตือนไปยังผู้ช่วยแล้ว!!';
  }

  createEvent() {
    console.log('get device');
    this.rest.createEvent(this.userData.userId, this.currentLat + '/' + this.currentLng).then((result: any) => {
      console.log(result);
    });
  }

  getAllEvent() {
    this.rest.getEventAll().then((result: any) => {
      console.log(result);
    });
  }

  // myLocation() {
  //   this.map.getMyLocation().then((location: MyLocation) => {
  //     this.loading.dismiss();
  //     console.log(JSON.stringify(location, null, 2));


  //     // Move the map camera to the location with animation
  //     this.map.animateCamera({
  //       target: location.latLng,
  //       zoom: 17,
  //       tilt: 30
  //     });
  //     // add a marker
  //     const marker: Marker = this.map.addMarkerSync({
  //       title: 'AED จุดที่ 1',
  //       snippet: 'โรงพยาบาลมหาราช',
  //       position: location.latLng,
  //       animation: GoogleMapsAnimation.BOUNCE
  //     });

  //     // const pos = {
  //     //     lat: 13.7551,
  //     //     lng: 100.4984
  //     //   };
  //     // const marker2: Marker = this.map.addMarkerSync({
  //     //     title: 'AED จุดที่ 2',
  //     //     snippet: 'โรงพยาบาลมหาราช',
  //     //     position: pos,
  //     //     animation: GoogleMapsAnimation.BOUNCE
  //     // });

  //     // show the infoWindow
  //     marker.showInfoWindow();

  //     // If clicked it, display the alert
  //     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((event) => {
  //       // this.showToast('clicked!');
  //       // window.open('https://maps.google.com/?q=' + event.latLng.lat() + ',' + event.latLng.lng(), '_system');
  //     });
  //   })
  //     .catch(err => {
  //       this.loading.dismiss();
  //       this.showToast(err.error_message);
  //     });
  // }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

  nextStep() {
    this.step += 1;
    if (this.step === 3) {
      this.step = undefined;
    }
  }

  notificationPop() {
    this.SOSHelp = true;
    this.step = 3;
  }

  help() {
    window.open('https://maps.google.com/?q=13.7551,100.4984', '_system');
    this.SOSHelp = false;
    this.step = 1;
  }

  markerClick(event, item) {
    // alert(item.deviceLocationName + '\n' + item.deviceMark);
    this.presentConfirm(item);
  }

  async presentConfirm(item) {
    const alertCtr = await this.alertCtrl.create({
      header: item.deviceLocationName,
      message: item.deviceMark,
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'นำทาง',
          handler: () => {

            // กดนำทาง จะเรียก url ใน google maps url format และส่ง ตำแหน่งเพื่อเปิดแอพ google maps
            this.iab.create('https://www.google.com/maps/search/?api=1&query=' + item.latitude + ', ' + item.longitude);
          }
        }
      ]
    });
    await alertCtr.present();
  }

}
