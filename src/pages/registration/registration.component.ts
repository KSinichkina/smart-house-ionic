import { Component } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

import { RegistrationModel } from './registration.model'
//import {  } from 'ionic-angular';

@Component({
  selector: 'registration',
  templateUrl: 'registration.html'
})
export class RegistrationComponent {
  private user: RegistrationModel;

  constructor () {

  }

  onRegistration (email: string, password: string) {
    if (email && password) {
      this.user = {
        email: email,
        password: password
      }
    }
    console.log(this.user);
  }
}
