import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SleepingtipsPage } from '../sleepingtips/sleepingtips.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public navCtrl: NavController) {}

  goHome(){
    this.router.navigate(['/home']);
  }

  // goMeditation(){
  //   this.router.navigate(['/media']);
  // }
  btnClicked(){
    this.router.navigate(['meditation/']);
  }

  gotoTips(){
    console.log('button clicked');
    this.router.navigate(['/sleepingtips']);
  }

  btnclicked(): void{
    console.log('You clicked me');
    this.navCtrl.navigateForward('sleepingtips');
   // this.navCtrl.push(SleepingtipsPage);
  }
}
