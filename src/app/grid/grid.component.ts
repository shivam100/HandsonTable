import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EmbeddedViewRef } from '@angular/core';
import { TableListComponent } from '../table/table.component';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'pm-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
    @ViewChild('table', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;
    @Input() data: any[];
    componentRef: any;
    temp: any;
    flag = 1;
    columnHeaders: string[];
    columnNames: { data: string; renderer: any; }[];
    constructor(private resolver: ComponentFactoryResolver) {

    }
    ngOnInit(): any {
        this.processData(this.data);
    }

    processData(data: any[]) {
        this.temp = JSON.parse(JSON.stringify(data));
        this.columnHeaders = Object.keys(this.temp[0]);
        this.columnNames = Object.keys(this.temp[0]).map(x => ({ data: x, renderer: this.checkValues.bind(this) }));
        return this.temp;
    }
    checkValues(instance, td, row, col, prop, value: any, cellProperties) {
        if (value instanceof Object) {
            console.log(++this.flag);
            console.log(value[0]);
            const factory = this.resolver.resolveComponentFactory(TableListComponent);
            this.componentRef = this.entry.createComponent(factory);
            this.componentRef.instance.data = this.processData(value);
            const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
            td.appendChild(domElem);
            cellProperties.editor = false;
            cellProperties.keyboard = false;
            return cellProperties;
        } else {
            td.innerHTML = value;
        }
    }
}
