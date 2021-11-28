import { DeletarCategoriaComponent } from './componentes/views/categoria/deletar-categoria/deletar-categoria.component';
import { ListarCategoriaComponent } from './componentes/views/categoria/listar-categoria/listar-categoria.component';
import { CadastrarCategoriaComponent } from './componentes/views/categoria/cadastrar-categoria/cadastrar-categoria.component';
import { EditarQuestaoComponent } from './componentes/views/questao/editar-questao/editar-questao.component';
import { EditarJogadorComponent } from './componentes/views/jogador/editar-jogador/editar-jogador.component';
import { DeletarQuestaoComponent } from './componentes/views/questao/deletar-questao/deletar-questao.component';
import { DeletarJogadorComponent } from './componentes/views/jogador/deletar-jogador/deletar-jogador.component';
import { JogarBuscarPerguntaComponent } from './componentes/views/jogar/jogar-buscar-pergunta/jogar-buscar-pergunta.component';
import { ContaJogadorComponent } from './componentes/views/jogador/conta-jogador/conta-jogador.component';
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
    {
        path: "jogador/conta",
        component: ContaJogadorComponent
    },
    {
        path: "jogador/deletar/:email",
        component: DeletarJogadorComponent,
    },
    {
        path: "jogador/editar",
        component: EditarJogadorComponent,
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
    {
        path: "questao/deletar/:nQuestao",
        component: DeletarQuestaoComponent,
    },
    {
        path: "questao/editar",
        component: EditarQuestaoComponent,
    },

    //-----------------------------Login--------------------------------
    {
        path: "login/entrar",
        component: LoginComponent,
    },
    //------------------------------Jogar--------------------------------
    {
        path: "jogar/Pergunta",
        component: JogarBuscarPerguntaComponent,
    },
    //----------------------------Categorias----------------------------
    {
        path:"categoria/cadastrar",
        component: CadastrarCategoriaComponent,
    },
    {
        path:"categoria/listar",
        component: ListarCategoriaComponent,
    },
    {
        path:"categoria/deletar",
        component: DeletarCategoriaComponent,
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
