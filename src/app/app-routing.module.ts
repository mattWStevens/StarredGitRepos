import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'starred-repo-list',
    pathMatch: 'full'
  },
  {
    path: 'starred-repo-list',
    loadChildren: './components/starred-repo-list/starred-repo-list.module#StarredRepoListModule'
  }
  // TODO: Add detail route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
