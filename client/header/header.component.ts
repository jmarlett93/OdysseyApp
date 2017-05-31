import {Component} from "@angular/core";

@Component({
    selector:'base-app',
    template: require('./header.component.html'),
    styles: [require('../styles/styles.less')]
})
export class HeaderComponent{}