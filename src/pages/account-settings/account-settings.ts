import { Component } from '@angular/core';

import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'account-settings',
  templateUrl: 'account-settings.html'
})
export class AccountSettings {
  constructor(
      public platform: Platform,
      public actionsheetCtrl: ActionSheetController
  ) { }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Settings',
      cssClass: 'account-settings',
      buttons: [
        {
          text: 'Logout',
          icon: !this.platform.is('ios') ? 'ion-log-out' : null,
          handler: () => {
            console.log('Logout clicked');
          }
        },
        {
          text: 'Delete Account',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ion-trash-a' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
