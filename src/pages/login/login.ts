import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

import {InAppBrowser} from "@ionic-native/in-app-browser";
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';

import { AuthProvider } from '../../providers/auth/auth';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [GooglePlus]
})
export class LoginPage {

  displayName: any;
  email: any;
  photoURL: any;
  isLoggedIn:boolean = false;
  user: any;

  constructor( private authProvider: AuthProvider, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
   
  }
  doLogin()
  {
    this.navCtrl.setRoot(MenuPage);
    this.navCtrl.push(MenuPage);
  }

  loginWithGoogle(): void{
    this.authProvider.googleLogin().subscribe((user) => {
      
      this.email = user.email;
      this.displayName = user.displayName;
      this.photoURL = user.photoURL;
      this.isLoggedIn = true;
      this.storage.set("user", JSON.stringify(user));
      this.doLogin();
      
      
    }, err =>{
      console.log("errorpp" + err);
    });
  }

  logout(){
    this.authProvider.logout();
    this.isLoggedIn = false;
  }


}
