import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers } from './storage';
import { UserEffects } from './+state/user.effects';
import { UserFacade } from './+state/user.facade';
import * as fromUser from './+state/user.reducer';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [CommonModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer, { metaReducers }),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserFacade, LoginService],
})
export class UserModule { }
