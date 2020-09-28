import { Component, OnInit } from '@angular/core';

import { MessageService } from 'src/app/services/message/message.service';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
	private MODULE = "MessagesComponent";

	constructor(public messageService: MessageService) {
		console.log(this.MODULE + '::constructor | ');
	}

	ngOnInit() {
		console.log(this.MODULE + '::ngOnInit | ');
	}

}
