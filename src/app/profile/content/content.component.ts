import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navClicked(event) {
    document.querySelector('.active-link').classList.remove('active-link');
    event.target.classList.add('active-link')
  }
}
