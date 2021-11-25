import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { AjouterclasseComponent } from './views/admin/classe/ajouterclasse/ajouterclasse.component';
import { ListedeclasseComponent } from './views/admin/classe/listedeclasse/listedeclasse.component';
import { EditElevesComponent } from './views/admin/users/EditClasse/edit-eleves/edit-eleves.component';
import { HistoriquepaymentComponent } from './views/admin/payment/historiquepayment/historiquepayment.component';
import { ListePaymentComponent } from './views/admin/payment/liste-payment/liste-payment.component';
import { PayeeComponent } from './views/admin/payment/payee/payee.component';
import { AjouterClasse1Component } from './views/admin/users/AjouterClasse/ajouter-classe1/ajouter-classe1.component';
import { AjouterClasse2Component } from './views/admin/users/AjouterClasse/ajouter-classe2/ajouter-classe2.component';
import { AjouterClasse4Component } from './views/admin/users/AjouterClasse/ajouter-classe4/ajouter-classe4.component';
import { AjouterClasse5Component } from './views/admin/users/AjouterClasse/ajouter-classe5/ajouter-classe5.component';
import { AjouterClasse6Component } from './views/admin/users/AjouterClasse/ajouter-classe6/ajouter-classe6.component';
import { Classe1ereComponent } from './views/admin/users/classe1ere/classe1ere.component';
import { Classe3emeComponent } from './views/admin/users/classe3eme/classe3eme.component';
import { Classe4emeComponent } from './views/admin/users/classe4eme/classe4eme.component';
import { Classe5emeComponent } from './views/admin/users/classe5eme/classe5eme.component';
import { Classe6emeComponent } from './views/admin/users/classe6eme/classe6eme.component';
import { AuthGuard } from './guards/auth.guard';


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
       },
       {
         path:'AjouterEleves',
         children:[
           {
             path:'ajouterEleves1ere',
             component:AjouterClasse1Component
           },
           {
             path:'ajouterEleves2eme',
             component:AjouterClasse2Component
           },
           {
             path:'ajouterEleves4eme',
             component:AjouterClasse4Component
           },
           {
             path:'ajouterEleves5eme',
             component:AjouterClasse5Component
           },
           {
             path:'ajouterEleves6eme',
             component:AjouterClasse6Component
           }
         ]
       },
       {
         path:'EditEleves',
         component:EditElevesComponent
       }
     ]
   },
   {
     path:'payment',
     children:[
       {
         path:'liste',
         component:ListePaymentComponent
       },
       {
         path:'payee',
         component:PayeeComponent
       },
       {
         path:'historique',
         component:HistoriquepaymentComponent
       }
     ]
   }
   ],
   canActivateChild:[AuthGuard]
   
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
