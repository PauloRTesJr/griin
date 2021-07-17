import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Theme } from '@griin/ui';
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

  constructor(private userFacade: UserFacade, private auth: AngularFireAuth) {
    this.auth.user.subscribe((user) => console.log(user));
  }

  onFormSubmit() {
    const { email, password } = this.form.value;
    this.userFacade.loginUser(email, password);
  }
}
