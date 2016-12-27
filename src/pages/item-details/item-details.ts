import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailService } from './item-detail.service';
import { ItemDetailModel } from './item-detail.model';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
  providers: [ItemDetailService]
})
export class ItemDetailsPage {
  items: ItemDetailModel[];
  searchSensore:any;

  getHeroes(): void {
    this.ItemDetailService
      .getHeroes(this.searchSensore.queryParam)
      .subscribe(items => this.items = items);
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private ItemDetailService: ItemDetailService) {
    this.searchSensore = navParams.get('item');
    this.items = [{
      "id": 1,
        "temperature": 22,
        "humidity": 34,
        "messDate": "2016-12-01 21:46:28.233"
    },
    {
      "id": 2,
      "temperature": 22,
      "humidity": 34,
      "messDate": "2016-12-01 21:51:48.086"
    }];
  }
}
