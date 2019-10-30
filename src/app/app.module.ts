import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableListComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './table/table.service';
import { GridComponent } from './grid/grid.component';
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotTableModule,
    HttpClientModule
  ],
  entryComponents: [TableListComponent],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
