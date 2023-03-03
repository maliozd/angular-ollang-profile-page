import { Component, OnInit } from '@angular/core';
import { Profile } from './contracts/profile';
import { UserProfileService } from './services/user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userProfileService: UserProfileService) {

  }
  title = 'ollang-profile-page-task';

  profileData : Profile;
  async ngOnInit() {
    this.profileData = await this.userProfileService.getProfileDataById(21);
    console.log(this.profileData)
  }
}
