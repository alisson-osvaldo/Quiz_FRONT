import { Jogador } from './../models/jogador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
    private baseUrl = "http://localhost:5000/api/jogador";

    constructor(private http: HttpClient) { }

    //Métodos
    list( ): Observable<Jogador[]> {
        return this.http.get<Jogador[]>(`${this.baseUrl}/list`);
    }

    create(jogador: Jogador): Observable<Jogador> {
        return this.http.post<Jogador>(`${this.baseUrl}/create`, jogador);
    }

    
}
