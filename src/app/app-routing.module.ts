import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-produto',
    loadChildren: () => import('./add-produto/add-produto.module').then( m => m.AddProdutoPageModule)
  },
  {
    path: 'adit-produto/:id',
    loadChildren: () => import('./adit-produto/adit-produto.module').then( m => m.AditProdutoPageModule)
  },
  {
    path: 'list-produtos',
    loadChildren: () => import('./list-produtos/list-produtos.module').then( m => m.ListProdutosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
