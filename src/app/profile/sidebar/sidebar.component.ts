import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  displayedColumns2 = [{
    text : "MyJobFeed",
    logoClass : ""
  }]


  displayedColumns = ["My Job Feed", "Discover Jobs", "Saved Jobs", "Proposal", "All contracts",
    "Profile", "Reports"]

  ngOnInit(): void {
  }

}
