import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinDataService {

  constructor(private _http: HttpClient) { }


  getDataCoins(coin:string): Observable<any> { 
    return this._http.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=USD`);
  }


  getCryptoNames(): string[] {
    return ['eth','slp','axs','ron']
  }
}
