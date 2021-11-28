import { Categoria } from "./categoria";

export interface Questao {
    id?:             number;
    pergunta:    string;
    respostaCerta:     string;
    resposta1:     string;
    resposta2:     string;
    resposta3:     string;
    resposta4:     string;
    //ponto:         number;

    categoriaId: number;
    categoria? : Categoria;

    jogadorId:    number;
    criadoem?: number;
}
