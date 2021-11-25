import { Questao } from './../models/questao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {
    private baseUrl = "http://localhost:5000/api/questao";

  constructor(private http: HttpClient) { }

   //Método Listar
   list( ): Observable<Questao[]> {
    return this.http.get<Questao[]>(`${this.baseUrl}/list`);
    }
    //Cadastrar
    create(questao: Questao): Observable<Questao> {
        return this.http.post<Questao>(`${this.baseUrl}/create`, questao);
    }

    delete(id: number): Observable<Questao> {
        return this.http.delete<Questao>(`${this.baseUrl}/delete/${id}` );
    }

    update(questao: Questao): Observable<Questao> {
        return this.http.put<Questao>(`${this.baseUrl}/update`, questao);
    }

     //Buscar pergunta por Id
     getbyid(id: number): Observable<Questao[]> {
        return this.http.get<Questao[]>(`${this.baseUrl}/getbyid/${id}`);
    }

}
