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
