import { Component, Input, OnInit } from '@angular/core';
import { CoinDataService } from 'src/app/core/services/crypto/coin-data.service';

@Component({
  selector: 'app-card-crypto',
  templateUrl: './card-crypto.component.html',
  styleUrls: ['./card-crypto.component.scss']
})
export class CardCryptoComponent implements OnInit {

  @Input() coin: string = '';

  img: string = '';

  constructor(public coinDataService: CoinDataService) { }

  ngOnInit(): void {
    this.coinDataService.getDataCoins(this.coin).subscribe(data => {   
      console.log(data.DISPLAY);
      


    })
  }

}
