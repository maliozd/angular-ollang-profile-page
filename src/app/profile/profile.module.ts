import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path : "", component : ProfileComponent
    }])
  ],
  exports : [
    ProfileComponent,
  ]
})
export class ProfileModule { }
