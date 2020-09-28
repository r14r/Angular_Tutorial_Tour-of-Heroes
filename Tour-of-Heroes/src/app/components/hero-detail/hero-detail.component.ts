import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero/hero.service';


@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
	private MODULE = "HeroDetailComponent";
	hero: Hero;

	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService,
		private location: Location
	) {
		console.log(this.MODULE + '::constructor | ');
	}

	ngOnInit(): void {
		console.log(this.MODULE + '::ngOnInit | ');

		this.getHero();
	}

	getHero(): void {
		console.log(this.MODULE + '::getHero | ');

		const id = +this.route.snapshot.paramMap.get('id');
		this.heroService.getHero(id)
			.subscribe(hero => this.hero = hero);
	}

	goBack(): void {
		console.log(this.MODULE + '::goBack | ');

		this.location.back();
	}

	save(): void {
		console.log(this.MODULE + '::sve | ');

		this.heroService.updateHero(this.hero)
		  .subscribe(() => this.goBack());
	  }
}
