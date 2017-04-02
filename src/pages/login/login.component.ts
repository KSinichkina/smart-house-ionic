import { Component } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';

//import {  } from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  private registrationComponent: Component;
  private user: {email: string, password: string};

  constructor () {
    this.registrationComponent = RegistrationComponent;
  }
  onSignIn (email: string, password: string) {
    if (email && password) {
      this.user = {
        email: email,
        password: password
      }
    }
    console.log(this.user);
  }
}
