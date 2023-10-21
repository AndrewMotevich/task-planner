import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private logInObservable = new BehaviorSubject<boolean>(true);

  public get isLogin$(): Observable<boolean> {
    return this.logInObservable.asObservable();
  }

  public setIsLogin(value: boolean): void {
    this.logInObservable.next(value);
  }
}
