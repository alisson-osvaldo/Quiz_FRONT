import { Questao } from './../models/questao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogarService {
    private baseUrl = "http://localhost:5000/api/jogar";

  constructor(private http: HttpClient) { }

  //Método Listar
  list( ): Observable<Questao[]> {
    return this.http.get<Questao[]>(`${this.baseUrl}/questao/{id}`);
}

}
