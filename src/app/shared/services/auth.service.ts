import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loginObservable = new BehaviorSubject<boolean>(false);

  public get isLogin$(): Observable<boolean> {
    return this.loginObservable.asObservable();
  }

  public setIsLogin(value: boolean): void {
    this.loginObservable.next(value);
  }
}
