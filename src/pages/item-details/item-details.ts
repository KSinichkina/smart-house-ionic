import { Component } from '@angular/core';
import { Subject }           from 'rxjs/Subject';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailService } from './item-detail.service';
import { ItemDetailModel } from './item-detail.model';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
  //providers: [ItemDetailService]
})
export class ItemDetailsPage {
  items: ItemDetailModel[];
  searchSensore:any;

  getHeroes(): void {
    this.itemDetailService
      .getHeroes(this.searchSensore.sensoreName)
      .subscribe(items => this.items = items);
  }


  ngOnInit(): void {
    //this.getHeroes();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private itemDetailService: ItemDetailService) {
    this.searchSensore = navParams.get('item');


    //TODO: remove mock data after integration
    switch (this.searchSensore.sensoreName) {
      case 'temperature':
        this.items = [{
          "id": 1,
          "data": 22,
          "messDate": "2016-12-01 21:46:28.233"
        },
          {
            "id": 2,
            "data": 22,
            "messDate": "2016-12-01 21:51:48.086"
          }];
        break;

      case 'humidity':
        this.items = [{
          "id": 1,
          "data": 34,
          "messDate": "2016-12-01 21:46:28.233"
        },
          {
            "id": 2,
            "data": 34,
            "messDate": "2016-12-01 21:51:48.086"
          }];
        break;
    }
  }
}
