import { Component, Input } from '@angular/core';
import { mdiAlert } from '@mdi/js';

@Component({
  selector: 'griin-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {
  @Input()
  icon = mdiAlert;

  @Input()
  size = 200;

  @Input()
  color = '#424242';
}
