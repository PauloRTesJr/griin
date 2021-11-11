import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable, of } from 'rxjs';
import { UserCredential } from '@griin/types';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private auth: AngularFireAuth) {}

  login(email: string, password: string): Observable<UserCredential> {
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }
  logout(): Observable<void> {
    if (!this.auth.currentUser) {
      return of();
    }
    return from(this.auth.signOut());
  }
}
