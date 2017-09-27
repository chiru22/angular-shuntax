import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { fallIn } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fallIn()],
})
export class HomeComponent implements OnInit {

  error: any;
  constructor(public afAuth: AngularFireAuth,private router: Router) {
      this.afAuth.authState.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  loginFb() {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.socialSignIn(provider);
    // this.afAuth.auth.signInWithPopup(provider)
    // .then(
    //     (success) => {
    //     this.router.navigate(['/members']);
    //   }).catch(
    //     (err) => {
    //     this.error = err;
    //   })
  }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    this.socialSignIn(provider);
    // this.afAuth.auth.signInWithPopup(provider)
    //  .then(
    //     (success) => {
    //     this.router.navigate(['/members']);
    //   }).catch(
    //     (err) => {
    //     this.error = err;
    //   })
  }

  onSubmitLogin(formData) {
    if(formData.valid) {
      console.log(formData.value);
     this.afAuth.auth.signInWithEmailAndPassword(formData.value.email,formData.value.password)
     .then(
        (success) => {
        console.log(success);
        // this.router.navigate(['/members']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
     .then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  showLoginForm(){
      $('#loginModal .registerBox').fadeOut('fast',function(){
          $('.loginBox').fadeIn('fast');
          $('.register-footer').fadeOut('fast',function(){
              $('.login-footer').fadeIn('fast');    
          });
          
          $('.modal-title').html('Login with');
      });       
       $('.error').removeClass('alert alert-danger').html(''); 
  }

  openLoginModal(){
      this.showLoginForm();
      setTimeout(function(){
          (<any>$('#loginModal')).modal('show');   
      }, 230);
      
  }

  showRegisterForm(){
      $('.loginBox').fadeOut('fast',function(){
          $('.registerBox').fadeIn('fast');
          $('.login-footer').fadeOut('fast',function(){
              $('.register-footer').fadeIn('fast');
          });
          $('.modal-title').html('Register with');
      }); 
      $('.error').removeClass('alert alert-danger').html('');
         
  }

  close(){
    console.log('test')
  }

  ngOnInit() {
  }

}
