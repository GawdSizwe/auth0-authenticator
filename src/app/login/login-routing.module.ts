import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule {}