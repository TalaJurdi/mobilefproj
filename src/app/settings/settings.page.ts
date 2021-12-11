import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  audio: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = './assets/relax1.mp3';
    // this.audio = load();

  }

  logout(){
    this.router.navigate(['/home']);

  }
}


