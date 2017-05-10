import './polyfills';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HomePageComponent} from './app/home-page.component';
//import {WelcomeComponent} from './welcome/welcome.component';
//import {AccountListComponent} from './account-list/account-list.component';

import {enableProdMode} from '@angular/core';
enableProdMode();

const routing = RouterModule.forRoot([
    { path: '',      component: HomePageComponent },
    //{ path: 'account-list', component: AccountListComponent }
]);

@NgModule({
    imports: [BrowserModule,
    		  routing,
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule],
    declarations: [HomePageComponent,
    			               ],
    //providers: [],
    bootstrap: [HomePageComponent]
})

export class AppModule {}