import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{sensoreName: string}>;
  sensores: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var self = this;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    //TODO: make service for list of sensores
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
