
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, NgZone } from '@angular/core';

import { Platform } from 'ionic-angular';
import {} from '@ionic-native/api'
import { GoogleApiService } from 'ng-gapi';

/**
 * Generated class for the BotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


declare var ApiAIPromises: any;



@IonicPage()
@Component({
  selector: 'page-bot',
  templateUrl: 'bot.html',
})
// client id : 482273183967-uu4b32fenfbvmdnodc58l6nakfmppvn6.apps.googleusercontent.com	
// api :  AIzaSyDBD8gyKOzvqkNuwbv2kAXjXz4oKlIeuPc
export class BotPage {

  answer;
  question;
  

  constructor(public gapiService: GoogleApiService, public platform: Platform, public ngZone: NgZone) {
    platform.ready().then(() => {
     ApiAIPromises.init({
         clientAccessToken: "24a08264e9d7446faf6b2194270d0836"
       })
       .then((result) =>  console.log(result))

    });
   
  }

  ask(question) {
    ApiAIPromises.requestText({
      query: question
    })
    .then(({result: {fulfillment: {speech}}}) => {
       this.ngZone.run(()=> {
         this.answer = speech;
       });
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BotPage');
  }

}
