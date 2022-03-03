import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinDataService {

  constructor(private _http: HttpClient) { }


  getDataCoins(crypto:string): Observable<any> { 
    return this._http.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=USD`);
  }


  getCryptoNames(): string[] {
    return ['eth','slp','axs','ron'];
  }
}
