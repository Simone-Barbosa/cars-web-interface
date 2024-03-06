import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from './carro';
import { Marca } from './marca';

@Injectable({
  providedIn: 'root',
})
export class CarrosService {
  constructor(private http: HttpClient) {}

  urlCarros: string = 'http://localhost:8080/cars';
  urlMarcas: string = 'http://localhost:8080/make';

  public recuperarCarros(): Observable<Carro[]> {
    return this.http.get<any>(this.urlCarros);
  }

  public recuperarMarcas(): Observable<Marca[]> {
    return this.http.get<any>(this.urlMarcas);
  }

  public salvarCarro(carro: Carro): Observable<any> {
    return this.http.post<any>(this.urlCarros, carro);
  }

  public alterarCarro(carro: Carro): Observable<any> {
    return this.http.put<any>(this.urlCarros, carro);
  }

  public excluirCarro(idCarro: number): Observable<any> {
    return this.http.delete<any>(`${this.urlCarros}/${idCarro}`);
  }
}
