import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseDto } from '../shared/models/response-dto';

@Injectable({ providedIn: 'root' })
export class CotizadorService {
  private base = 'http://localhost:8080/api/cotizador';

  constructor(private http: HttpClient) {}

  calcular(payload: any): Observable<ResponseDto<any>> {
    return this.http.post<ResponseDto<any>>(`${this.base}/calcular`, payload);
  }

  // (opcional) podrías traer lista de tiendas
  obtenerTiendas(): Observable<ResponseDto<any>> {
    return this.http.get<ResponseDto<any>>('http://localhost:8080/api/tiendas/listar');
  }
}
