import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    }
    const requiredRoles: string[] = route.data['roles'];
    const role = this.auth.getRole();
    if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(role || '')) {
      // no autorizado
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
