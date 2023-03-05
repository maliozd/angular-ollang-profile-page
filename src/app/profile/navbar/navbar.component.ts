import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Profile } from 'src/app/contracts/api/profile';
import NavbarUserInfoDto from 'src/app/contracts/dtos/navbar-user-info-dto';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userProfileService: UserProfileService) {
  }
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  @Input()  userInfo : NavbarUserInfoDto
  profileData: Profile;

  async ngOnInit() {
    this.profileData = await this.userProfileService.getProfileDataById(32)
  }
  menubarClicked() {
    this.toggleSidebarEvent.emit();
  }

}
