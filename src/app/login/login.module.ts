import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: LoginPage }
    ])
  ]
})
export class LoginPageModule {}