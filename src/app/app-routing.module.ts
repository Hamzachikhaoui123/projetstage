import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { AddElevesComponent } from './views/users/addEleves/add-eleves/add-eleves.component';
import { ListeLevesComponent } from './views/users/liste-leves/liste-leves.component';

const routes: Routes = [
  
  {
   path:'',
   component:HomeComponent
 },
 {
   path:'login',
   component:LoginComponent
 },
 {
   path:'register',
   component:RegisterComponent
 },
 {
   path:'admin',
   children:[
     {
       path:'users',
       children:[
         {
           path:'listeEleves',
           component:ListeLevesComponent
         },
         {
           path:'AddEleves',
           component:AddElevesComponent
         }
       ]
     }
   ],
   
 },
 {
   path:'**',
   component:Page404Component
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
