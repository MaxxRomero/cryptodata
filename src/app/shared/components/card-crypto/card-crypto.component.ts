import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CoinDataService } from 'src/app/core/services/crypto/coin-data.service';

@Component({
  selector: 'app-card-crypto',
  templateUrl: './card-crypto.component.html',
  styleUrls: ['./card-crypto.component.scss']
})
export class CardCryptoComponent implements OnInit {

  @Input() coin: string = '';

  imgUrl: string = 'https://www.cryptocompare.com';
  data:any;

  constructor(public coinDataService: CoinDataService) { }

  ngOnInit(): void {
    this.coinDataService.getDataCoins(this.coin)
    .pipe(map((x:any) => x.DISPLAY))
    .subscribe(data => {     
        let keys = Object.keys(data);
        for(let key of keys) {
          this.data =  data[key].USD;
          this.imgUrl = this.imgUrl + data[key].USD.IMAGEURL;
        }
        console.log(data);
    });
  }

}
