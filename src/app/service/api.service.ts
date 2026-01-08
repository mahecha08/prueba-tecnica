import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
  public getDataId(id: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
