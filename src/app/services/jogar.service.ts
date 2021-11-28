import { Questao } from './../models/questao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogar } from '../models/jogar';

@Injectable({
  providedIn: 'root'
})
export class JogarService {
    private baseUrl = "http://localhost:5000/api/jogar";

  constructor(private http: HttpClient) { }

  //Método Listar

  create(jogar: Jogar): Observable<Jogar> {
    return this.http.post<Jogar>(`${this.baseUrl}/create`, jogar);
 }

  list( ): Observable<Questao[]> {
    return this.http.get<Questao[]>(`${this.baseUrl}/questao/{id}`);
 }

     //Buscar pergunta por Id
     getbyid(id: number): Observable<Jogar> {
        return this.http.get<Jogar>(`${this.baseUrl}/getbyid/${id}`);
    }

    //Buscar resposta por Id
    getbyresposta(id: number, resposta: string): Observable<Jogar> {
        return this.http.get<Jogar>(`${this.baseUrl}/getbyresposta/${id}/${resposta}`);
    }

 


}
