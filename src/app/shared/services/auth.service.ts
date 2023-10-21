import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private logInObservable = of(false);

  public get isLogin$() {
    return this.logInObservable
  }
}
