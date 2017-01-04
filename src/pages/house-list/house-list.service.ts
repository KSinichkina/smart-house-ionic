import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable }        from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class HouseListService {

  private itemUrl = 'http://localhost:8080/';  // URL to web api

  constructor(private http:Http) {
  }

  getHousesList(userId:string):Observable<any> {
    return this.http.get(this.itemUrl + '?user-id=' + userId)
      .map(response => response.json())
      .do(data => console.log("get json: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
