import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import * as $ from 'jquery';
import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

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
          $('#loginModal').modal('show');   
      }, 230);
      
  }


  ngOnInit() {
    this.openLoginModal();
  }

}
