import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AngularFirestoreModule } from 'angularfire2/firestore';

//import firebaseConfig from './firebase';
//import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
// import { environment } from 'src/environments/environment';
// import { list } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireModule } from '@angular/fire/compat';

// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  //  AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebase),
  //  AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
