import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.page.html',
  styleUrls: ['./add-produto.page.scss'],
})
export class AddProdutoPage implements OnInit {

  constructor( public modalC :ModalController) { }

  ngOnInit() {
  }
 
  closeModal(){
    this.modalC.dismiss();
  }

}
