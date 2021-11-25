import { QuestaoService } from './../../../../services/questao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deletar-questao',
  templateUrl: './deletar-questao.component.html',
  styleUrls: ['./deletar-questao.component.css']
})
export class DeletarQuestaoComponent implements OnInit {
    id!:              number;
    nquestao!:   string;
    pergunta!:    string;
    respostaC!:  string;
    respostaF1!: string;
    respostaF2!: string;
    respostaF3!: string;
    jogadorId!:   number;

  constructor(private service: QuestaoService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  delete(id: number): void{
    console.log(this.delete);
    this.service.delete(id).subscribe((id) => {
      console.log(id);
      this.snack.open("Pergunta deletada ", "Perguntas",{
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["questao/listar"]);
        this.ngOnInit
    });
}
}
