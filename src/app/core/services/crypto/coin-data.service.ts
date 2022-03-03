import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, mergeMap, Observable, startWith } from 'rxjs';

export interface Coin {
  FROMSYMBOL?: string;
  PRICE?: string;
  CHANGEPCT24HOUR?:number;
  HIGH24HOUR?: number;
  LOW24HOUR?:number;
}

@Injectable({
  providedIn: 'root'
})
export class CoinDataService {

  constructor(private _http: HttpClient) { }


  getDataCoins(crypto:string): Observable<any> { 
    //SE REFRESCA LA HTTP CALL CADA 5 SEGUNDOS, NO SE SI ES LA MEJOR FORMA TOFIX:
    return interval(5000).pipe(
      startWith(0),
      mergeMap(() => {
      return this._http.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=USD`)
    }));
  }


  getCryptoNames(): string[] {
    return ['eth','slp','axs','ron'];
  }
}
