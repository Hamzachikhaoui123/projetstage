import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListeLevesComponent } from './views/users/liste-leves/liste-leves.component';
import { SidebarComponent } from './shardes/sidebar/sidebar/sidebar.component';
import { NavabarComponent } from './shardes/navabar/navabar/navabar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AddElevesComponent } from './views/users/addEleves/add-eleves/add-eleves.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { Page404Component } from './page404/page404.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { Classe1ereComponent } from './views/admin/users/classe1ere/classe1ere.component';
import { Classe3emeComponent } from './views/admin/users/classe3eme/classe3eme.component';
import { Classe4emeComponent } from './views/admin/users/classe4eme/classe4eme.component';
import { Classe5emeComponent } from './views/admin/users/classe5eme/classe5eme.component';
import { Classe6emeComponent } from './views/admin/users/classe6eme/classe6eme.component';


import { ListedeclasseComponent } from './views/admin/classe/listedeclasse/listedeclasse.component';
import { EditClasse1Component } from './views/admin/users/EditClasse/edit-classe1/edit-classe1.component';
import { EditClasse3Component } from './views/admin/users/EditClasse/edit-classe3/edit-classe3.component';
import { EditClasse4Component } from './views/admin/users/EditClasse/edit-classe4/edit-classe4.component';
import { EditClasse5Component } from './views/admin/users/EditClasse/edit-classe5/edit-classe5.component';
import { EditClasse6Component } from './views/admin/users/EditClasse/edit-classe6/edit-classe6.component';
import { AjouterClasse1Component } from './views/admin/users/AjouterClasse/ajouter-classe1/ajouter-classe1.component';
import { AjouterClasse2Component } from './views/admin/users/AjouterClasse/ajouter-classe2/ajouter-classe2.component';
import { AjouterClasse4Component } from './views/admin/users/AjouterClasse/ajouter-classe4/ajouter-classe4.component';
import { AjouterClasse5Component } from './views/admin/users/AjouterClasse/ajouter-classe5/ajouter-classe5.component';
import { AjouterClasse6Component } from './views/admin/users/AjouterClasse/ajouter-classe6/ajouter-classe6.component';
import { AjouterclasseComponent } from './views/admin/classe/ajouterclasse/ajouterclasse.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListeLevesComponent,
    SidebarComponent,
    NavabarComponent,
    LoginComponent,
    RegisterComponent,
    AddElevesComponent,
    Page404Component,
    DashbordComponent,
    Classe1ereComponent,
    Classe3emeComponent,
    Classe4emeComponent,
    Classe5emeComponent,
    Classe6emeComponent,
    ListedeclasseComponent,
    EditClasse1Component,
    EditClasse3Component,
    EditClasse4Component,
    EditClasse5Component,
    EditClasse6Component,
    AjouterClasse1Component,
    AjouterClasse2Component,
    AjouterClasse4Component,
    AjouterClasse5Component,
    AjouterClasse6Component,
    AjouterclasseComponent
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

