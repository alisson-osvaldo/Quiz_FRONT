import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Jogador } from 'src/app/models/jogador';
import { JogadorService } from 'src/app/services/jogador.service';

@Component({
  selector: 'app-cadastrar-jogador',
  templateUrl: './cadastrar-jogador.component.html',
  styleUrls: ['./cadastrar-jogador.component.css']
})
export class CadastrarJogadorComponent implements OnInit {
    nome!:        string;
    senha!:        string;
    email!:        string;
    pontuacao!: number;

constructor(private router: Router, private service: JogadorService, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar( ): void{
      let jogador: Jogador = {
         nome: this.nome,
         senha: this.senha,
         email: this.email,
         pontuacao: this.pontuacao
      }
      this.service.create(jogador).subscribe((jogador) => {
        console.log(jogador);
        this.snack.open("Cadastrado", "Ok",{
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        this.router.navigate(["jogador/listar"]);
     });
     this.snack.open("E-mail Já Cadastrado", "Erro",{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
  }

}
