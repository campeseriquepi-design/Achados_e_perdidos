import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'categoria',
  loadChildren: () => import ('./categoria/categoria-module').then(m=> m.CategoriaModule)
}
,
{path: 'produto',
  loadChildren: () => import ('./produto/produto-module').then(m=> m.ProdutoModule)
}
,

{path: 'lista-ex',
  loadChildren: () => import ('./lista-ex/lista-ex-module').then(m=> m.ListaExModule)
},
]
{
  path:'lista=ex2'
    loadChildren: () => import ('./lista-ex2/lista-ex2-module').then(m=> m.ListaEx2Module)
};



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
