import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { environment } from '../environments/environment';
import { GooglePlus } from '@ionic-native/google-plus';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { IonicStorageModule } from '@ionic/storage';
import {NgGapiClientConfig, GoogleApiModule, GoogleApiService, GoogleApiConfig, NG_GAPI_CONFIG} from 'ng-gapi';

var config = {
  statusbarPadding: true
}

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "82273183967-uu4b32fenfbvmdnodc58l6nakfmppvn6.apps.googleusercontent.com",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
  scope: [
    "https://www.googleapis.com/auth/calendar"  
  ].join(" ")
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, config),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireDatabaseModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
