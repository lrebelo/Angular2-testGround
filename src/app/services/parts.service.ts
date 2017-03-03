import { Injectable } from '@angular/core';
import { Parts } from '../classes/parts';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PartsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private partsUrl = 'http://192.168.122.143/api/parts/';  // URL to web api

  constructor(private http: Http) { }


//changed that catch to empty for tests NOTE: IT DOES NOT WORK so it was removed..
  getUsers(): Promise<Parts[]> {
    return this.http.get(this.partsUrl).toPromise().then(response => response.json().data as Parts[]);
  }

// +/- like for like from the angular2 tuturial
  getUser(id: number): Promise<Parts> {
    const url = `${this.partsUrl}/${id}`;
    return this.http.get(url).toPromise().then(response => response.json().data as Parts).catch(this.handleError);
  }


//it seems to work even if no catch is available.
  delete(id: number): Promise<void> {
      const url = `${this.partsUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null);
    }

    create(name: string): Promise<Parts> {
      return this.http.post(this.partsUrl, JSON.stringify({name: name}), {headers: this.headers}).toPromise().then(res => res.json().data).catch(this.handleError);
    }

    update(part: Parts): Promise<Parts> {
      const url = `${this.partsUrl}/${part.id}`;
      return this.http.put(url, JSON.stringify(part), {headers: this.headers}).toPromise().then(() => part).catch(this.handleError);
    }


//taken from the angular2 tutorial.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
