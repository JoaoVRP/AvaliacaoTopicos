import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/Produto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  listar(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.baseURL}produto/listar/`);
  }

  cadastrar(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.baseURL}produto/cadastrar`, produto);
  }

}
