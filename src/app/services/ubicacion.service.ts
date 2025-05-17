import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiUrl = 'https://api.nubelab.app/ubigeo';

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/departamentos`);
  }

  getProvincias(departamento: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/provincias/${departamento}`);
  }

  getDistritos(provincia: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/distritos/${provincia}`);
  }
}
