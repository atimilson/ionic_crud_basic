import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ListProdutosPage } from '../list-produtos/list-produtos.page';
import { ProdutosService } from '../services/produtos.service';


@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.page.html',
  styleUrls: ['./add-produto.page.scss'],
})
export class AddProdutoPage implements OnInit {
  descricao = 'teste';
  cor = 'cor teste';

  resultado : any = {status:'',dados : [{id:'', descricao:'',cor:'',data_inclusao:''}]};

  constructor( public modalC :ModalController,
             private produtoService:ProdutosService,
             public toastController: ToastController) { }

  ngOnInit() {
  }
 
  closeModal(){
    this.modalC.dismiss();
  }

  async mensagens(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000,
      color : "success"
    });
    toast.present();
  }

  postProduto(){
    //let produto = {descricao:this.descricao,cor:this.cor};
    this.produtoService.postProduto(this.descricao,this.cor).then((response : any)=>{
        this.resultado = JSON.stringify(response);
        this.mensagens('Produto Salvo');
        this.closeModal();
    })
    .catch((response)=>{
        this.resultado = JSON.stringify(response);
        console.log(this.resultado);
        this.mensagens('erro ao salvar');
    })
  }

}
