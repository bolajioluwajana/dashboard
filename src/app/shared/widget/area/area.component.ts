import { Component, OnInit, Input } from '@angular/core';
import { ChartsModule} from 'ng2-charts/ng2-charts'
import * as Chart from 'chart.js';
import { IArea } from './area';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {


  
 
 
  
  chartOptions: {};

  Highcharts = Highcharts;
  @Input () data: any = [];

  constructor() { }

   ngOnInit() {
     this.chartOptions = {
     chart: {
            type: 'area'
        },
        title: {
            text: 'Total goods sold for the past years'
        },
        
        tooltip: {
            split: true,
            valueSuffix: ' millions'
        },
        xAxis: {
            categories: ['2015', '2016', '2017', '2018', '2019', '2020'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Millions'
            },
            
        },

        series:  this.data,
    
        credits: {
            enabled: false
        },
        exporting: {
            enabled:true

        },
     
        
    };

    HC_exporting(Highcharts);

     
   setTimeout(() => {
       window.dispatchEvent(
           new Event('resize')
       );
   }, 300);
  }
}