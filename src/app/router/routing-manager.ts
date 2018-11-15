import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../components/inicio/inicio.component';
import { RegistroComponent } from '../components/registro/registro.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
    { path: 'registro', component: RegistroComponent},
    { path: 'get-code/:id', component: InicioComponent},
    { path: 'home', component: HomeComponent},
    { path: '', pathMatch: 'full', redirectTo: 'registro'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class RouterRoutingModule { }
