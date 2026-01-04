import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './services/auth/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  
  providers: [provideAnimationsAsync(),
    provideRouter(routes),
   // provideClientHydration(), 
    // provideHttpClient(withFetch()),
    provideHttpClient(withFetch(),withInterceptorsFromDi()),
    importProvidersFrom(ToastrModule.forRoot({
     // timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })),

    // ✅ Interceptor global para JWT
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
};
