import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestLoginPage } from './guest-login';

@NgModule({
  declarations: [
    GuestLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestLoginPage),
  ],
})
export class GuestLoginPageModule {}
