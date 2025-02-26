// src/app/approval/approval-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalPage } from './approval.page'; // Import the ApprovalPage component

const routes: Routes = [
  {
    path: '',
    component: ApprovalPage // Set the ApprovalPage as the component for this route
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild for feature modules
  exports: [RouterModule]
})
export class ApprovalPageRoutingModule {}