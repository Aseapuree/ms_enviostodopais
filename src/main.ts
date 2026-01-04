/*import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
}).catch(err => console.error(err));*/

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Explicitly import Bootstrap bundle

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
