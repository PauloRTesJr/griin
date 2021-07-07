import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Theme } from '@griin/ui';

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

  onFormSubmit() {
    console.log(this.form);
  }
}
