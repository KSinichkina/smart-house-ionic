import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginComponent } from '../pages/login/login.component';
import { AccountSettingsComponent } from '../pages/account-settings/account-settings.component';
import { ListComponent } from '../pages/sensore-list/sensore-list.component';
import { HouseListComponent } from '../pages/house-list/house-list.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginComponent;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Sensors List', component: ListComponent },
      { title: 'House List', component: HouseListComponent },
      { title: 'Account Settings', component: AccountSettingsComponent }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
