import { JogadorService } from 'src/app/services/jogador.service';
import { QuestaoService } from './../../../../services/questao.service';
import { Questao } from './../../../../models/questao';
import { JogarService } from './../../../../services/jogar.service';
import { Jogar } from './../../../../models/jogar';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-jogar-buscar-pergunta',
  templateUrl: './jogar-buscar-pergunta.component.html',
  styleUrls: ['./jogar-buscar-pergunta.component.css']
})
export class JogarBuscarPerguntaComponent implements OnInit {
    resposta!: string;
    jogadas!: Jogar[];
    questoes: Questao[] = [];
    questaoId!: number;

    colunasExibidas: String[] = [
        "pergunta",
        "resposta1",
        "resposta2",
        "resposta3",
        "resposta4",
    ];


  constructor(
      private router: Router,
      private jogarService: JogarService,
      private questaoService: QuestaoService,
      private route: ActivatedRoute,
      private snack: MatSnackBar
      ) { }

  //não está funcionando
  ngOnInit(): void {
     this.questaoService.list( ).subscribe((questoes) => {
        this.questoes = questoes;
        console.log(questoes);
      });
  }

  getbyid( id : number): void {
      this.questaoService.getbyid( id ).subscribe((questoes) => {
          this.questoes = questoes;
          console.log(questoes);
      })
  }

  cadastrar( ): void{
        let jogar: Jogar = {
        resposta: this.resposta,
        questaoId: this.questaoId
        }
        this.jogarService.create(jogar).subscribe((jogar) => {
        console.log(jogar);
        this.snack.open("Parabéns Acertou", "Passe para próxima",{
            duration: 5000,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        });
        this.snack.open("Resposta incorreta ", "Passe para próxima",{
            duration: 5000,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
    }

}
