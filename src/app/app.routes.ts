import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EnviosComponent } from './envios/envios.component';
import { UbicanosComponent } from './ubicanos/ubicanos.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent}  from './inicio/inicio.component';
export const routes: Routes = [{
    path:"", component:IndexComponent}, {path:"envios", component:EnviosComponent}, {path:"ubicanos", component:UbicanosComponent}, 
    {path:"cotizador", component:CotizadorComponent},
    {path:"noticias", component:NoticiasComponent},
    {path:"contactanos", component:ContactanosComponent},
    {path:"inicio", component:InicioComponent}];