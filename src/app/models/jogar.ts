import { Questao } from './questao';
export interface Jogar {
    id?:              number;
    resposta:      string;
    questaoId:   number;
    questao?:    Questao;
}
