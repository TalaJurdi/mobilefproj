import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.page.html',
  styleUrls: ['./firstpage.page.scss'],
})
export class FirstpagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logMeIn(){
    this.router.navigate(['/home']);
  }

  formRegister(){
    this.router.navigate(['/register']);
  }

}
