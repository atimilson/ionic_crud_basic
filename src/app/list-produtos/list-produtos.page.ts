import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { ModalController } from '@ionic/angular';
import { AddProdutoPage } from '../add-produto/add-produto.page';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.page.html',
  styleUrls: ['./list-produtos.page.scss'],
})
export class ListProdutosPage implements OnInit {
  id_produto = '';
 // dados : any = {id :'', descricao: '',cor:'',data_inclusao:''}
  resultado : any = {status:'',dados : [{id:'', descricao:'',cor:'',data_inclusao:''}]};

  constructor(private produtoService:ProdutosService, 
              public modalC :ModalController ) { }

  ngOnInit() {
  }
  consultarCep(){
    this.produtoService.getProdutos(this.id_produto)
      .then((json)=>{
        this.resultado = json;
        console.log(this.resultado.dados[0].id)
      })
      .catch()
  }
  async testemodal(){
    const modal = await this.modalC.create({
      component : AddProdutoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  
}
