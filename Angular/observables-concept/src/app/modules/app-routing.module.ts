import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './../main-page/main-page.component';
import { HomeComponent } from './../home/home.component';
import { ProfileComponent } from './../profile/profile.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}