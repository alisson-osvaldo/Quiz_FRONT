import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Jogador } from 'src/app/models/jogador';
import { JogadorService } from 'src/app/services/jogador.service';

@Component({
  selector: 'app-listar-jogador',
  templateUrl: './listar-jogador.component.html',
  styleUrls: ['./listar-jogador.component.css']
})
export class ListarJogadorComponent implements OnInit {
    jogadores: Jogador[] = [];
    colunasExibidas: String[] = [
        "nome",
        "email",
        "pontuacao",
    ];

    constructor(private service: JogadorService) {}

    ngOnInit(): void {
        this.service.list().subscribe((jogadores) => {
            this.jogadores = jogadores;
            console.log(jogadores);
        });

    }

}
