import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  baseUrl = 'http://localhost:3333/turmas';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  excluir(id: string) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe(res => {
      return res;
    });
  }
}
