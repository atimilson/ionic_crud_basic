
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos(){
     let url = 'http://localhost/treimentoPHP/produto/mostrar';
     return this.http.get(url).toPromise();
  }

}
