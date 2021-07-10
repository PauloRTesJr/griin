import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredential } from '@griin/ui';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private auth: AngularFireAuth) {}

  login(email: string, password: string): Promise<UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    this.auth.signOut();
  }
}
