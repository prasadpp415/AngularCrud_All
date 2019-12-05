import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RegisterEditComponent } from './register-edit/register-edit.component';
import { HomeComponent } from './home/home.component';
import { AuthserviceService } from './login/authservice.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { CheckoutRoutingModule } from './checkout/checkout.routing.module';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'login/create',
		component: RegisterComponent,
		canDeactivate: [ AuthserviceService ],
		canActivateChild: [ AuthserviceService ]
		// children: [
		// 	{
		// 		path: 'login/edit/:id',
		// 		component: RegisterEditComponent,
		// 		canActivateChild: [ AuthserviceService ]
		// 	}
		// ]
	},
	{
		path: 'login/users',
		component: UserlistComponent,
		canActivate: [ AuthserviceService ],
		canActivateChild: [ AuthserviceService ]
	},
	{
		path: 'login/users/edit/:id',
		component: RegisterEditComponent,
		canActivateChild: [ AuthserviceService ]
	},
	{
		path: 'login/home',
		component: HomeComponent,
		// loadChildren: '../app/home/home.module#HomeModule',
		canActivate: [ AuthserviceService ],
		canActivateChild: [ AuthserviceService ]
	},
	{
		path: 'login/checkout',
		loadChildren: () => import(`./checkout/checkout.module`).then((m) => m.CheckoutModule)
	},
	{
		path: '**',
		component: NotfoundComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
