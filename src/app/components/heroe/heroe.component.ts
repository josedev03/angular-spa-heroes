import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: any = {};
  // tslint:disable-next-line: no-inferrable-types
  imagen: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params.id);
    });

    this.imagen = this.heroe.casa === 'DC' ? 'assets/img/dc.png' : 'assets/img/marvel.png';
  }
}
