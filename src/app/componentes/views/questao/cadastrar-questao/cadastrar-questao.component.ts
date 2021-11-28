import { CategoriaService } from './../../../../services/categoria.service';
import { Categoria } from './../../../../models/categoria';
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
    pergunta!:  string;
    respostaCerta!:   string;
    resposta1!:   string;
    resposta2!:   string;
    resposta3!:   string;
    resposta4!:   string;
    jogadorId!:  number;

    jogadores!:  Jogador[];

    categorias!: Categoria[];
    categoriaId!: number;

  constructor(private router: Router, private service: QuestaoService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.list().subscribe((categorias) => {
        this.categorias = categorias;
    });
  }

  cadastrar( ): void{
    let questao: Questao = {
       pergunta: this.pergunta,
       respostaCerta: this.respostaCerta,
       resposta1: this.resposta1,
       resposta2: this.resposta2,
       resposta3: this.resposta3,
       resposta4: this.resposta4,
       jogadorId: this.jogadorId,
       categoriaId: this.categoriaId
    }
    this.service.create(questao).subscribe((questao) => {
      console.log(questao);
      this.router.navigate(["questao/listar"]);
   });
}
}
