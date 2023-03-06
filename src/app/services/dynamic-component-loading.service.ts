import { Injectable, ViewContainerRef } from '@angular/core';
import { ComponentType } from '../enums/component-type';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentLoadingService {
  constructor() { }

  async loadComponent(componentType: ComponentType, viewContainerRef: ViewContainerRef) {
    let _component: any = null;

    switch (componentType) {
      case ComponentType.BiographyComponent:
        _component = (await import("../../app/profile/content/biography/biography.component")).BiographyComponent;
        break;

      case ComponentType.SkillsComponent:
        _component = (await import("../../app/profile/content/skills/skills.component")).SkillsComponent;
        break;

      case ComponentType.ExperienceComponent:
        _component = (await import("../../app/profile/content/experience/experience.component")).ExperienceComponent;
        break;

      case ComponentType.PortfolioComponent:
        _component = (await import("../../app/profile/content/portfolio/portfolio.component")).PortfolioComponent;
        break;
    }
    viewContainerRef.clear();
    return viewContainerRef.createComponent(_component);
  }
}


