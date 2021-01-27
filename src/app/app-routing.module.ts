import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ClientesComponent } from './Pages/clientes/clientes.component';
import { LoginComponent } from './Pages/login/login.component';
import { ContactanosComponent } from './Pages/contactanos/contactanos.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { EmpleadosComponent } from './Pages/empleados/empleados.component';
import { AdminComponent} from './Pages/admin/admin.component';
import { Auth0Guard } from './guards/auth0.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'empleados', component: EmpleadosComponent, canActivate: [Auth0Guard]},
  {path: 'admin', component: AdminComponent, canActivate: [Auth0Guard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
