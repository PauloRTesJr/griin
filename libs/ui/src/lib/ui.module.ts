import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { IconComponent } from './components/icon/icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { DetailedButtonComponent } from './components/detailed-button/detailed-button.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    ButtonComponent,
    InputComponent,
    IconComponent,
    SidebarComponent,
    TopbarComponent,
    LogoComponent,
    DetailedButtonComponent,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    IconComponent,
    SidebarComponent,
    TopbarComponent,
    LogoComponent,
    DetailedButtonComponent,
  ],
})
export class UiModule {}
