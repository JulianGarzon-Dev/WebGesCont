import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ClientesComponent } from './Pages/clientes/clientes.component';
import { LoginComponent } from './Pages/login/login.component';
import { ContactanosComponent } from './Pages/contactanos/contactanos.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadosComponent } from './Pages/empleados/empleados.component';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './Pages/registro/registro.component';
import { AdminComponent } from './Pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ClientesComponent,
    LoginComponent,
    ContactanosComponent,
    EmpleadosComponent,
    RegistroComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
