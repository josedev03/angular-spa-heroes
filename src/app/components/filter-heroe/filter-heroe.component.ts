import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-filter-heroe',
  templateUrl: './filter-heroe.component.html',
  styles: []
})
export class FilterHeroeComponent implements OnInit {
  heroes: Heroe[];
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarHeroes(params.termino);
    });
  }

  ngOnInit(): void {}
}
