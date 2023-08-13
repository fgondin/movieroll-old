import { Component } from '@angular/core';
import { Filme } from './modelo/filme.model'

@Component({
  selector: 'cin-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  filme: Filme[] = [
    {id: "1", nome: "007 Goldeneye", src: "/assets/007-goldeneye.jpg", genero: "1"},
    {id: "2", nome: "Duro de Matar: A Vingança", src: "/assets/duro-de-matar.jpg", genero: "1"},
    {id: "3", nome: "O Exterminador do Futuro", src: "/assets/o-exterminador.jpg", genero: "1"},
    {id: "4", nome: "A Bruxa de Blair", src: "/assets/a-bruxa", genero: "2"},
    {id: "5", nome: "O Chamado", src: "/assets/o-chamado", genero: "2"},
    {id: "6", nome: "O Silêncio dos Inocentes", src: "/assets/o-silencio.jpg", genero: "2"},
    {id: "7", nome: "Uma Linda Mulher", src: "/assets/uma-linda.jpg", genero: "3"},
    {id: "8", nome: "Encontro Marcado", src: "/assets/encontro-marcado.jpg", genero: "3"},
    {id: "9", nome: "Amor Além Da Vida", src: "/assets/amor-alem.jpg", genero: "3"},
  ]
}
