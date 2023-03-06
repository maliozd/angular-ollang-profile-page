import { Component, OnInit } from '@angular/core';
import { Profile } from './contracts/api/profile';
import { UserProfileService } from './services/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {

  }
  title = 'ollang-profile-page-task';

  async ngOnInit() {
  }

 
}
