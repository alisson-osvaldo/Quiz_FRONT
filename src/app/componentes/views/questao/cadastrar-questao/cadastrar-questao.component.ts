import { Jogador } from './../../../../models/jogador';
import { Questao } from './../../../../models/questao';
import { QuestaoService } from './../../../../services/questao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-questao',
  templateUrl: './cadastrar-questao.component.html',
  styleUrls: ['./cadastrar-questao.component.css']
})
export class CadastrarQuestaoComponent implements OnInit {
    nquestao!: string;
    pergunta!:  string;
    respostaC!:   string;
    respostaF1!:   string;
    respostaF2!:   string;
    respostaF3!:   string;
    ponto!:       number;
    jogadorId!: number;

    jogadores!:  Jogador[];


  constructor(private router: Router, private service: QuestaoService) { }

  ngOnInit(): void {}

  cadastrar( ): void{
    let questao: Questao = {
       nquestao: this.nquestao,
       pergunta: this.pergunta,
       respostaC: this.respostaC,
       respostaF1: this.respostaF1,
       respostaF2: this.respostaF2,
       respostaF3: this.respostaF3,
       ponto:     this.ponto,
       jogadorId: this.jogadorId
    }
    this.service.create(questao).subscribe((questao) => {
      console.log(questao);
      this.router.navigate(["questao/listar"]);
   });
}
}
