import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { Profile } from '../contracts/profile';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: UserProfileService, private activatedRoute: ActivatedRoute) { }
    avatarUrl : string

  //getting from activatedRoute.snapshot.params --> line 24
  userProfileId : number;
  singleProfileData: Profile;

  public inputToSidebar: Object = false

  async ngOnInit() {
    this.userProfileId = this.activatedRoute.snapshot.params['userProfileId'];
    this.singleProfileData = await this.profileService.getProfileDataById(this.userProfileId);
    this.avatarUrl = this.singleProfileData.avatar
    // console.log(this.allProfilesData)
    console.log(this.singleProfileData)
    console.log(this.avatarUrl)
  }

  async getUserData(){
    this.singleProfileData = await this.profileService.getProfileDataById(this.userProfileId);

  }

  clickedFromNavbar(){
    this.inputToSidebar = !this.inputToSidebar
  }

  
  
}
