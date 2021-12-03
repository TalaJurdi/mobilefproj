import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingAudioOptions, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {

  constructor(private streamingMedia: typeof StreamingMedia) { }

  ngOnInit() {
  }


  startVideo(){
    const options: StreamingVideoOptions ={
      successCallback: () => {console.log();}
    };

    this.streamingMedia.playVideo('https://youtu.be/inpok4MKVLM', options);

  }

  startAudio(){
    const options: StreamingAudioOptions ={
      successCallback: () => {console.log();}
    };

  }



}
