import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProdutoPage } from './add-produto.page';

describe('AddProdutoPage', () => {
  let component: AddProdutoPage;
  let fixture: ComponentFixture<AddProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProdutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
