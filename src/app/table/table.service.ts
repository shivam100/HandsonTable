import { ComponentFactoryResolver, Injectable, Inject, ReflectiveInjector, EmbeddedViewRef,ApplicationRef, ComponentRef, Injector} from '@angular/core';
import { TableListComponent } from './table.component';

@Injectable()
export class Service {

    nestedData: any;
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }
}
