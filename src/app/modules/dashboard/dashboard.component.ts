import { DashboardService } from './../dashboard.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  contact: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Angie Stone', contact: 'ang@gmail.com'},
  {position: 2, name: 'Thompson Berry', contact: '984-48484'},
  {position: 3, name: 'Macron Bee', contact: 'Macronbee@yahoo.com'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards= [];
  newusers= [];
  onlinevisitors= [];
  customerretention= [];
  pie= [];
  
  displayedColumns: string[] = ['position', 'name', 'contact'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.newusers = this.dashboardService.newusers();
    this.onlinevisitors = this.dashboardService.onlinevisitors();
    this.customerretention = this.dashboardService.customerretention();
    this.pie = this.dashboardService.pie();
   
    this.dataSource.paginator = this.paginator;
  }

}
