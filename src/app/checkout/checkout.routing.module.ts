import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: '',
		component: PaymentComponent
	},
	{
		path: 'checkout/payment',
		component: PaymentComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class CheckoutRoutingModule {}
