import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Profile } from '../contracts/api/profile';
import NavbarData from '../contracts/dtos/navbar-data';
import { ProfileData } from '../contracts/dtos/profile-data';
import { UserInfoData } from '../contracts/dtos/user-info-data';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(private httpClient: HttpClientService) { }

  async getAllProfileData(): Promise<Profile[]> {
    const data: Profile[] = await firstValueFrom(this.httpClient.getAll<Profile[]>());
    return data;
  }

  async getProfileDataById(id: number): Promise<ProfileData> {
    const data: Profile = await firstValueFrom(this.httpClient.getById<Profile>(id))
    const profileData = this.map(data);
    return profileData;
  }

  private map(data: Profile): ProfileData {
    const navbarData: NavbarData = {
      avatarUrl: data.avatar,
      name: data.name
    };

    const userInfoData: UserInfoData = {
      avatarUrl: data.avatar,
      certificateCount: data.certificateCount,
      country: data.country,
      name: data.name,
      numberOfInternships: data.numberOfInternships,
      state: data.state,
      summary: data.summary,
      yearsOfExperience: data.yearsOfExperience
    };
    const profileData: ProfileData = {
      navbarData: navbarData,
      userInfo: userInfoData
    };
    return profileData;
  }
}
