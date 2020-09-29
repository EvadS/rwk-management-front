

import { Observable } from "rxjs";
import { MessangerService } from "../../service/messanger.service";
import { MessengerType } from "../../model/MessengerType";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-messangers-list',
  templateUrl: './messangers-list.component.html',
  styleUrls: ['./messangers-list.component.css']
})
export class MessangersListComponent implements OnInit {

  messengersList: Observable<MessengerType[]>;


  constructor(private messengerService: MessangerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  reloadData() {
    this.messengersList = this.messengerService.getMessengersList();
  }

  deleteMessenger(id: number) {
    this.messengerService.deleteMessenger(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  messengerDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
