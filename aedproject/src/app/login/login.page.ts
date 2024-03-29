import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Events } from '../services/events.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mobileNo: any;
  password: any;
  constructor(
    private storage: Storage,
    private router: Router,
    public rest: RestService,
    public events: Events,
    public navCtrl: NavController,
  ) {
  }

  async setData(key: string, value: string) {
    await this.storage.set(key, value).then(() => true);
  }

  async getData(key: string) {
    await this.storage.get(key).then((data) => data);
    // console.log('role is', data);
  }

  ngOnInit() {
  }
  login() {
    // this.router.navigate(['/home']);

    // เตรียม parameter สำหรับการ login
    const param = {
      mobileNo: this.mobileNo,
      password: this.password
    };

    // เรียก REST API
    this.rest.login(param).then((result: any) => {
      // console.log(result);

      // เช็ค response ถ้า respons status ไม่ใช่ 500 จะเข้าเงื่อนไข
      if (result.status !== '500') {
        // console.log(result.data.result[0]);

        // เก็บ user data ไว้ใน storage ของเครื่อง ในชื่อ userId
        this.storage.set('userId', result).then(userId => {
          this.events.publish('user:login', {time: new Date()});
          console.log(result);
        });

        // หลัง login ผ่าน ไปหน้า home
        this.router.navigate(['/home']);
      } else {
        console.log('cannot Login');
      }
    });
  }
  goToHome() {
    this.navCtrl.navigateRoot('/home').then();
  }
  register() {
    this.router.navigate(['/register']);
  }

}
