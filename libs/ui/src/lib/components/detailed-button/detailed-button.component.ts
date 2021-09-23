import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'griin-detailed-button',
  templateUrl: './detailed-button.component.html',
  styleUrls: ['./detailed-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedButtonComponent {
  @Input()
  text!: string;

  @Input()
  image!: string;

  @Input()
  backgroundColor = '';

  @Input()
  color = '';
}
