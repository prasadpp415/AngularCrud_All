import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
	MatCardModule,
	MatInputModule,
	MatButtonModule,
	MatToolbarModule,
	MatDialogModule,
	MatFormFieldModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { RegisterEditComponent } from './register-edit/register-edit.component';
import { DialogOverviewExampleDialog } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaymentComponent } from './payment/payment.component';

const modules = [
	MatCardModule,
	MatInputModule,
	MatButtonModule,
	MatToolbarModule,
	MatDialogModule,
	MatFormFieldModule
];

@NgModule({
	entryComponents: [ DialogOverviewExampleDialog ],
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		UserlistComponent,
		RegisterEditComponent,
		DialogOverviewExampleDialog,
		HomeComponent,
		NotfoundComponent,
		PaymentComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		modules,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
