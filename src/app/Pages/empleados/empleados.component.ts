import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {


  fecha: Date = new Date();
  MessageLog = '';
  MessageLunch = '';
  Messageout = '';

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onClickMe() {
    this.MessageLog = 'Tu hora de entrada es: ' + this.fecha;
  }
  onClickMe2() {
    this.MessageLunch = 'Tu hora de salida a almorzar es: ' + this.fecha;
  }
  onClickMe3() {
    this.Messageout = 'Tu hora de salida es: ' + this.fecha;
  }
  onClickMe4() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
    location.reload();
  }
}
