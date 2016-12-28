import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { ListService } from './list.service';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
  //providers: [ListService]
})
export class ListPage {
  selectedItem: any;
  items: Array<{sensoreName: string}>;
  sensores: string[];

  getSensoresList(): void {
    this.listService
      .getSensoresList('house_address')
      .subscribe(sensores => this.sensores = sensores);
  }


  ngOnInit(): void {
    this.getSensoresList();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
    var self = this;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    //TODO: remove mock data after integration
    this.sensores = ['temperature', 'humidity'];

    this.items = [];

    this.sensores.forEach(function (val, ind) {
      //TODO: capitalize pipe add!!!
      self.items.push({
        sensoreName: val
      });
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
