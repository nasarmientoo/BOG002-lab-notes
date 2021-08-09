import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDwrwIiWFWPimnHIAkmSGHp6F9butSGYSQ",
      authDomain: "co-owner-2021.firebaseapp.com",
      projectId: "co-owner-2021",
      storageBucket: "co-owner-2021.appspot.com",
      messagingSenderId: "576605578367",
      appId: "1:576605578367:web:c0e164afb8bd88e7584b4a"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
