import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

// import { auth } from 'firebase/app';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import * as firebase from 'firebase/compat/app';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  validationsform: FormGroup;
  errorMessage = '';

  constructor(
    // public afAuth: AngularFireAuth,
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.validationsform = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  // Login: any.validationmessages = {
  //   email: [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'pattern', message: 'Please enter a valid email.' }
  //   ],
  //   password: [
  //     { type: 'required', message: 'Password is required.' },
  //     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
  //   ]
  // };

  // loginUser(value) {
  //   this.authService.loginUser(value)
  //     .then(res => {
  //       console.log(res);
  //       this.errorMessage = '';
  //       this.navCtrl.navigateForward('/dashboard');
  //     }, err => {
  //       this.errorMessage = err.message;
  //     });
  // }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

  logMeIn(){
    this.router.navigate(['/home']);
  }

  formRegister(){
    this.router.navigate(['/register']);
  }

}
