import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Homes/login/login.component';
import { RegisterComponent } from './Homes/register/register.component';
import { HeaderComponent } from './UserArea/userheader/header.component';
import { GenderPipe } from './gender.pipe';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './UserArea/userhome/userhome.component';
import { LogoutComponent } from './Homes/logout/logout.component';
import { ExpPipe } from './exp.pipe';
import { OutrheaderComponent } from './Homes/outrheader/outrheader.component';
import { HomeComponent } from './Homes/home/home.component';
import { AdminheaderComponent } from './AdminArea/adminheader/adminheader.component';
import { AdminhomeComponent } from './AdminArea/adminhome/adminhome.component';
import { ShowuserbyidComponent } from './AdminArea/showuserbyid/showuserbyid.component';
import { AllusersComponent } from './AdminArea/allusers/allusers.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupheaderComponent } from './supheader/supheader.component';
import { SuphomeComponent } from './suphome/suphome.component';
import { MydonationComponent } from './UserArea/mydonation/mydonation.component';
import { MyfundComponent } from './UserArea/myfund/myfund.component';
import { SpecialComponent } from './UserArea/special/special.component';
import { AllfundsComponent } from './AdminArea/allfunds/allfunds.component';
import { AlldonationsComponent } from './AdminArea/alldonations/alldonations.component';

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
    AllusersComponent,
    SupheaderComponent,
    SuphomeComponent,
    MydonationComponent,
    MyfundComponent,
    SpecialComponent,
    AllfundsComponent,
    AlldonationsComponent,
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
