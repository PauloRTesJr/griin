import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { IconComponent } from './components/icon/icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    ButtonComponent,
    InputComponent,
    IconComponent,
    SidebarComponent,
    TopbarComponent,
    LogoComponent,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    IconComponent,
    SidebarComponent,
    TopbarComponent,
    LogoComponent,
  ],
})
export class UiModule {}
