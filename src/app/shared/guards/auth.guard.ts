import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LOGIN } from '../constants/routing-paths.consts';



export const authGuard: CanMatchFn = () => {
  const coreFacade = inject(AuthService);
  const router = inject(Router);

  return coreFacade.isLogin$.pipe(
    take(1),
    tap((isLogin: boolean) => {
      if (!isLogin) {
        router.navigate([LOGIN.fullPath]);
      }
    }),
    map((token) => Boolean(token))
  );
}
