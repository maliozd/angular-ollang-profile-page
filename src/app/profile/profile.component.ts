import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  //getting from activatedRoute.snapshot.params --> line 24
  userProfileId : number;

  allProfilesData: Profile[];
  singleProfileData: Profile;

  async ngOnInit() {
    this.userProfileId = this.activatedRoute.snapshot.params['userProfileId'];
    this.allProfilesData = await this.profileService.getAllProfileData();
    this.singleProfileData = await this.profileService.getProfileDataById(this.userProfileId);
    // console.log(this.allProfilesData)
    console.log(this.singleProfileData)
  }

}
