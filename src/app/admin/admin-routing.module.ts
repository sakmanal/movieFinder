import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieTableComponent } from './components/movie-table/movie-table.component';
import { MovieEditComponent } from './components/edit/movie-edit/movie-edit.component';
import { MovieEditInfoComponent } from './components/edit/movie-edit-info/movie-edit-info.component';
import { MovieEditTagsComponent } from './components/edit/movie-edit-tags/movie-edit-tags.component';
import { MovieEditGuard } from './components/edit/movie-edit.guard';
import { MovieResolver } from '@core/services/movie.resolver';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'movies', component: MovieTableComponent },
      {
        path: 'movies/edit/:id',
        resolve: { movie: MovieResolver },
        canDeactivate: [MovieEditGuard],
        component: MovieEditComponent,
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: MovieEditInfoComponent },
          { path: 'tags', component: MovieEditTagsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
