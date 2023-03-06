import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavbarData } from 'src/app/contracts/dtos/navbar-data';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  @Output() hideSidebarEventEmitter: EventEmitter<any> = new EventEmitter();
  @Input() navbarData: NavbarData

  async ngOnInit() {
    document.getElementById('dropdownMenuButton').addEventListener('click', () => {
      document.getElementById('dropdownMenu').classList.toggle('hidden');
    });   
  }
  
  sidebarToggleEvent() {
    this.hideSidebarEventEmitter.emit();
  } 
}
