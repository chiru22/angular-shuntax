import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

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
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
