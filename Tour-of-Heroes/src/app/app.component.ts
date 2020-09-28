import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private MODULE="AppComponent";

  title = 'Tour of Heroes';

  constructor() {
	  console.log(this.MODULE+'::constructor | ');
   }
}
