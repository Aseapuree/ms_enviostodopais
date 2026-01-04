  // import { Component, OnInit } from '@angular/core';
  // import { CommonModule } from '@angular/common';
  // import { Router, RouterLink, RouterLinkActive } from '@angular/router';
  // import { StorageService } from '../../services/storage.service';

  // @Component({
  //   selector: 'app-menu',
  //   standalone: true,
  //   imports: [CommonModule, RouterLink, RouterLinkActive],
  //   templateUrl: './menu.component.html',
  //   styleUrls: ['./menu.component.scss']
  // })
  // export class MenuComponent implements OnInit {
  //   userName: string = '';
  //   userRole: string = '';
  //   isAuthenticated: boolean = false;

  //   constructor(private storage: StorageService, private router: Router) {}

  //   ngOnInit(): void {
  //     this.loadUserInfo();
  //   }

  //   loadUserInfo(): void {
  //     const user = this.storage.getUser();
  //     this.isAuthenticated = !!user;

  //     if (user) {
  //       this.userName = user.name || user.correo || 'Usuario';
  //       this.userRole = user.role || '';
  //     }
  //   }

  //   logout(): void {
  //     this.storage.clear(); // ✅ limpia todo (token, usuario, etc.)
  //     this.isAuthenticated = false;
  //     this.userName = '';
  //     this.userRole = '';
  //     this.router.navigate(['/auth']);
  //   }
  // }


  import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { Router, RouterLink, RouterLinkActive } from '@angular/router';
  import { StorageService } from '../../services/storage.service';
  import { AuthService } from '../../services/auth/auth.service';
  import { Subscription } from 'rxjs';
  
  @Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
  })
  export class MenuComponent implements OnInit, OnDestroy {
    userName: string = '';
    userRole: string = '';
    isAuthenticated: boolean = false;
    showUserMenu: boolean = false;
    private storageSubscription: Subscription | undefined;
  
    constructor(
      private storage: StorageService, 
      private router: Router,
      private auth: AuthService
    ) {}
  
    ngOnInit(): void {
      this.loadUserInfo();
      this.storageSubscription = this.storage.watchStorage().subscribe(() => {
        this.loadUserInfo();
      });
    }
  
    ngOnDestroy(): void {
      if (this.storageSubscription) {
        this.storageSubscription.unsubscribe();
      }
    }
  
    loadUserInfo(): void {
      const user = this.storage.getUser();
      this.isAuthenticated = !!user;
  
      if (user) {
        this.userRole = user.role || '';
        if (user.name) {
          this.userName = user.name;
        } else {
          // Fetch profile if name is not available
          // this.auth.getUserProfile().subscribe({
          //   next: (profile: any) => {
          //     const fullUser = { ...user, name: profile.nombreCompleto || profile.name || user.correo };
          //     localStorage.setItem('user', JSON.stringify(fullUser));
          //     this.userName = fullUser.name;
          //   },
          //   error: () => {
          //     this.userName = user.correo || 'Usuario';
          //   }
          // });
        }
      } else {
        this.userName = '';
      }
    }
  
    toggleUserMenu(): void {
      this.showUserMenu = !this.showUserMenu;
    }
  
    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent): void {
      const userMenu = (document.querySelector('.user-menu') as HTMLElement);
      if (this.showUserMenu && userMenu && !userMenu.contains(event.target as Node)) {
        this.showUserMenu = false;
      }
    }
  
    logout(): void {
      this.storage.clear();
      this.isAuthenticated = false;
      this.userName = '';
      this.userRole = '';
      this.router.navigate(['/auth']);
      this.showUserMenu = false;
    }
  }