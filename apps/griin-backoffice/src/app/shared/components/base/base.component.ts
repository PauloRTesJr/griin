import { Component } from '@angular/core';
import { Theme } from '@griin/ui';
import { mdiAccountCircle } from '@mdi/js';

@Component({
  selector: 'griin-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  theme = Theme;
  userIcon = mdiAccountCircle;
}
