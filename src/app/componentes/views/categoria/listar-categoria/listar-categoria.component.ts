import { CategoriaService } from './../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {
    categorias: Categoria[] = [];
    colunasExibidas: String[] = [ "id", "nome"]

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
      this.service.list().subscribe((categorias) =>{
          this.categorias = categorias;
          console.log(categorias);
      });
  }

}
