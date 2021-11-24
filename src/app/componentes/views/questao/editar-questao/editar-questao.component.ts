import { QuestaoService } from './../../../../services/questao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questao } from 'src/app/models/questao';

@Component({
  selector: 'app-editar-questao',
  templateUrl: './editar-questao.component.html',
  styleUrls: ['./editar-questao.component.css']
})
export class EditarQuestaoComponent implements OnInit {
    nquestao!:         string;
    pergunta!:          string;
    respostaC!:        string;
    respostaF1!:      string;
    respostaF2!:      string;
    respostaF3!:      string;
    ponto!:              number;
    jogadorId!:        number;

  constructor(private router: Router, private service: QuestaoService) { }

  ngOnInit(): void {}

  update(): void {
    let questao: Questao = {
      nquestao: this.nquestao,
      pergunta: this.pergunta,
      respostaC: this.respostaC,
      respostaF1: this.respostaF1,
      respostaF2: this.respostaF2,
      respostaF3: this.respostaF3,
      ponto: this.ponto,
      jogadorId: this.jogadorId
    };
    this.service.update(questao).subscribe((questao) => {
        console.log(questao);
        this.router.navigate(["questao/listar"]);
    });
}
}
