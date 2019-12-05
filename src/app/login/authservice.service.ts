import { Injectable } from '@angular/core';
import { LoginserviceService } from './loginservice.service';
import {
	CanActivate,
	CanActivateChild,
	CanDeactivate,
	ActivatedRoute,
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Injectable({
	providedIn: 'root'
})
export class AuthserviceService implements CanActivate, CanActivateChild, CanDeactivate<RegisterComponent> {
	constructor(private _login: LoginserviceService, private _router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (this._login.loggedin) {
			return true;
		} else {
			this._router.navigate([ '/login' ]);
			alert('You are not allowed before log in');
			return false;
		}
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		debugger;
		if (this._login.isadmin) {
			this._router.navigate([ '/login/users' ]);
			return true;
		} else {
			this._router.navigate([ '/login/home' ]);
			alert('Accissable to Admin only');
			return false;
		}
	}

	canDeactivate(component: RegisterComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		debugger;
		return component.canDeactivate() || window.confirm('Are you sure ?');
	}
}
