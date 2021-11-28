import { Router } from '@angular/router';
import { CategoriaService } from './../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deletar-categoria',
  templateUrl: './deletar-categoria.component.html',
  styleUrls: ['./deletar-categoria.component.css']
})
export class DeletarCategoriaComponent implements OnInit {
    id!:       number;
    nome!: string;

  constructor(private service: CategoriaService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  delete(id: number): void{
        console.log(this.delete);
        this.service.delete(id).subscribe((id) => {
            console.log(id);
            this.snack.open("Categoria deletada ", "Categorias",{
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                });
                this.router.navigate(["categoria/listar"]);
                this.ngOnInit
        });

    }
}
