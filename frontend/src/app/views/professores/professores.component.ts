import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss'],
})
export class ProfessoresComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  editarProfessor() {
    this.router.navigate(['/professores/perfil']);
  }

  excluirProfessor() {
    this.router.navigate(['/professores/perfil']);
  }

  cadastrarNovoProfessor() {
    this.router.navigate(['/professores/perfil']);
  }
}
