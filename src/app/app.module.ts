import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './home/shell/shell.component';
import { MenuComponent } from './home/menu/menu.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MovieData } from './mock/movie-data';
import { TokenInterceptor } from '@auth/interceptors/token.interceptor';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';

const ToastrOptions = {
  positionClass: 'toast-bottom-right',
  closeButton: true,
  progressBar: true
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShellComponent,
    MenuComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastrModule.forRoot(ToastrOptions),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(MovieData, { delay: 1000, dataEncapsulation: false }),
    AppRoutingModule // should be imported last
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
