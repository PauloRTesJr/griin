import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UiModule } from '@griin/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';
import { UserFacade } from './+state/user.facade';
import { metaReducers } from './storage';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UiModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LoginComponent },
    ]),
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer, { metaReducers }),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserFacade],
})
export class LoginModule { }
