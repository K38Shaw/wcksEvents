import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'rides', redirectTo: 'RidesComponent'},
  {path: 'fairHistory', redirectTo: 'FairHistoryComponent'},
  {path: 'app-history', redirectTo: 'HistoryComponent'},
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
