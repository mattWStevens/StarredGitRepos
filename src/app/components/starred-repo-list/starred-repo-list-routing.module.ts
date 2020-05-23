import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarredRepoListComponent } from './starred-repo-list.component';
import { RepoDetailComponent } from '../repo-detail/repo-detail.component';

const routes: Routes = [
  {
    path: '',
    component: StarredRepoListComponent
  },
  {
    path: 'repos/:repoId', component: RepoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarredRepoListRoutingModule { }
