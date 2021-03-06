import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//Application Modules
import { LoginModule } from './login/login.module';
import { EmailModule } from './email/email.module';
import { SignupModule } from './signup/signup.module';
import { MembersModule } from './members/members.module';

import { AuthGuard } from './services/auth.service';
import { routes } from './app.routes';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyC4V1cJIF1NGAFJmBwfc7e9tt2geucGAVs",
  authDomain: "shuntax-9999.firebaseapp.com",
  databaseURL: "https://shuntax-9999.firebaseio.com",
  projectId: "shuntax-9999",
  storageBucket: "shuntax-9999.appspot.com",
  messagingSenderId: "961601548086"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    LoginModule,EmailModule,SignupModule,MembersModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
