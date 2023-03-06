import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ContentComponent } from './content/content.component';
import { BiographyComponent } from './content/biography/biography.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { SkillsComponent } from './content/skills/skills.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { DynamicComponentLoadDirective } from '../directives/dynamic-component-load.directive';


@NgModule({
  declarations: [
    ProfileComponent,
    SidebarComponent,
    NavbarComponent,
    UserInfoComponent,
    ContentComponent,
    BiographyComponent,
    ExperienceComponent,
    SkillsComponent,
    PortfolioComponent,
    DynamicComponentLoadDirective,

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
