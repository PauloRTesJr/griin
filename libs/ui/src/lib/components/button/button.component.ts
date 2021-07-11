import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'griin-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  text!: string;

  @Input()
  backgroundColor = '#EEEEEE';

  @Input()
  color = '#424242';

  @Input()
  icon: string | null = null;

  @Input()
  iconColor = '#424242';
}
