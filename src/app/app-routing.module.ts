import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { AjouterclasseComponent } from './views/admin/classe/ajouterclasse/ajouterclasse.component';
import { ListedeclasseComponent } from './views/admin/classe/listedeclasse/listedeclasse.component';
import { Classe1ereComponent } from './views/admin/users/classe1ere/classe1ere.component';
import { Classe3emeComponent } from './views/admin/users/classe3eme/classe3eme.component';
import { Classe4emeComponent } from './views/admin/users/classe4eme/classe4eme.component';
import { Classe5emeComponent } from './views/admin/users/classe5eme/classe5eme.component';
import { Classe6emeComponent } from './views/admin/users/classe6eme/classe6eme.component';
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
   path:'dashbord',
   component:DashbordComponent
 },
 {
   path:'admin',
   children:[
    {
      path:'classe',
    children:[
      {
        path:'liste',
        component:ListedeclasseComponent
      },
      {
        path:'Ajouter',
        component:AjouterclasseComponent


      }
    ]
   },
   {
     path:'users',
     children:[
       {
         path:'classe1ere',
         component:Classe1ereComponent
       },
       {
         path:'classe3eme',
         component:Classe3emeComponent
       },
       {
         path:'classe4eme',
         component:Classe4emeComponent
       },
       {
         path:'classe5eme',
         component:Classe5emeComponent
       },
       {
         path:'classe6eme',
         component:Classe6emeComponent
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
