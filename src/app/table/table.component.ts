import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Output} from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { EventEmitter } from 'events';
import { Service } from './table.service';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'pm-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableListComponent implements OnInit{
    @Input() data: any[];
    @Output() nestedTable: EventEmitter = new EventEmitter() ;
    temp: string[] = [];
    @Input() columnNames: any[];
    @Input() columnHeaders: any[];
    constructor() {
    }
    ngOnInit(): any {
    }
}
