import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: '',
    senha: '',
  };

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    const user = this.loginService.verificarUsuario();
    if (user) {
      this.router.navigate(['/dashboard']);
    }
  }

  fazerLogin($event) {
    $event.preventDefault();

    this.loginService.create(this.login);
  }

  cadastrar() {
    this.router.navigate(['/professores/perfil']);
  }
}
