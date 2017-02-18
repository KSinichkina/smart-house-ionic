import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AccountSettingsComponent } from '../pages/account-settings/account-settings-component';
import { ItemDetailsComponent } from '../pages/item-details/item-details-component';
import { ListComponent } from '../pages/list/list-component';
import { HouseListComponent } from '../pages/house-list/house-list-component';

import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import {CapitalizePipe} from "./pipes/capitalize.pipe";
import {DatePipe} from "./pipes/date.pipe";

import { ItemDetailService }    from '../pages/item-details/item-detail.service';
import { ListService }    from '../pages/list/list.service.ts';
import { HouseListService }    from '../pages/house-list/house-list.service.ts';

@NgModule({
  declarations: [
    MyApp,
    AccountSettingsComponent,
    ItemDetailsComponent,
    CapitalizePipe,
    DatePipe,
    ListComponent,
    HouseListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    Ng2GoogleChartsModule
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
