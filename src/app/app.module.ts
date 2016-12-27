import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccountSettings } from '../pages/account-settings/account-settings';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HttpModule }    from '@angular/http';

import { ItemDetailService }    from '../pages/item-details/item-detail.service';

@NgModule({
  declarations: [
    MyApp,
    AccountSettings,
    ItemDetailsPage,
    ListPage
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
    ListPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemDetailService
  ]
})
export class AppModule {}
