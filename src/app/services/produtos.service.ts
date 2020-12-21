
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  
  getProdutos(){
    let url = 'http://localhost/treimentoPHP/produto/mostrar';
    return this.http.get(url)
      .toPromise();
  }

}
