import { GooglePlus } from '@ionic-native/google-plus';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase';


@Injectable()
export class AuthProvider {

  constructor(public googlePlus: GooglePlus) {}

  googleLogin() {
    return Observable.create(observer => {
      return this.googlePlus.login({
        'webClientId': '482273183967-uu4b32fenfbvmdnodc58l6nakfmppvn6.apps.googleusercontent.com',
        'offline': true
      })
        .then( res => {
          const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
          firebase.auth().signInWithCredential(firecreds)
            .then( success => { observer.next(success); })
            .catch(error => {
              observer.error(error);
            });
        });
    })
  }

  logout(){
    firebase.auth().signOut().then(function() {
      alert("logout successful");
    }, function(error) {
      console.log(error);
    });
  }
}
