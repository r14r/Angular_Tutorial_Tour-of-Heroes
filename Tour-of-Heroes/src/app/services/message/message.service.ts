import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class MessageService {
	messages: string[] = [];

	private MODULE = "MessageService";

	constructor() {
		console.log(this.MODULE + '::constructor | ');
	}

	add(message: string) {
		console.log(this.MODULE + '::add | ');

		this.messages.push(message);
	}

	clear() {
		console.log(this.MODULE + '::clear | ');

		this.messages = [];
	}
}
