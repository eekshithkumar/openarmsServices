import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"home", canActivate:[authGuard],component:HomeComponent},
  {path:"header", component:HeaderComponent},
  {path:"userhome", canActivate:[authGuard] ,component:UserhomeComponent},
  {path:"logout", canActivate:[authGuard] , component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
