import { Component, Input }    from '@angular/core';
import { Observable } from 'rxjs/Observable';

//import { ItemDetailModel } from './item-detail.model';


@Component({
  selector: 'chart-component',
  templateUrl: 'chart.html'
})
export class ChartComponent {

  @Input()
  set items(items: any) {
    Observable.of(items).subscribe(items => {

      if (items) {
        let data = items.map(function(value) {
          return value.data;
        });

        let date = items.map(function(value) {
          return value.messDate;
        });

        console.log(date);

        this.options = {
          title : { text : '' },
          series: [{
            data: data,
          }],
          xAxis: {
            labels: {
              formatter: function() {
                return date[this.value].slice(0, 10);
              }
            }
          },
          yAxis: {
            title: {
              text: ''
            }
          },
          legend: {
            labelFormat: ' '
          }
        };
      }
    });
  }

  options: Object;

  constructor() {

  }
}
