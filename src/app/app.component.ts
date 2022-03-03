import { Component, OnInit } from '@angular/core';
import { CoinDataService } from './core/services/crypto/coin-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  coinNameArray: string[] = [];


  constructor(public coinDataService: CoinDataService){}

  ngOnInit(): void {
    this.coinNameArray = this.coinDataService.getCryptoNames();
  }
}
