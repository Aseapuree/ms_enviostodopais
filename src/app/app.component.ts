import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaestraService } from './services/pruebaservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'enviostodopais';
  constructor (private maestra: MaestraService){}
 /* ngOnInit() {console.log("datos: ", this.maestra.finMaestraPrueba())
    
  }*/
}
