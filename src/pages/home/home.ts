import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';

import { AuthProvider } from '../../providers/auth/auth';
import { forEach } from '@firebase/util';
/**
 * Generated class for the BotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  pushPage: any;
  userProfile: any = null;
  isLoggedIn:boolean = false;
  i: Number;


  constructor(private authProvider: AuthProvider, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    
     storage.get("user").then((val) => {
       this.userProfile = JSON.parse(val);
      
       if (val) {
         this.isLoggedIn = true;
      }
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotPage');
    
  }

  disconnect() {
    this.authProvider.googlePlus.disconnect();
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.push(LoginPage);
  }

}
