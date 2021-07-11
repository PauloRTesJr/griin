import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredential } from '@griin/ui';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private auth: AngularFireAuth) {}

  login(email: string, password: string): Observable<UserCredential> {
    console.log(`trying login with email ${email} and password ${password}`);
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }
  logout() {
    this.auth.signOut();
  }
}
