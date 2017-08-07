import {Component} from "@angular/core";
//import './app.css'; 

@Component({
    selector:'base-app',
    template: require('./app.component.html'),
    styles: [require('/app.css')]
})
export class AppComponent{}