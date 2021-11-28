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
    pergunta!:          string;
    respostaCerta!:        string;
    resposta1!:      string;
    resposta2!:      string;
    resposta3!:      string;
    resposta4!:      string;
    ponto!:             number;
    jogadorId!:       number;
    categoriaId!:       number;

  constructor(private router: Router, private service: QuestaoService) { }

  ngOnInit(): void {}

  update(): void {
    let questao: Questao = {
      pergunta: this.pergunta,
      respostaCerta: this.respostaCerta,
      resposta1: this.resposta1,
      resposta2: this.resposta2,
      resposta3: this.resposta3,
      resposta4: this.resposta3,
      jogadorId: this.jogadorId,
      categoriaId: this.categoriaId
    };
    this.service.update(questao).subscribe((questao) => {
        console.log(questao);
        this.router.navigate(["questao/listar"]);
    });
}
}
