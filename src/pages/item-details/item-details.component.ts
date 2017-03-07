import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailService } from './item-detail.service';
import { ItemDetailModel } from './item-detail.model';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})


export class ItemDetailsComponent {
  items: ItemDetailModel[];
  searchSensore: any;

  getHeroes():void {
    this.itemDetailService
      .getSensoreData(this.searchSensore.sensoreName)
      .subscribe(items => {
        this.items = items;
      });
  }

  ngOnInit():void {
    this.getHeroes();
  }

  constructor(public navCtrl:NavController, public navParams:NavParams, private itemDetailService:ItemDetailService) {
    this.searchSensore = navParams.get('item');
  }
}
