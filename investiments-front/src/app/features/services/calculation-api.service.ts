import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CdbCalculationRequest } from '../models/cdb-calculation-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationApiService {

  constructor(private http: HttpClient) { }

  getCdbCalculation(request: CdbCalculationRequest): Observable<any>{
    return this.http.post('Api/cdb/', request);
  }
}
