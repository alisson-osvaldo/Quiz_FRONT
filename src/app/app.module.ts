import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Import dos componentes da aplicação
import { ListarJogadorComponent } from './componentes/views/jogador/listar-jogador/listar-jogador.component';
import { CadastrarJogadorComponent } from './componentes/views/jogador/cadastrar-jogador/cadastrar-jogador.component';
import { CadastrarQuestaoComponent } from './componentes/views/questao/cadastrar-questao/cadastrar-questao.component';
import { ListarQuestaoComponent } from './componentes/views/questao/listar-questao/listar-questao.component';
import { HeaderComponent } from './componentes/template/header/header/header.component';
import { FooterComponent } from './componentes/template/footer/footer/footer.component';
import { LoginComponent } from './componentes/views/login/login/login.component';
import { NavComponent } from './componentes/template/nav/nav/nav.component';
import { ContaJogadorComponent } from './componentes/views/jogador/conta-jogador/conta-jogador.component';
import { JogarBuscarPerguntaComponent } from './componentes/views/jogar/jogar-buscar-pergunta/jogar-buscar-pergunta.component';
import { JogarEnviarRespostaComponent } from './componentes/views/jogar/jogar-enviar-resposta/jogar-enviar-resposta.component';
import { DeletarJogadorComponent } from './componentes/views/jogador/deletar-jogador/deletar-jogador.component';
import { DeletarQuestaoComponent } from './componentes/views/questao/deletar-questao/deletar-questao.component';
import { EditarJogadorComponent } from './componentes/views/jogador/editar-jogador/editar-jogador.component';
import { EditarQuestaoComponent } from './componentes/views/questao/editar-questao/editar-questao.component';





@NgModule({
  declarations: [
    AppComponent,
    ListarJogadorComponent,
    CadastrarJogadorComponent,
    CadastrarQuestaoComponent,
    ListarQuestaoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NavComponent,
    ContaJogadorComponent,
    JogarBuscarPerguntaComponent,
    JogarEnviarRespostaComponent,
    DeletarJogadorComponent,
    DeletarQuestaoComponent,
    EditarJogadorComponent,
    EditarQuestaoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
