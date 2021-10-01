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
  /*entrar(email: string): Observable<Login> {
    return this.http.post<Login>(`${this.baseUrl}getbylogin/${email}`);
    }
    */
}
