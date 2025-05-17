import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UbicacionService {
    private api_ubigeo="https://bogota-laburbano.opendatasoft.com/api/explore/v2.1/catalog/datasets/distritos-peru/records?select=ccdd%2C%20nombdep%2C%20ccpp%2C%20nombprov%2C%20ccdi%2C%20nombdist%2C%20capital%2C%20ubigeo%2C%20idprov%2C%20codigo%2C%20cnt_ccpp%2C%20descripcio%2C%20poblacion%2C%20fecha%2C%20dat_pob&limit=38"

  constructor(
    private httpClient: HttpClient, // httpClient
  ) {
  }
  finubicacion():Observable<any>{
    return this.httpClient.get<any>(this.api_ubigeo);
  }
}
