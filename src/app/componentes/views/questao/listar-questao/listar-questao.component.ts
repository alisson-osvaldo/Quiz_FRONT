import { QuestaoService } from './../../../../services/questao.service';
import { Questao } from './../../../../models/questao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-questao',
  templateUrl: './listar-questao.component.html',
  styleUrls: ['./listar-questao.component.css']
})
export class ListarQuestaoComponent implements OnInit {
    questoes: Questao[] = [];
    colunasExibidas: String[] = [
        "id",
        "pergunta",
        "respostaC",
        "respostaF1",
        "respostaF2",
        "respostaF3",
    ]

  constructor(private service: QuestaoService) { }

  ngOnInit(): void {
      this.service.list().subscribe((questoes) => {
            this.questoes = questoes;
            console.log(questoes);
      });
  }

}
