import { Component, OnInit, EventEmitter, Input, Output, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginserviceService } from './loginservice.service';
import { Router } from '@angular/router';
import users from '../users';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

export interface DialogData {
	name: string;
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
	users: users[];
	userexist = false;
	form: FormGroup = new FormGroup({
		username: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required)
	});
	name: string;
	constructor(private _route: Router, private dialog: MatDialog, private _login: LoginserviceService) {}

	submit() {
		if (this.form.valid) {
			// this.submitEM.emit(this.form.value);
			// var loginObj: any;
			var invaliduser = "user isn't valid";
			var username = this.form.value.username;
			var password = this.form.value.password;
			localStorage.setItem('loginusername', username);
			this.name = username;
			this._login.validatelogin(username, password).subscribe(
				(data) => {
					this.userexist = true;
					this._login.isuserloggedin(this.userexist);
					// if (data.roles == 'Admin') {
					// 	this._login.isuserAdmin(true);
					// } else {
					// 	this._login.isuserAdmin(false);
					// }
					this.popupdisplayer(this.userexist, username);
				},
				(error) => {
					alert('Credentials are not matching');
				}
			);
		}
	}

	popupdisplayer(exist, username) {
		if (exist) {
			this.openDialog('Happy Shopping !!!', username);
			setInterval(() => {}, 500);
			setTimeout(() => {
				this._route.navigate([ '/login/home' ]);
			}, 500);
			this.form.reset();
		} else {
			this.openDialog('', "user isn't Register");
			this._route.navigate([ '/login' ]);
			this.form.reset();
		}
	}

	register() {
		this._route.navigate([ '/login/create' ]);
	}

	openDialog(message, name?: string): void {
		const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
			width: '250px',
			data: { name: name, message: message }
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}
}

@Component({
	selector: 'dialog-overview-example-dialog',
	templateUrl: 'dialogPage.html'
})
export class DialogOverviewExampleDialog {
	constructor(public dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
