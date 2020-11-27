import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
