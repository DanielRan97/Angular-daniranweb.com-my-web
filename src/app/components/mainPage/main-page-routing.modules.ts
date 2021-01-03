import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/mainPage/main-page.component';



const routes: Routes = [

    {path: '' , component: MainPageComponent, pathMatch : 'full'},
    {path: 'main' , component: MainPageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
