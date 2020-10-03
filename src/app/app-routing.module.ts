import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { FormRegisterComponent } from './form-register/form-register.component';



const routes: Routes = [
  {path: '', component: BienvenidaComponent },
  {path: 'home', component: HomeComponent},
  {path: 'home/login', component: LoginComponent},
  {path: 'home/register', component: FormRegisterComponent},
];

@NgModule({

  imports: [ RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
