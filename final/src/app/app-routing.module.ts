import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './Homes/outerheader/home.component';
import { authGuard } from './auth.guard';
import { HeaderComponent } from './headers/userheader/header.component';
import { UserhomeComponent } from './Homes/userhome/userhome.component';
import { LogoutComponent } from './logout/logout.component';
import { OutrheaderComponent } from './headers/outrheader/outrheader.component';
import { ShowuserbyidComponent } from './AdminArea/showuserbyid/showuserbyid.component';
import { AdminheaderComponent } from './AdminArea/adminheader/adminheader.component';
import { AdminhomeComponent } from './AdminArea/adminhome/adminhome.component';
import { AllusersComponent } from './AdminArea/allusers/allusers.component';

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
  {path: "allusers", canActivate:[authGuard], component:AllusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
