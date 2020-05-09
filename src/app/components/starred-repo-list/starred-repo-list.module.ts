import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarredRepoListRoutingModule } from './starred-repo-list-routing.module';
import { StarredRepoListComponent } from './starred-repo-list.component';
import { RepoService } from '../../services/repo.service';
import { RepoDetailComponent } from '../repo-detail/repo-detail.component';

@NgModule({
  declarations: [
    StarredRepoListComponent,
    RepoDetailComponent
  ],
  imports: [
    CommonModule,
    StarredRepoListRoutingModule
  ],
  providers: [RepoService]
})
export class StarredRepoListModule { }
