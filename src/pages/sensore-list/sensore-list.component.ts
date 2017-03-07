import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ListService } from './sensore-list.service';


@Component({
  selector: 'sensore-list',
  templateUrl: 'sensore-list.html'
  //providers: [ListService]
})
export class ListComponent {
  selectedItem: any;
  items: Array<{sensoreName: string}>;
  sensores: string[];

  getSensoresList(): void {
    this.listService
      .getSensoresList('house_address')
      .subscribe(sensores => this.sensores = sensores);
  }


  ngOnInit(): void {
    //this.getSensoresList();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
    var self = this;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    //TODO: remove mock data after integration
    this.sensores = ['temperature', 'humidity'];

    this.items = [];

    this.sensores.forEach(function (val, ind) {
      self.items.push({
        sensoreName: val
      });
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsComponent, {
      item: item
    });
  }
}
