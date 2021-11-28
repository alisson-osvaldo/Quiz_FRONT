import { Questao } from './../../../../models/questao';
import { CategoriaService } from './../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {
    nome!: string;

  constructor(private router: Router, private service:CategoriaService, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  cadastrar( ): void{
      let categoria: Categoria = {
          nome: this.nome
      }
      this.service.create(categoria).subscribe((categoria) => {
          console.log(categoria);
          this.snack.open("Cadastrado ", "Nova Categoria",{
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["categoria/listar"]);
      });
  }

}
