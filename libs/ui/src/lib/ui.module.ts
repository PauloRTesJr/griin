import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { IconComponent } from './components/icon/icon.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ButtonComponent, InputComponent, IconComponent],
  exports: [ButtonComponent, InputComponent, IconComponent],
})
export class UiModule {}
