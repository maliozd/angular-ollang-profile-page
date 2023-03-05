import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Profile } from '../contracts/api/profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  //do i need custom httpClientService? 
  
  constructor(protected httpClient: HttpClient, @Inject("mockApiUrl") private requestUrl: string) {
    // console.log(requestUrl)
  }

  async getAllProfileData(): Promise<Profile[]> {
    const data: Profile[] = await firstValueFrom(this.httpClient.get<Profile[]>(this.requestUrl));
    return data;
  }

  async getProfileDataById(id: number): Promise<Profile> {
    const data: Profile = await firstValueFrom(this.httpClient.get<Profile>(`${this.requestUrl}/${id}`))
    return data;
  }
}
