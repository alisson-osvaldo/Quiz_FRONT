import { LoginComponent } from './componentes/views/login/login/login.component';
import { ListarQuestaoComponent } from './componentes/views/questao/listar-questao/listar-questao.component';
import { CadastrarQuestaoComponent } from './componentes/views/questao/cadastrar-questao/cadastrar-questao.component';
import { CadastrarJogadorComponent } from './componentes/views/jogador/cadastrar-jogador/cadastrar-jogador.component';
import { ListarJogadorComponent } from './componentes/views/jogador/listar-jogador/listar-jogador.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    //---------------------------Jogador---------------------------
    {
        path: "jogador/listar",
        component: ListarJogadorComponent,
    },
    {
        path: "jogador/cadastrar",
        component: CadastrarJogadorComponent,
    },
    //----------------------Questões-------------------------------
    {
        path: "questao/cadastrar",
        component: CadastrarQuestaoComponent,
    },
    {
        path: "questao/listar",
        component: ListarQuestaoComponent,
    },
    //-----------------------------Login--------------------------------
    {
        path: "login/entrar",
        component: LoginComponent,
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
