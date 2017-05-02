import { Component, OnInit } from '@angular/core'
//import { TransferState } from '../modules/transfer-state/transfer-state';

@Component({
	selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(/*private cache: TransferState*/) {}
  ngOnInit() {
    //this.cache.set('cached', true);
  }
}
