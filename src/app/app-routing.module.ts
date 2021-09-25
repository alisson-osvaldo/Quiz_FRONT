import { CadastrarJogadorComponent } from './componentes/views/jogador/cadastrar-jogador/cadastrar-jogador.component';
import { ListarJogadorComponent } from './componentes/views/jogador/listar-jogador/listar-jogador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        component: ListarJogadorComponent
    },
    {
        path: "jogador/listar",
        component: ListarJogadorComponent,
    },
    {
        path: "jogador/cadastrar",
        component: CadastrarJogadorComponent,
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
