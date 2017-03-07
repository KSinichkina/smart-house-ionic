import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RegistrationComponent } from '../pages/registration/registration.component';
import { AccountSettingsComponent } from '../pages/account-settings/account-settings.component';
import { ItemDetailsComponent } from '../pages/item-details/item-details.component';
import { ListComponent } from '../pages/sensore-list/sensore-list.component';
import { HouseListComponent } from '../pages/house-list/house-list.component';

import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { DatePipe } from "./pipes/date.pipe";

import { BrowserModule }          from '@angular/platform-browser';
import { ChartModule }            from 'angular2-highcharts';
import { ChartComponent } from "../pages/chart/chart.component";

import { ItemDetailService }    from '../pages/item-details/item-detail.service';
import { ListService }    from '../pages/sensore-list/sensore-list.service';
import { HouseListService }    from '../pages/house-list/house-list.service';

@NgModule({
  declarations: [
    MyApp,
    AccountSettingsComponent,
    ItemDetailsComponent,
    CapitalizePipe,
    DatePipe,
    ListComponent,
    HouseListComponent,
    ChartComponent,
    RegistrationComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    BrowserModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountSettingsComponent,
    ItemDetailsComponent,
    ListComponent,
    HouseListComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemDetailService,
    ListService,
    HouseListService
  ]
})
export class AppModule {}
