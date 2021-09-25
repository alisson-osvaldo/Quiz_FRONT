import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ListarJogadorComponent } from './componentes/views/jogador/listar-jogador/listar-jogador.component';
import { CadastrarJogadorComponent } from './componentes/views/jogador/cadastrar-jogador/cadastrar-jogador.component';
import { CadastrarQuestaoComponent } from './componentes/views/questao/cadastrar-questao/cadastrar-questao.component';
import { ListarQuestaoComponent } from './componentes/views/questao/listar-questao/listar-questao.component';
// Import dos componentes da aplicação



@NgModule({
  declarations: [
    AppComponent,
    ListarJogadorComponent,
    CadastrarJogadorComponent,
    CadastrarQuestaoComponent,
    ListarQuestaoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
