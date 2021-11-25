import { Jogador } from "./jogador";

export interface Login {
    id?:             number;
    email:         string;
    senha:         string;
    jogadorId:  number;
    jogador?:    Jogador;
}
