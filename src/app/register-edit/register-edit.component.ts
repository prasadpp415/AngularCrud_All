import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../login/loginservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-register-edit',
	templateUrl: './register-edit.component.html',
	styleUrls: [ './register-edit.component.css' ]
})
export class RegisterEditComponent implements OnInit {
	users: any = {};
	registerForm: FormGroup = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		username: new FormControl(''),
		password: new FormControl('')
	});
	constructor(private _login: LoginserviceService, private _route: ActivatedRoute, private _router: Router) {}

	ngOnInit() {
		this._route.params.subscribe((params) => {
			this._login.edituser(params['id']).subscribe((res) => {
				this.users = res;
			});
		});
	}

	updateuser(firstName, lastName, username, password, roles) {
		this._route.params.subscribe((params) => {
			this._login.updateuser(firstName, lastName, username, password, roles, params['id']);
			this._router.navigate([ 'login/users' ]);
			setTimeout(() => {
				alert('Data updated');
			}, 2000);
		});
	}
}
