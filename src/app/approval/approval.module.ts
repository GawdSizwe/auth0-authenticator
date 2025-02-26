import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApprovalPage } from './approval.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ApprovalPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: ApprovalPage }
    ])
  ]
})
export class ApprovalPageModule {}