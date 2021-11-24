import { JogadorService } from 'src/app/services/jogador.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/models/jogador';

@Component({
  selector: 'app-editar-jogador',
  templateUrl: './editar-jogador.component.html',
  styleUrls: ['./editar-jogador.component.css']
})
export class EditarJogadorComponent implements OnInit {
    id!:               number;
    nome!:         string;
    email!:         string;
    senha!:         string;
    pontuacao!: number;

  constructor(private router: Router, private service: JogadorService) { }

  ngOnInit(): void {}

  update(): void {
    let jogador: Jogador = {
      id: this.id,
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      pontuacao: this.pontuacao
    };
    this.service.update(jogador).subscribe((jogador) => {
        console.log(jogador);
        this.router.navigate(["jogador/listar"]);
    });
}

}
