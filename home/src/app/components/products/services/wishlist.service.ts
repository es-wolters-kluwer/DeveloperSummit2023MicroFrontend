import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {  Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly endPoint = `${environment.apiURL}/wishlist`;
  private readonly http = inject(HttpClient);



  public save(productId: string): Observable<any[]> {
    const body = {
      userId: 1,
      productId: 5,
    };
    return this.http.post<any[]>(this.endPoint, body);
  }
}
