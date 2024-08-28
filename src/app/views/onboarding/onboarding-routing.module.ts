import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { tokenGuardGuard } from '../../guards/token-guard.guard';
import { adminGuard } from '../../guards/admin.guard';

const routes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch: 'full'},
  {path: "welcome", component: WelcomeComponent},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent},
  {path: "users", component: UsersComponent, canActivate: [adminGuard]},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
