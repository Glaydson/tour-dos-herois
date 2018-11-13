import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroisComponent } from './herois/herois.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [
  { path: '', redirectTo: '/painel', pathMatch: 'full' },
  { path: 'painel', component: PainelComponent },
  { path: 'herois', component: HeroisComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
