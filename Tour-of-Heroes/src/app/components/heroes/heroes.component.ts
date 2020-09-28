import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	private MODULE = "HeroesComponent";

	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) {
		console.log(this.MODULE + '::constructor | ');
	}

	ngOnInit() {
		console.log(this.MODULE + '::ngOnInit | ');

		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		console.log(this.MODULE + '::onSelect | ');

		this.selectedHero = hero;
	}

	getHeroes(): void {
		console.log(this.MODULE + '::getHeroes | ');

		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}

	add(name: string): void {
		console.log(this.MODULE + '::getHeroes | ');

		name = name.trim();
		if (!name) { return; }
		this.heroService.addHero({ name } as Hero)
			.subscribe(hero => {
				this.heroes.push(hero);
			});
	}

	delete(hero: Hero): void {
		console.log(this.MODULE + '::getHeroes | ');

		this.heroes = this.heroes.filter(h => h !== hero);
		this.heroService.deleteHero(hero).subscribe();
	}


}
