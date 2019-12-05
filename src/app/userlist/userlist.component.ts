import { Component, OnInit, ViewChild } from '@angular/core';
import users from '../users';
import { LoginserviceService } from '../login/loginservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, EMPTY, combineLatest, Subject } from 'rxjs';
import { catchError, retry, map, tap, take, find } from 'rxjs/operators';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import Users from '../users';

@Component({
	selector: 'app-userlist',
	templateUrl: './userlist.component.html',
	styleUrls: [ './userlist.component.css' ]
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserlistComponent implements OnInit {
	users: users[];
	usersasync$: Observable<users[]>;
	private errormessagesubject = new Subject<string>();
	errorMessage$ = this.errormessagesubject.asObservable();
	constructor(private _login: LoginserviceService, private _router: Router, private _route: ActivatedRoute) {}

	ngOnInit(): void {
		debugger;
		// if (this._login.isadmin) {
		// 	this._login.getuser().subscribe((data: users[]) => {
		// 		this.users = data;
		// 	});
		// } else {
		// 	window.alert('You are not an admin');
		// 	return false;
		// }
		//
		this._login.getuser().subscribe((data: users[]) => {
			this.users = data;
		});

		// this.usersasync$ = this._login.getuser().pipe(
		// 	tap((data) => console.log('users:', JSON.stringify(data))),
		// 	catchError((err) => {
		// 		this.errorMessage$ = err;
		// 		return EMPTY;
		// 	})
		// );

		// this.usersasync$ = this._login
		// 	.getuser()
		// 	.pipe(
		// 		map(
		// 			(data) => data[0].find((data) => data[0].first_name === 'Rohan'),
		// 			tap((data) => console.log('users:', JSON.stringify(data)))
		// 		)
		// 	);

		// this.usersasync$ = this._login.getuser().pipe(
		// 	map((user) =>
		// 		user.map((users) => ({
		// 			...users,
		// 			name: user.roles
		// 		}))
		// 	)
		// );
	}

	deleteuser(id) {
		debugger;
		this._login.deleteuser(id).subscribe((res) => {
			window.alert('Deleted Successfully');
		});
	}
}
