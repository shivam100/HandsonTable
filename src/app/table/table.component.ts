import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'pm-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TableListComponent implements OnInit {
    @Input() data: any[];
    @Output() nestedTable: EventEmitter = new EventEmitter();
    temp: string[] = [];
    @Input() mergeList: any;
    @Input() columnNames: any[];
    @Input() columnHeaders: any[];
    @Input() renderers: any[];
    settings: any;
    flag: any;
    constructor() {
    }
    ngOnInit(): any {
    }
}
