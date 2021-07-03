import { Component, Input } from '@angular/core';

@Component({
  selector: 'griin-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  color = '#424242';

  @Input()
  label!: string;
}
