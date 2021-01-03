import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRoutingModule } from './main-page-routing.modules';
import { MainPageComponent } from './pages/mainPage/main-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutComponent } from './pages/aboutMe/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
    declarations: [MainPageComponent, WelcomeComponent, AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent],
    imports: [
      CommonModule,
      MainPageRoutingModule,
     
    ]
  })
  export class MainPageModule { }
  