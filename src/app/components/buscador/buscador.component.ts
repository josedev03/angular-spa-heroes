import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarHeroes(params.termino);
      this.termino = params.termino;
    });
  }

}
