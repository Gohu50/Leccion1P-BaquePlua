import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { DatosComponent } from './components/datos/datos.component';

const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'donaciones',component: DonacionesComponent},
  {path:'datos',component: DatosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
