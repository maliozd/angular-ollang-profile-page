import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import NavbarData from '../contracts/dtos/navbar-data';
import { ProfileData } from '../contracts/dtos/profile-data';
import { UserInfoData } from '../contracts/dtos/user-info-data';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userProfileService: UserProfileService, private activatedRoute: ActivatedRoute) { }

  userProfileId: number;
  userInfoData: UserInfoData = new UserInfoData();
  navbarData: NavbarData = new NavbarData();
  public isSidebarOpen: boolean = true //menuButton click event --> sending to sidebar

  async ngOnInit() {
    this.userProfileId = this.activatedRoute.snapshot.params['userProfileId'];
    this.userInfoData = (await this.getUserData()).userInfo
    this.navbarData = (await this.getUserData()).navbarData
  }

  async getUserData(): Promise<ProfileData> {
    const userData: ProfileData = await this.userProfileService.getProfileDataById(this.userProfileId);
    return userData;
  }

  openMenu() {
    var sideMenu = document.getElementById('side-menu');

    sideMenu.classList.remove('left-[-250px]');
    sideMenu.classList.add('left-0');
  }

  closeMenu() {
    var sideMenu = document.getElementById('side-menu');

    sideMenu.classList.remove('left-0');
    sideMenu.classList.add('left-[-250px]');
  }

}
