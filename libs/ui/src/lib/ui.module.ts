import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { IconComponent } from './icon/icon.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ButtonComponent, InputComponent, IconComponent],
  exports: [ButtonComponent, InputComponent, IconComponent],
})
export class UiModule {}
