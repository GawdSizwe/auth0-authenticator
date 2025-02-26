import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'approval', loadChildren: () => import('./approval/approval.module').then(m => m.ApprovalPageModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent },
  { path: 'logout', component: LogoutComponent }, // Add this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}