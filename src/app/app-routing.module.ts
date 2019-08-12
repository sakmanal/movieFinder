import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ShellComponent } from './home/shell/shell.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

const routes: Routes = [
  {
    path:'', component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    
     

    ]
  },
  /* { path: '**', component: PageNotFoundComponent } */
 
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
