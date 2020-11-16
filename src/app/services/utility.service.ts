import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  constructor() { }

  // private recId = new Subject<string>();
  // recommendedID = this.recId.asObservable();

  // private amortization = new Subject<boolean>();
  // amortizationResponse = this.amortization.asObservable();

  private loader = new Subject<string>();
  loaderResponse = this.loader.asObservable();


  setLoader(msg) {
    this.loader.next(msg);
  }

}
