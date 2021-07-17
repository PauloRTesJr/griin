import { Component } from '@angular/core';
import { Theme } from '@griin/ui';

@Component({
  selector: 'griin-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  theme = Theme;
}
