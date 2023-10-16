import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './headers/userheader/header.component';
import { GenderPipe } from './gender.pipe';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './Homes/userhome/userhome.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpPipe } from './exp.pipe';
import { OutrheaderComponent } from './headers/outrheader/outrheader.component';
import { HomeComponent } from './Homes/outerheader/home.component';
import { AdminheaderComponent } from './AdminArea/adminheader/adminheader.component';
import { AdminhomeComponent } from './AdminArea/adminhome/adminhome.component';
import { ShowuserbyidComponent } from './AdminArea/showuserbyid/showuserbyid.component';
import { AllusersComponent } from './AdminArea/allusers/allusers.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    GenderPipe,
    UserhomeComponent,
    LogoutComponent,
    ExpPipe,
    OutrheaderComponent,
    HomeComponent,
    AdminheaderComponent,
    AdminhomeComponent,
    ShowuserbyidComponent,
    AllusersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
