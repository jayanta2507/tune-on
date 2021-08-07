import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AuthGuardService } from '../../core/guards/auth-guard.service';


const routes: Routes = [
    {
      path: 'home',
      component: PagesComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuardService]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
