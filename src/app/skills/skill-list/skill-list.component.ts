import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClientService } from '../../service/http-client.service'
import {Skill} from '../../model/Skill'

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  skills: Skill[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getSkills().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.skills = response;
    console.log(this.skills);
  }
}
