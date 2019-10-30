import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EmbeddedViewRef} from '@angular/core';
import { TableListComponent } from '../table/table.component';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'pm-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit{
    @ViewChild('table', {read: ViewContainerRef, static: true}) entry: ViewContainerRef;
    @Input() data: any[];
    componentRef: any;
    temp: any;
    columnHeaders: string[];
    columnNames: { data: string; renderer: any; }[];
    constructor(private resolver: ComponentFactoryResolver) {

    }
    ngOnInit(): any {
       this.processData(this.data);
    }
    processData(data){
        this.temp = JSON.parse(JSON.stringify(data));
        let i = 0;
        this.temp.forEach((element: any) => {
            for (; i < 1; i++) {
                this.columnHeaders = Object.keys(element);
                this.columnNames = Object.keys(element).map(x => ({ data: x, renderer: this.checkValues.bind(this) }));
            }
        });
        return this.temp;
    }
    checkValues(instance, td, row, col, prop, value: any, cellProperties) {
        if (value instanceof Object) {
            const factory = this.resolver.resolveComponentFactory(TableListComponent);
            this.componentRef = this.entry.createComponent(factory);
            this.componentRef.instance.data = this.processData(value);
            const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
            td.appendChild(domElem);
        } else {
            td.innerHTML = value;
        }
    }
}
