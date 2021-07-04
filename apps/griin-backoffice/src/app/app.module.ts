import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirebaseModule } from '@griin/features/firebase';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirebaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
