import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

const LIST_URL = '/messenger/list'
const DELETE_URL = '/messenger/'

@Injectable({
  providedIn: 'root'
})


export class MessangerService {

  constructor(private http: HttpClient) { }

  getMessengersList(): Observable<any> {
    console.log("get messengers")
    let getListUrl = API_URL + LIST_URL;
    return this.http.get(getListUrl);
  }

  deleteMessenger(id: number): Observable<any> {
    let deleteUrl = API_URL + DELETE_URL;
    return this.http.delete(`${DELETE_URL}/${id}`, { responseType: 'text' });
  }
}
