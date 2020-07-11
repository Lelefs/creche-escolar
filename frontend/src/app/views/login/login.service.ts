import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'http://localhost:3333/session';
  userLogado = {
    email: '',
    nome: '',
    id: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  verificarUsuario() {
    const user = localStorage.getItem('@Creche-escolar');

    const userObject = JSON.parse(user);

    return userObject;
  }

  create(login) {
    this.http.post<any>(this.baseUrl, login).subscribe(dados => {
      if (dados.error) {
        return alert('Erro ao fazer o login. Tente novamente');
      }

      this.userLogado.email = dados.user.email;
      this.userLogado.nome = dados.user.displayName;
      this.userLogado.id = dados.user.uid;
      localStorage.setItem('@Creche-escolar', JSON.stringify(this.userLogado));
      return this.router.navigate(['/dashboard']);
    });
  }

  logout() {
    localStorage.removeItem('@Creche-escolar');
    return this.router.navigate(['/']);
  }
}
