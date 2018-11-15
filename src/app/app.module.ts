import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { GenericService } from './services/generic/generic.service';
import { RouterModule } from './router/router.module';
import { RouterRoutingModule } from './router/routing-manager';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterRoutingModule

  ],
  providers: [
    GenericService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
