
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(private http: HttpClient) { }
  
  getProdutos(id = ''){
    let url = 'http://manoel2100.com.br/api/produto/mostrar';
    if (id != ''){
      url = url + '/'+id;
    }
    return this.http.get(url)
      .toPromise();
  }

  postProduto(desc,cor : any){
    let url = 'http://manoel2100.com.br/api/produto/inserir';
    //console.log(produto);
    const params = new HttpParams({
      fromObject:{
        descricao : desc,
        cor : cor
      }    
    });
    console.log(params);
    return this.http.post(url,params, {headers: this.httpHeader.headers})
    .toPromise();
  }

  deleteProduto(id){
    let url = 'http://manoel2100.com.br/api/produto/deletar';
    const params = new HttpParams({
      fromObject:{
        id : id
      } 
    });   
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }), 
      body : params
    };    
    return this.http.delete(url,httpOptions).toPromise();
  }

}
