import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/Auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(public ngFireAuth: AngularFireAuth) { }

loginNoFirebase(email, password){
  return this.ngFireAuth.signInWithEmailAndPassword(email, password)
}

insereNoFireBase(email, password){
  return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
}

}
