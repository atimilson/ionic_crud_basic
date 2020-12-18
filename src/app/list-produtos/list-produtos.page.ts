import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.page.html',
  styleUrls: ['./list-produtos.page.scss'],
})
export class ListProdutosPage implements OnInit {
  id_produto = '1'
  constructor(private produtoService:ProdutosService) { }

  ngOnInit() {
  }
  consultarCep(){
    this.produtoService.getProdutos()
      .then((json)=>{
        console.log(json);
      })
      .catch()
  }
}
