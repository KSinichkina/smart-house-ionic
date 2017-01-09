import { Component } from '@angular/core';

import { HouseListService } from './house-list.service';
import { HouseListModel } from './house-list.model';

import {
  FormGroup,
  FormControl

} from '@angular/forms';


@Component({
  selector: 'page-house-list',
  templateUrl: 'house-list.html'
  //providers: [HouseListService]
})
export class HouseListComponent {
  selectedItem: any;
  houses: HouseListModel[];
  houseGroup: FormGroup;


  getHousesList(): void {
    this.houseListService
      .getHousesList('user-id')
      .subscribe(houses => this.houses = houses);
  }


  ngOnInit(): void {
    //this.getHousesList();
  }

  constructor(public houseListService:HouseListService) {
    var self = this;
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = ionSelect.get('item');
    //TODO: remove mock data after integration
    this.houses = [{
      "id": 1,
      "address": "house1 address",
      "checked": true,
      "disabled": false
    },
      {
        "id": 2,
        "address": "house2 address",
        "checked": false,
        "disabled": true
      }];

    this.houseGroup = new FormGroup({
      "houseControl": new FormControl({value: 'house1', disabled: false, checked: true})
    });
  }

  onSelect(item: HouseListModel):void {
    console.log(item);
  }
}
