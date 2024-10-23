import { Injectable } from '@angular/core';
import { CalculationApiService } from './calculation-api.service';

@Injectable({
  providedIn: 'root'
})
export class CdbCalculationService {

  constructor(private calculationApi: CalculationApiService) { }
  
  calculate(initialValue: number, cdi: number, tb: number, months: number){
    this.calculationApi.getCdbCalculation({
      InitialValue: initialValue,
      BankTax: tb / 100,
      CDI: cdi / 100,
      Months: months
    }).subscribe(res => console.log(res))
  }
}
