import { Router } from '@angular/router';
import { JogadorService } from 'src/app/services/jogador.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deletar-jogador',
  templateUrl: './deletar-jogador.component.html',
  styleUrls: ['./deletar-jogador.component.css']
})
export class DeletarJogadorComponent implements OnInit {
    nome!:        string;
    email!:        string;
    senha!:        string;
    pontuacao!: number;

  constructor(private service: JogadorService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  delete(email: string): void{
      console.log(this.delete);
      this.service.delete(email).subscribe((email) => {
        console.log(email);
        this.snack.open("Conta deletada ", "Jogador",{
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["login/entrar"]);
          this.ngOnInit
      });
  }

}
