import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { JqueryComponent } from './jquery/jquery.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { Header1Component } from './header1/header1.component';

@NgModule({
  declarations: [
    AppComponent,
    JqueryComponent,
    RegistrationFormComponent,
    UserDetailsComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    HeaderHomeComponent,
    Header1Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path:'registration',component:RegistrationFormComponent},
      {path:'userOnlyCanUpdate',component:UserDetailsComponent},
      {path:'home',component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path:'header',component:HeaderComponent}

    ]),FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
