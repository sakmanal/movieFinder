import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ShellComponent } from './home/shell/shell.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { AuthGuard } from './user/auth-guard.service';

const routes: Routes = [
  {
    path:'', component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {
        path: 'movies',
        canActivate: [AuthGuard],
        loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
      },
     

    ]
  },
  { path: '**', component: PageNotFoundComponent }
 
];

@NgModule({
  imports: [ 
             RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
           //RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading }),
           // RouterModule.forRoot(routes, { enableTracing: true })
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
