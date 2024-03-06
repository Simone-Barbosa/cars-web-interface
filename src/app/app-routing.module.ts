import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarrosComponent } from './carros/carros.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'carros', component: CarrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
