import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { GuestLoginPage } from '../guest-login/guest-login';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  
  login()
  {
    this.navCtrl.push(LoginPage);
  }

  singUp()
  {
    this.navCtrl.push(SignupPage);
  }

  guestLogin()
  {
    this.navCtrl.push(GuestLoginPage);
  }
}
