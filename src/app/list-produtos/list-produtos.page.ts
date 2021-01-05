import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { ModalController, ToastController } from '@ionic/angular';
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
              public modalC :ModalController,
              public  toastController : ToastController) { }

  ngOnInit() {
  }

  async mensagens(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000,
      color : "success"
    });
    toast.present();
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

  deleteProduto(dados){
    console.log(dados.id);

    this.produtoService.deleteProduto(dados.id).then((response : any)=>{
      this.resultado = JSON.stringify(response);
      this.mensagens('Produto deletado');
  })
  .catch((response)=>{
      this.resultado = JSON.stringify(response);
      console.log(this.resultado);
      this.mensagens('erro ao salvar');
  })
  }

  
  
}
