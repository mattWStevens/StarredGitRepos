import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarredRepoListComponent } from './starred-repo-list.component';

const routes: Routes = [
  {
    path: '',
    component: StarredRepoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarredRepoListRoutingModule { }
