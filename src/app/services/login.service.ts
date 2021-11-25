import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private baseUrl = "http://localhost:5000/api/login";

  constructor(private http: HttpClient) { }

  //Cadastrar
  create(login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.baseUrl}/create`, login);
    }

    delete(): Observable<Login> {
        return this.http.delete<Login>(`${this.baseUrl}/delete` );
    }
}
