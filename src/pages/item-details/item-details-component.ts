import { Component } from '@angular/core';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailService } from './item-detail.service';
import { ItemDetailModel } from './item-detail.model';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
  //providers: [ItemDetailService]
})
export class ItemDetailsComponent {
  items: ItemDetailModel[];
  searchSensore:any;

  public scatterChartOptions:any = {
    chartType: 'ScatterChart',
    dataTable: [
      ['date', 'default']
    ],
    options: {
      title: '',
      hAxis: {title: '', minValue: 0, maxValue: 100},
      vAxis: {title: '', minValue: 0, maxValue: 100},
      legend: 'none'
    }
  };

  getHeroes(): void {
    this.itemDetailService
      .getSensoreData(this.searchSensore.sensoreName)
      .subscribe(items => {
        this.items = items;
        this.items.map((val, id) => {
          this.scatterChartOptions.dataTable[id] = [val.messDate.slice(0, 10), val.data];
          if (id === 0) {
            this.scatterChartOptions.dataTable[id] = ['date', this.searchSensore.sensoreName];
          }
        });
      })

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private itemDetailService: ItemDetailService) {
    this.searchSensore = navParams.get('item');
  }
}
