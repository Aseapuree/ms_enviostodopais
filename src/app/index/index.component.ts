import { Component } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactanosComponent } from '../contactanos/contactanos.component';
import { CotizadorComponent } from '../cotizador/cotizador.component';
import { EnviosComponent } from '../envios/envios.component';
import { routes } from '../app.routes';
import { RouterOutlet } from '@angular/router';
import { UbicanosComponent } from '../ubicanos/ubicanos.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [MenuComponent, FooterComponent, ContactanosComponent, CotizadorComponent, EnviosComponent, RouterOutlet, UbicanosComponent], 
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
