import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BasicDirective } from './directives/basic-style/basic-style.directive';
import { BetterDirective } from './directives/better-directive/better-style.directive';
import { UnlessDirective } from './directives/unless/unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    BetterDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
