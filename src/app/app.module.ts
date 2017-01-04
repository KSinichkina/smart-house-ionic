import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccountSettings } from '../pages/account-settings/account-settings';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HouseListPage } from '../pages/house-list/house-list';
import { HttpModule }    from '@angular/http';

import {CapitalizePipe} from "./pipes/capitalize.pipe";
import {DatePipe} from "./pipes/date.pipe";

import { ItemDetailService }    from '../pages/item-details/item-detail.service';
import { ListService }    from '../pages/list/list.service.ts';
import { HouseListService }    from '../pages/house-list/house-list.service.ts';

@NgModule({
  declarations: [
    MyApp,
    AccountSettings,
    ItemDetailsPage,
    CapitalizePipe,
    DatePipe,
    ListPage,
    HouseListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountSettings,
    ItemDetailsPage,
    ListPage,
    HouseListPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemDetailService,
    ListService,
    HouseListService
  ]
})
export class AppModule {}
