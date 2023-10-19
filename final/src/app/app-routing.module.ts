import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Homes/login/login.component';
import { RegisterComponent } from './Homes/register/register.component';
import { HomeComponent } from './Homes/home/home.component';
import { authGuard } from './auth.guard';
import { HeaderComponent } from './UserArea/userheader/header.component';
import { UserhomeComponent } from './UserArea/userhome/userhome.component';
import { LogoutComponent } from './Homes/logout/logout.component';
import { OutrheaderComponent } from './Homes/outrheader/outrheader.component';
import { ShowuserbyidComponent } from './AdminArea/showuserbyid/showuserbyid.component';
import { AdminheaderComponent } from './AdminArea/adminheader/adminheader.component';
import { AdminhomeComponent } from './AdminArea/adminhome/adminhome.component';
import { AllusersComponent } from './AdminArea/allusers/allusers.component';
import { MydonationComponent } from './UserArea/mydonation/mydonation.component';
import { MyfundComponent } from './UserArea/myfund/myfund.component';
import { SpecialComponent } from './UserArea/special/special.component';
import { AllfundsComponent } from './AdminArea/allfunds/allfunds.component';
import { AlldonationsComponent } from './AdminArea/alldonations/alldonations.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"home", component:HomeComponent},
  {path:"outheader", component:OutrheaderComponent},
  {path:"header", canActivate:[authGuard], component:HeaderComponent},
  {path:"userhome", canActivate:[authGuard] ,component:UserhomeComponent, data: { customer: 'data' }},
  {path:"logout", canActivate:[authGuard] , component:LogoutComponent},
  {path:"adminhome",canActivate:[authGuard],component:AdminhomeComponent},
  {path:"adminheader",canActivate:[authGuard],component:AdminheaderComponent},
  {path: "showuserbyid", canActivate:[authGuard],component:ShowuserbyidComponent},
  {path: "allusers", canActivate:[authGuard], component:AllusersComponent},
  {path: "mydonation", component:MydonationComponent, data: { customer: 'data' }},
  {path: "myfund", component:MyfundComponent, data: { customer: 'data' }},
  {path: "special", component:SpecialComponent, data: { customer: 'data' }},
  {path: "allfunds", canActivate:[authGuard], component:AllfundsComponent},
  {path: "alldonations", canActivate:[authGuard], component:AlldonationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
