import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IAssetLight, IAssetUpdate} from "../../models/asset";

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private apiUrl = 'http://hc-next-dev.loc/api/assets';

  private bearer = '';

  constructor(private http: HttpClient) {}

  listAssets(): Observable<IAssetLight[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.bearer}`
    });

    return this.http.get<IAssetLight[]>(`${this.apiUrl}/list`, { headers });
  }

  create(params: IAssetUpdate): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.bearer}`
    });

    return this.http.put<string>(`${this.apiUrl}`, params, { headers });
  }

  update(id: string, params: IAssetUpdate): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.bearer}`
    });

    return this.http.post<void>(`${this.apiUrl}/` + id, params, { headers });
  }

  delete(id: string): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.bearer}`
    });

    return this.http.delete<void>(`${this.apiUrl}/` + id, { headers });
  }
}
