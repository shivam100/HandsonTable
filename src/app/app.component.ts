import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../app/table/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HandsonTable';
  data: any[];
  constructor(private httpservice: HttpClient) {
  }

  ngOnInit() {
    const h = new HttpHeaders();
    h.append('Access-Control-Allow-Origin', '*');
    h.append('Accept', 'application/json');
    this.loadtable(h).subscribe(result => {
      this.data = result as string[];
    }, err => {
      alert('Error');
    });
  }
  loadtable(h) {
    return this.httpservice.get('assets/table.json');
  }
}
