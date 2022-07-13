import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsLayoutComponent } from './components/hotels-layout/hotels-layout.component';

const routes: Routes = [
  { path: '', component: HotelsLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
