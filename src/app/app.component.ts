import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaestraService } from './services/pruebaservice.service';
import { MenuComponent } from "./components/menu/menu.component";
import { FooterComponent } from "./components/footer/footer.component";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'enviostodopais';
  //constructor (private maestra: MaestraService){}
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }
 /* ngOnInit() {console.log("datos: ", this.maestra.finMaestraPrueba())
    
  }*/
}
