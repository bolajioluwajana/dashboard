import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  
  chartOptions = {}
  Highcharts = Highcharts
  @Input() data = [];
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      charts: {
      type: 'arearange',
      zoomType: 'x',
      backgroundColor: null,
      },

  title: {
      text: ''
  },

  credits: {
    enabled: false
  },

  xAxis: {
      type: 'months',
     
      title: {
        enabled: false
    }
   
  },

  yAxis: {
      title: {
          text: 'store visits'
      },
      tickInterval: 500,
    labels: {
        format: '{value}'
    }
  },

  tooltip: {
      crosshairs: true,
      shared: true,
      xDateFormat: '%A, %b %e'
  },

  legend: {
      enabled: false
  },

  series:  [{
  data: this.data
  }]
}
    
HC_exporting(Highcharts);

 
setTimeout(() => {
   window.dispatchEvent(
       new Event('resize')
   );
}, 300);
}
}


