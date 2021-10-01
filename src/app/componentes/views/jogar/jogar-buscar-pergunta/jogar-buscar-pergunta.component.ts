import { Questao } from './../../../../models/questao';
import { JogarService } from './../../../../services/jogar.service';
import { Jogar } from './../../../../models/jogar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogar-buscar-pergunta',
  templateUrl: './jogar-buscar-pergunta.component.html',
  styleUrls: ['./jogar-buscar-pergunta.component.css']
})
export class JogarBuscarPerguntaComponent implements OnInit {
    questoes: Questao[] = [];

  constructor(private service: JogarService) { }

  //não está funcionando
  ngOnInit(): void {
      this.service.list( ).subscribe((questao) => {
        this.questoes = questao;
        console.log(questao);
      });
  }

}
