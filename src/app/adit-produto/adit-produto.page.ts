import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-adit-produto',
  templateUrl: './adit-produto.page.html',
  styleUrls: ['./adit-produto.page.scss'],
})
export class AditProdutoPage implements OnInit {
  //@Input('produto') prod;  
  resultado : any;
  prod : any = {id_produto : '', descricao : '', cor :''}
  
  constructor(public navParams : NavParams,
              private modalC : ModalController,
              private produtoService:ProdutosService,
              public toastController: ToastController) {
     this.prod = this.navParams.get('produto');
     console.log(this.prod);
   }

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


  putProduto(){
    this.produtoService.putProduto(this.prod).then((response : any)=>{
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
