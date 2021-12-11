import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sleepingtips',
  templateUrl: './sleepingtips.page.html',
  styleUrls: ['./sleepingtips.page.scss'],
})
export class SleepingtipsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backtohome(){
    this.router.navigate(['/home']);
  }

}
