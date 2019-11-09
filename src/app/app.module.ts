import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { FormComponent } from './pages/form/form.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FormComponent,
    AngularFireModule,
    AngularFirestoreModule,

    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
