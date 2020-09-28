import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Hero } from 'src/app/models/hero';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	private MODULE = "HeroService";

	constructor() {
		console.log(this.MODULE+'::constructor | ');

	}

	createDb() {
		console.log(this.MODULE+'::createDb | ');

		const heroes = [
			{ id: 11, name: 'Mr. Nice' },
			{ id: 21, name: 'Narco' },
			{ id: 31, name: 'Bombasto' },
			{ id: 41, name: 'Celeritas' },
			{ id: 51, name: 'Magneta' },
			{ id: 61, name: 'RubberMan' },
			{ id: 71, name: 'Dynama' },
			{ id: 81, name: 'Dr IQ' },
			{ id: 91, name: 'Magma' }
		];
		return { heroes };
	}

	// Overrides the genId method to ensure that a hero always has an id.
	// If the heroes array is empty, the method below returns the initial number (11).
	// If the heroes array is not empty, the method below returns the highest
	// hero id + 1.
	genId(heroes: Hero[]): number {
		console.log(this.MODULE+'::genId | ');

		return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
	}
}
