import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListeLevesComponent } from './views/users/liste-leves/liste-leves.component';
import { SidebarComponent } from './shardes/sidebar/sidebar/sidebar.component';
import { NavabarComponent } from './shardes/navabar/navabar/navabar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListeLevesComponent,
    SidebarComponent,
    NavabarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
