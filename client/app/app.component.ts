import {Component} from "@angular/core";

@Component({
    selector:'base-app',
    template: require('./app.component.html'),
    styles: [require('/app.css')]
})
export class AppComponent{}