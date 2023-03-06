import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ContentComponent } from './content/content.component';
import { BiographyComponent } from './content/biography/biography.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { SkillsComponent } from './content/skills/skills.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { DynamicComponentLoadDirective } from '../directives/dynamic-component-load.directive';
import { UpgradePlanComponent } from './upgrade-plan/upgrade-plan.component';


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
    UpgradePlanComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path : ":userProfileId", component : ProfileComponent
    }]),
  ],
  exports : []
})
export class ProfileModule { }