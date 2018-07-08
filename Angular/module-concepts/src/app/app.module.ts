import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { CredentialService } from './services/credential.service';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './Auth/auth.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [AuthService, CredentialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
