import { NgModule } from '@angular/core';
import { UiModule } from '@griin/ui';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserModule } from '@griin/features/user';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    UserModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DashboardComponent },
    ]),
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
