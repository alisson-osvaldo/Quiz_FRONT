import { Login } from './../../../../models/login';
import { ActivatedRoute, Router } from '@angular/router';
import { JogadorService } from './../../../../services/jogador.service';
import { LoginService } from './../../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/models/jogador';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    id!:            number;
    email!:      string;
    senha!:      string;
    jogadores!: Jogador[ ];
    jogadorId!: number;

  constructor(
      private loginService: LoginService,
      private jogadorService: JogadorService,
      private router: Router,
      private route: ActivatedRoute,
      private snack: MatSnackBar
  ) { }

  ngOnInit(): void {}

  entrar(): void {
    let login: Login = {
        email:       this.email,
        senha:       this.senha,
        jogadorId: this.jogadorId
    };
    this.loginService.create(login).subscribe((login) => {
        console.log(login);
        this.snack.open("Ok ", "...",{
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        this.router.navigate(["jogador/listar"]);
    });
    this.snack.open("E-mail ou Senha ", "Incorreto",{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
}

}
