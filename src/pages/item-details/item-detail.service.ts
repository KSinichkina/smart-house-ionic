import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import { Observable }        from 'rxjs/Observable';

import 'rxjs/Rx';

import { ItemDetailModel } from './item-detail.model';

@Injectable()
export class ItemDetailService {

  private itemUrl = 'http://localhost:8080';  // URL to web api
  //private itemUrl = 'http://pmvmacbook:9000/ws/svalues';  // URL to web api

  constructor(private http:Http) {
  }

  getSensoreData(sensoreName:string):Observable<any> {
    return this.http.get(this.itemUrl)// + '?name=' + sensoreName)
      .map(response => response.json())
      .do(data => console.log("get json: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
