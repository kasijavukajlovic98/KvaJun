import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users/users.component";
import {AuthGuard} from "./auth.guard";
import {UniverzalnaComponent} from "./univerzalna/univerzalna.component";
import {DetaljiUseraComponent} from "./detalji-usera/detalji-usera.component";
import {DetaljiUniverzalnaComponent} from "./detalji-univerzalna/detalji-univerzalna.component";


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "users",
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ["ROLE_ADMIN", "ROLE_USER"]
    }
  },
  {
    path: "univerzalna",
    component: UniverzalnaComponent
  },
  {
    path: "users/detaljiUsera",
    component: DetaljiUseraComponent,
    canActivate: [AuthGuard],
    data: {
      allowedRoles: ["ROLE_ADMIN", "ROLE_USER"]
    }
  },
  {
    path: "univerzalna/detaljiUniverzalna",
    component: DetaljiUniverzalnaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
