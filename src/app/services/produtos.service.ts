
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
    return this.http.post(url,params, {headers: this.httpHeader.headers})
    .toPromise();
  }

  putProduto(produto: any){
    let url = 'http://manoel2100.com.br/api/produto/inserir';
    //console.log(produto);
    const params = new HttpParams({
      fromObject:{
        id : produto.id,
        descricao : produto.descricao,
        cor : produto.cor
      }    
    });
    return this.http.put(url,params, {headers: this.httpHeader.headers})
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
      headers: this.httpHeader.headers, 
      body : params
    };    
    return this.http.options(url,httpOptions).toPromise();
  }

}
