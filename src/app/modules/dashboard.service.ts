import { Injectable } from '@angular/core';
import { MatCardSmImage } from '@angular/material';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(){
    return[{
            name: 'Electronics division',
            data: [650, 780, 650, 550, 609, 790]
        },
        {
        name: 'Shoes divison',
        data: [210, 310, 200, 390, 400, 510]
    }, {
        name: 'Gowns division',
        data: [150, 250, 111, 310, 350, 450]
    }, {
        name: 'Hats division',
        data: [163, 203, 276, 250, 300, 111]
    },  {
        name: 'Home Appliances division',
        data: [120, 160, 200, 180, 175, 165]
    }];
    
  }


cards(){
  return [2000, 1500, 2500, 3000, 1700, 2500, 2000, 1500, 2500, 3000, 1700, 2500 ]
}

newusers(){
  return  [500, 200, 300, 500, 300, 2500, 1000, 1500, 2500, 200, 500, 500, ]
}

onlinevisitors(){
  return [3000, 1500, 2500, 3000, 1700, 2500, 2000, 1500, 2500, 3000, 2700, 2500  ]
}

customerretention(){
 return [3000, 2500, 1500, 1000, 900, 700, 500, 400, 300, 200, 400, 700  ]
}
pie(){
  return [{
       name: 'Twitter',
        y: 61.41,
        sliced: true,
        selected: true
    }, {
        name: 'Facebook',
        y: 11.84
    }, {
        name: 'Google',
        y: 10.85
    }, {
        name: 'Newspaper',
        y: 4.67
    }, {
        name: 'Billboard',
        y: 4.18
    }, {
        name: 'Referral',
        y: 1.64
    
  
    }];
  
}
}