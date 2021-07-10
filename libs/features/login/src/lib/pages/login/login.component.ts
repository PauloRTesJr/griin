import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Theme } from '@griin/ui';
import { UserFacade } from '../../+state/user.facade';

@Component({
  selector: 'griin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  theme = Theme;
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userFacade: UserFacade) {}

  onFormSubmit() {
    console.log(this.form);
    const { email, password } = this.form.value;
    this.userFacade.loginUser(email, password);
  }
}
