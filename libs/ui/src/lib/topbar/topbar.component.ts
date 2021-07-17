import { Component, Input } from '@angular/core';

@Component({
  selector: 'griin-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Input()
  backgroundColor = '#EEEEEE';

  @Input()
  color = '#424242';
}
