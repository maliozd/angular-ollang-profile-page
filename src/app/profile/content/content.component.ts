import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicComponentLoadDirective } from 'src/app/directives/dynamic-component-load.directive';
import { ComponentType } from 'src/app/enums/component-type';
import { DynamicComponentLoadingService } from 'src/app/services/dynamic-component-loading.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild(DynamicComponentLoadDirective, { static: true })
  dynamicComponentLoadDirective: DynamicComponentLoadDirective;
  constructor(private dynamicComponentLoadService: DynamicComponentLoadingService) { }

  ngOnInit(): void {
    this.dynamicComponentLoadService.loadComponent(ComponentType.ExperienceComponent, this.dynamicComponentLoadDirective.viewContainerRef)
  }
  loadComponent(event) {
    document.querySelector('.active-link').classList.remove('active-link');
    event.target.classList.add('active-link')

    switch (event.target.id) {
      case "experience":
        this.dynamicComponentLoadService.loadComponent(ComponentType.ExperienceComponent, this.dynamicComponentLoadDirective.viewContainerRef)
        break;
      case "biography":
        this.dynamicComponentLoadService.loadComponent(ComponentType.BiographyComponent, this.dynamicComponentLoadDirective.viewContainerRef)
        break;
      case "skills":
        this.dynamicComponentLoadService.loadComponent(ComponentType.SkillsComponent, this.dynamicComponentLoadDirective.viewContainerRef)
        break;
      case "portfolio":
        this.dynamicComponentLoadService.loadComponent(ComponentType.PortfolioComponent, this.dynamicComponentLoadDirective.viewContainerRef)
        break;
    }
  }
}
