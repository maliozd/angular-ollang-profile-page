import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  @Input() isSidebarOpen: boolean; //default value : true

  ngOnInit(): void {
    document.getElementById('sidebar').classList.remove('hide')
  }

  ngOnChanges() {
    console.log(this.isSidebarOpen)
    document.getElementById('sidebar').classList.toggle('hide')
  }

  sidebarNavChanged(event) {
    document.querySelector('.sidebar-active-link').classList.remove('sidebar-active-link')
    event.target.classList.add('sidebar-active-link');
  }
}

/* ?! track change !? 

ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change: SimpleChange = changes['data'];
     console.log(change)
    document.getElementById('sidebar').classList.toggle('hide')
  }

  */
