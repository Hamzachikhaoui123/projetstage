import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './shardes/sidebar/sidebar/sidebar.component';
import { NavabarComponent } from './shardes/navabar/navabar/navabar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
import { AjouterClasse1Component } from './views/admin/users/AjouterClasse/ajouter-classe1/ajouter-classe1.component';
import { AjouterClasse2Component } from './views/admin/users/AjouterClasse/ajouter-classe2/ajouter-classe2.component';
import { AjouterClasse4Component } from './views/admin/users/AjouterClasse/ajouter-classe4/ajouter-classe4.component';
import { AjouterClasse5Component } from './views/admin/users/AjouterClasse/ajouter-classe5/ajouter-classe5.component';
import { AjouterClasse6Component } from './views/admin/users/AjouterClasse/ajouter-classe6/ajouter-classe6.component';
import { AjouterclasseComponent } from './views/admin/classe/ajouterclasse/ajouterclasse.component';
import { ListePaymentComponent } from './views/admin/payment/liste-payment/liste-payment.component';
import { PayeeComponent } from './views/admin/payment/payee/payee.component';
import { HistoriquepaymentComponent } from './views/admin/payment/historiquepayment/historiquepayment.component';
import { EditElevesComponent } from './views/admin/users/EditClasse/edit-eleves/edit-eleves.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavabarComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    DashbordComponent,
    Classe1ereComponent,
    Classe3emeComponent,
    Classe4emeComponent,
    Classe5emeComponent,
    Classe6emeComponent,
    ListedeclasseComponent,
    AjouterClasse1Component,
    AjouterClasse2Component,
    AjouterClasse4Component,
    AjouterClasse5Component,
    AjouterClasse6Component,
    AjouterclasseComponent,
    ListePaymentComponent,
    PayeeComponent,
    HistoriquepaymentComponent,
   EditElevesComponent
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

