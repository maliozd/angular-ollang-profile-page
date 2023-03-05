import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../contracts/api/profile';
import NavbarUserInfoDto from '../contracts/dtos/navbar-user-info-dto';
import UserInfoDTO from '../contracts/dtos/user-info-dto';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: UserProfileService, private activatedRoute: ActivatedRoute) { }

  //getting from activatedRoute.snapshot.params --> onInit
  userProfileId: number;
  profileData: Profile;
  userInfoDto: UserInfoDTO = new UserInfoDTO(); //data object for userInfoComponent
  userInfoForNavbarDto: NavbarUserInfoDto = new NavbarUserInfoDto();


  //menu button clicked event --> sending to sidebar
  public inputToSidebar: boolean = false

  async ngOnInit() {
    const footerNavs = document.querySelectorAll(".text-blue-400")

    this.userProfileId = this.activatedRoute.snapshot.params['userProfileId'];
    this.profileData = await this.profileService.getProfileDataById(this.userProfileId);


    this.userInfoDto.avatarUrl = this.profileData.avatar
    this.userInfoDto.name = this.profileData.name
    this.userInfoDto.summary = this.profileData.summary
    this.userInfoDto.state = this.profileData.state
    this.userInfoDto.country = this.profileData.country
    this.userInfoDto.yearsOfExperience = this.profileData.yearsOfExperience
    this.userInfoDto.numberOfInternships = this.profileData.numberOfInternships
    this.userInfoDto.certificateCount = this.profileData.certificateCount

    this.userInfoForNavbarDto.name = this.profileData.name;
    this.userInfoForNavbarDto.avatarUrl = this.profileData.avatar;



  }

  async getUserData() {
    this.profileData = await this.profileService.getProfileDataById(this.userProfileId);

  }

  clickedFromNavbar() {
    this.inputToSidebar = !this.inputToSidebar
  }

  navClicked(event) {
    document.querySelector('.active-link').classList.remove('active-link');
    event.target.classList.add('active-link')
  }

}
