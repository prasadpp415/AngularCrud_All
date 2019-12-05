import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../login/loginservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup = new FormGroup({
		firstName: new FormControl('', Validators.required),
		lastName: new FormControl('', Validators.required),
		username: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
		roles: new FormControl('', Validators.required)
	});
	constructor(private _login: LoginserviceService, private _route: Router) {}

	ngOnInit() {}

	adduser(firstName, lastName, username, password, roles) {
		debugger;
		if (this.registerForm.valid) {
			this._login.adduser(firstName, lastName, username, password, roles);
			alert('User has been registered');
			this.registerForm.reset();
			this._route.navigateByUrl('/login');
		}
	}

	canDeactivate() {
		return this.registerForm.invalid;
	}
}
