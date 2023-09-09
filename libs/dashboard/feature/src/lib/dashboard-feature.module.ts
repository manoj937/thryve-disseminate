import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DashboardComponent, AdminDashboardComponent],
  exports: [DashboardComponent, RouterModule],
})
export class DashboardFeatureModule {}
