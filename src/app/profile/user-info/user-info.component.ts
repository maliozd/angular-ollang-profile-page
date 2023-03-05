import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/contracts/api/profile';
import UserInfoDTO from 'src/app/contracts/dtos/user-info-dto';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() { }


  @Input() userInfo : UserInfoDTO;


  async ngOnInit() {
    console.log(this.userInfo)
  }

}
