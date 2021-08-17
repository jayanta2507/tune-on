import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { PagesComponent } from './pages.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { AuthGuardService } from '../../core/guards/auth-guard.service';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { AnalystListComponent } from './analyst/analyst-list/analyst-list.component';
import { AnalystAddComponent } from './analyst/analyst-add/analyst-add.component';
import { AnalystDeatilsComponent } from './analyst/analyst-deatils/analyst-deatils.component';
import { AnalystEditComponent } from './analyst/analyst-edit/analyst-edit.component';

const routes: Routes = [
    {
      path: 'home',
      component: PagesComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuardService] 
    },
    {
      path: 'client',
      component: ClientComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'clientadd',
      component: ClientAddComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'client-details/:id',
      component: ClientDetailsComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'client-edit/:id',
      component: ClientEditComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'analyst-list',
      component: AnalystListComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'analyst-add',
      component: AnalystAddComponent,
      canActivate: [AuthGuardService]
    },
       {
      path: 'analyst-details/:id',
      component: AnalystDeatilsComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'analyst-edit/:id',
      component: AnalystEditComponent,
      canActivate: [AuthGuardService]
    },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
