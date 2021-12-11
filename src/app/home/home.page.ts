import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goHome(){
    this.router.navigate(['/home']);
  }

  goMeditation(){
    this.router.navigate(['/media']);
  }
  btnClicked(){
    this.router.navigate(['meditation/']);
  }
}
