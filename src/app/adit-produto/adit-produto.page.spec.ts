import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AditProdutoPage } from './adit-produto.page';

describe('AditProdutoPage', () => {
  let component: AditProdutoPage;
  let fixture: ComponentFixture<AditProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditProdutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AditProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
