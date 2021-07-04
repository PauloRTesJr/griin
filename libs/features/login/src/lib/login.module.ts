import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLogin from './+state/login.reducer';
import { LoginEffects } from './+state/login.effects';
import { LoginFacade } from './+state/login.facade';
import { LoginComponent } from './pages/login/login.component';
import { UiModule } from '@griin/ui';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LoginComponent },
    ]),
    StoreModule.forFeature(fromLogin.LOGIN_FEATURE_KEY, fromLogin.reducer),
    EffectsModule.forFeature([LoginEffects]),
    UiModule,
    ReactiveFormsModule,
  ],
  providers: [LoginFacade],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
