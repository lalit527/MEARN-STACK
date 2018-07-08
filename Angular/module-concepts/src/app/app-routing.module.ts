import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'profile', loadChildren: './Profile-Module/profile.module#ProfileModule'},
  {path: '', component: MainComponent}
   
  ];

@NgModule({
imports: [
    // RouterModule.forRoot(appRoutes, {useHash : true})
    RouterModule.forRoot(routes)
],
exports: [RouterModule]
})
export class AppRoutingModule {

}