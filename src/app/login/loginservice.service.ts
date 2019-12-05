import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
	providedIn: 'root'
})
export class LoginserviceService implements OnInit {
	uri = 'http://localhost:4200/login';
	loggedin = false;
	isadmin = false;
	dummyadmin = false;
	constructor(private _http: HttpClient) {}

	adduser(first_name, last_name, user_name, password, roles) {
		const obj = {
			first_name: first_name,
			last_name: last_name,
			user_name: user_name,
			password: password,
			roles: roles
		};
		this._http.post(`${this.uri}/add`, obj).subscribe((res) => console.log('Done'));
	}

	getuser() {
		debugger;
		return this._http.get(`${this.uri}`);
	}

	validatelogin(username, password) {
		return this._http.post(`${this.uri}/validate`, { user_name: username, password: password });
	}

	isuserloggedin(status) {
		return (this.loggedin = status);
	}

	isuserAdmin(status) {
		return (this.isadmin = status);
	}

	edituser(id) {
		return this._http.get(`${this.uri}/users/edit/${id}`);
	}

	updateuser(first_name, last_name, user_name, password, roles, id) {
		const obj = {
			first_name: first_name,
			last_name: last_name,
			user_name: user_name,
			password: password,
			roles: roles
		};
		this._http.post(`${this.uri}/users/update/${id}`, obj).subscribe((res) => console.log('Updated!!!'));
	}

	deleteuser(id) {
		return this._http.get(`${this.uri}/delete/${id}`);
	}

	// usersList(adduser?) {
	// 	var newuser = adduser ? adduser : 0;
	// 	var usersarray;
	// 	usersarray = {
	// 		users: [ { name: 'Abc', role: 'user' }, { name: 'Admin', role: 'admin' }, { name: '', role: 'user' } ]
	// 	};
	// 	return usersarray;
	// }

	// validateuser(username: any): boolean {
	// 	var userslist = this.usersList(username);
	// 	for (var i = 0; i < userslist.users.length; i++) {
	// 		if (userslist.users[i].name == username) {
	// 			return this.isUserLoggedin();
	// 		}
	// 	}

	// 	return false;
	// }

	ngOnInit() {}
}
