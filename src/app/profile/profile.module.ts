import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import { MatCardModule, MatSidenavModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    ProfileComponent,
    SidebarComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path : ":userProfileId", component : ProfileComponent
    }]),
    LayoutModule,
    MatCardModule,
  ],
  exports : [
    ProfileComponent,
    NavbarComponent
  ]
})
export class ProfileModule { }
