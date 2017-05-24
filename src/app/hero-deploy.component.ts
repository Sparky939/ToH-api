import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute }         from '@angular/router';
import { Location }               from '@angular/common';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-deploy',
  templateUrl: './hero-deploy.component.html',
  styleUrls: [ './hero-deploy.component.css' ]
})
export class HeroDeployComponent implements OnInit {
  hero: Hero;
  enemyHero: Hero;
  compared: boolean = false;
  // expect 0 = strength, 1 = speed, 2 = intelligence
  test: number;
  // expect "hero" or "enemy"
  winner: string;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  // Returns random number between two values
  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Will return errors if hero IDs aren't continuous
  ngOnInit(): void {
    let id = this.randomInt(11, 20);
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
    let enemyId = this.randomInt(11, 20);
    // If get the same hero id, pick a random one until it isn't the same
    if ( enemyId === id ) {
      do {
        enemyId = this.randomInt(11, 20);
      } while (enemyId === id);
    }
    this.heroService.getHero(enemyId)
      .then(hero => this.enemyHero = hero);
  }
  tryAgain(): void {
    this.compared = false;
    this.test = 3;
    this.winner = '';
    let id = this.randomInt(11, 20);
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
    let enemyId = this.randomInt(11, 20);
    // If get the same hero id, pick a random one until it isn't the same
    if ( enemyId === id ) {
      do {
        enemyId = this.randomInt(11, 20);
      } while (enemyId === id);
    }
    this.heroService.getHero(enemyId)
      .then(hero => this.enemyHero = hero);
  }

  compareStat(stat: number): void {
    switch (stat) {
      case 0:
        this.test = 0;
        if (this.hero.strength > this.enemyHero.strength) {
          this.compared = true;
          console.log('compared strength - hero wins');
          this.winner = 'hero';
        } else {
          this.compared = true;
          console.log('compared strength - hero loses');
          this.winner = 'enemy';
        }
        break;
      case 1:
        this.test = 1;
        if (this.hero.speed > this.enemyHero.speed) {
          this.compared = true;
          console.log('compared speed - hero wins');
          this.winner = 'hero';
        } else {
          this.compared = true;
          console.log('compared speed - hero loses');
          this.winner = 'enemy';
        }
        break;
      case 2:
        this.test = 2;
        if (this.hero.intelligence > this.enemyHero.intelligence) {
          this.compared = true;
          console.log('compared intelligence - hero wins');
          this.winner = 'hero';
        } else {
          this.compared = true;
          console.log('compared intelligence - hero loses');
          this.winner = 'enemy';
        }
        break;
    }
  }

  goBack(): void {
    this.location.back();
  }
}
