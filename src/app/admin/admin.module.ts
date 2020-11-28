import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { MovieEditComponent } from './components/edit/movie-edit/movie-edit.component';
import { MovieEditInfoComponent } from './components/edit/movie-edit-info/movie-edit-info.component';
import { MovieEditTagsComponent } from './components/edit/movie-edit-tags/movie-edit-tags.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from 'ngx-charts-8';

@NgModule({
  declarations: [
    AdminPanelComponent,
    DashboardComponent,
    MovieTableComponent,
    MovieEditComponent,
    MovieEditInfoComponent,
    MovieEditTagsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    NgxChartsModule
  ],
})
export class AdminModule {}
