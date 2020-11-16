import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styleUrls: ['./virtual-scrolling.component.css']
})
export class VirtualScrollingComponent implements OnInit {

  constructor(private teamsService: TeamsService) { }

  teams = [];

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teams = this.teamsService.getTeams();
  }

}
