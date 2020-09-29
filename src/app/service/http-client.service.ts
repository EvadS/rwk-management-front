import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Skill} from '../model/Skill'


@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }


  getSkills() {

   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   // return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
  

    console.log("test call");
    return this.httpClient.get<Skill[]>('http://localhost:8000/skills/list');
  }

  getMessengerType(){
    console.log('get all messsenges request');

  }
}
