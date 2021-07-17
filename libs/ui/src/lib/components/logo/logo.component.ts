import { Component, Input } from '@angular/core';

@Component({
  selector: 'griin-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input()
  color = '#EA1D2C';
}
