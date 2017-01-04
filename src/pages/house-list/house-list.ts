import { Component } from '@angular/core';

import { ItemDetailsPage } from '../item-details/item-details';
import { HouseListService } from './house-list.service.ts';

import {
  FormGroup,
  FormControl

} from '@angular/forms';


@Component({
  selector: 'page-house-list',
  templateUrl: 'house-list.html'
  //providers: [HouseListService]
})
export class HouseListPage {
  selectedItem: any;
  items: Array<{houseAddress: string}>;
  houses: string[];
  houseGroup: FormGroup;


  //getHousesList(): void {
  //  this.houseListService
  //    .getHousesList('user-id')
  //    .subscribe(houses => this.houses = houses);
  //}


  ngOnInit(): void {
    //this.getHousesList();
  }

  constructor(/*public houseListService:HouseListService*/) {
    var self = this;
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = ionSelect.get('item');
    //TODO: remove mock data after integration
    this.houses = ['house1', 'house2'];
    this.items = [];

    this.houseGroup = new FormGroup({
      "houseControl": new FormControl({value: 'house1', disabled: false, checked: true})
    });

    this.houses.forEach(function (val, ind) {
      self.items.push({
        houseAddress: val
      });
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.houseGroup.value);
    event.preventDefault();
  }
}
