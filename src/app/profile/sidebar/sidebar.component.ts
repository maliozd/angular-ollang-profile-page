import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() data;

  ngOnInit(): void {
    document.getElementById('sidebar').classList.remove('hide')
  }
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change: SimpleChange = changes['data'];
    //  console.log(change)
    document.getElementById('sidebar').classList.toggle('hide')
  }

  navClicked(event) {
    document.querySelector('.sidebar-active-link').classList.remove('sidebar-active-link')
    event.target.classList.add('sidebar-active-link');
  }

}
