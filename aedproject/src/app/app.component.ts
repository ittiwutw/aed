import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events } from './services/events.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPagesBeforeLogin = [
    {
      title: 'แผนที่',
      url: '/home',
      icon: 'map'
    },
    {
      title: 'เข้าสู่ระบบ',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'ลงทะเบียนผู้ใช้งาน ใหม่!!',
      url: '/register',
      icon: 'person-add'
    },
    {
      title: 'วิธีการใช้งาน',
      url: '/howto',
      icon: 'book'
    },
    // {
    //     title: 'แสกนคิวอาร์โค้ด',
    //     url: '/qrcode',
    //     icon: 'qr-scanner'
    // },
    // {
    //     title: 'ตั้งค่า',
    //     url: '/setting',
    //     icon: 'cog'
    // },
    // {
    //     title: 'ลงทะเบียนเครื่อง AED',
    //     url: '/add-aed',
    //     icon: 'ios-add-circle'
    // },
  ];

  public appPagesAfterLogin = [
    {
      title: 'แผนที่',
      url: '/home',
      icon: 'map'
    },
    {
      title: 'แก้ไขข้อมูลส่วนตัว',
      url: '/member',
      icon: 'contact'
    },
    // {
    //     title: 'แสกนคิวอาร์โค้ด',
    //     url: '/qrcode',
    //     icon: 'qr-scanner'
    // },
    // {
    //     title: 'ตั้งค่า',
    //     url: '/setting',
    //     icon: 'cog'
    // },
    // {
    //     title: 'เครื่องAEDของฉัน',
    //     url: '/my-aed',
    //     icon: 'list'
    // },
    {
      title: 'ลงทะเบียนเครื่อง AED',
      url: '/add-aed',
      icon: 'ios-add-circle'
    },
    {
      title: 'ออกจากระบบ',
      url: 'logout',
      icon: 'log-out'
    }
  ];

  public appPagesForV = [
    {
      title: 'แผนที่',
      url: '/home',
      icon: 'map'
    },
    {
      title: 'แก้ไขข้อมูลส่วนตัว',
      url: '/member',
      icon: 'contact'
    },
    // {
    //     title: 'แสกนคิวอาร์โค้ด',
    //     url: '/qrcode',
    //     icon: 'qr-scanner'
    // },
    // {
    //     title: 'ตั้งค่า',
    //     url: '/setting',
    //     icon: 'cog'
    // },
    // {
    //     title: 'เครื่องAEDของฉัน',
    //     url: '/my-aed',
    //     icon: 'list'
    // },
    {
      title: 'ลงทะเบียนเครื่อง AED',
      url: '/add-aed',
      icon: 'ios-add-circle'
    },
    {
      title: 'ออกจากระบบ',
      url: 'logout',
      icon: 'log-out'
    }
  ];

  public appPagesForP = [
    {
      title: 'แผนที่',
      url: '/home',
      icon: 'map'
    },
    {
      title: 'แก้ไขข้อมูลส่วนตัว',
      url: '/member',
      icon: 'contact'
    },
    // {
    //     title: 'แสกนคิวอาร์โค้ด',
    //     url: '/qrcode',
    //     icon: 'qr-scanner'
    // },
    // {
    //     title: 'ตั้งค่า',
    //     url: '/setting',
    //     icon: 'cog'
    // },
    // {
    //     title: 'เครื่องAEDของฉัน',
    //     url: '/my-aed',
    //     icon: 'list'
    // },
    // {
    //     title: 'ลงทะเบียนเครื่อง AED',
    //     url: '/add-aed',
    //     icon: 'ios-add-circle'
    // },
    {
      title: 'ออกจากระบบ',
      url: 'logout',
      icon: 'log-out'
    }
  ];

  public appPages = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: Events,
    private storage: Storage,
    private router: Router,
  ) {
    this.initializeApp();

    events.subscribe('user:login', () => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      // alert('login');
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.storage.get('userId').then(user => {
        console.log(user);
        if (user.userType === 'V') {
          this.appPages = this.appPagesForV;
        } else if (user.userType === 'P') {
          this.appPages = this.appPagesForP;
        }
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.storage.remove('userId');
      this.storage.get('userId').then(user => {
        if (user) {
          if (user.userType === 'V') {
            this.appPages = this.appPagesForV;
          } else if (user.userType === 'P') {
            this.appPages = this.appPagesForP;
          }
        } else {
          this.appPages = this.appPagesBeforeLogin;
        }

      });

    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    this.storage.remove('user');
    this.storage.remove('userId');
    this.storage.remove('mobileNo');
    this.storage.remove('password');
    // this.storage.remove('userType');
    this.appPages = this.appPagesBeforeLogin;
    this.router.navigate(['/login']);
  }
}
