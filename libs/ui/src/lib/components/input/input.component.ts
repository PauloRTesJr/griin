import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

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

  @Input()
  type = 'text';

  @Input()
  control: AbstractControl | null = null;

  setFormControl(): FormControl {
    return (this.control as FormControl) ?? new FormControl();
  }
}
