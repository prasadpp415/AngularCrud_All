import { Component, OnInit, ViewChildren, AfterViewInit, QueryList, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements AfterViewInit {
	@ViewChild(LoginComponent, { static: true })
	viewChild: LoginComponent;
	// @Input() username: string;
	username: string;
	constructor() {}

	ngAfterViewInit() {
		debugger;
		this.username = this.viewChild.name;
		console.log(this.username);
	}
}
