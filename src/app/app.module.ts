import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './home/shell/shell.component';
import { MenuComponent } from './home/menu/menu.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

/* Feature Modules */
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShellComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
