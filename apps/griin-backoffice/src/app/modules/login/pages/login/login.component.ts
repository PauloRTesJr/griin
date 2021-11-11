import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Theme } from '@griin/types';
import { UserFacade } from '@griin/features/user';
import { mdiGoogle } from '@mdi/js';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'griin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  theme = Theme;
  googleIcon = mdiGoogle;
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userFacade: UserFacade, private auth: AngularFireAuth) {}

  onFormSubmit() {
    const { email, password } = this.form.value;
    this.userFacade.loginUser(email, password);
  }
}
