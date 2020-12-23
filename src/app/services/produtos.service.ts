
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
  
  getProdutos(id = ''){
    let url = 'http://atimilson10.000webhostapp.com/treimentoPHP/PRODUTO/mostrar';
    if (id != ''){
      url = url + '/'+id;
    }
    return this.http.get(url)
      .toPromise();
  }

}
