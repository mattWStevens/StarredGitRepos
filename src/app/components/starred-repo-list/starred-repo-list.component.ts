import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepoService } from '../../services/repo.service';
import { Repo } from '../../repo';

@Component({
  selector: 'app-starred-repo-list',
  templateUrl: './starred-repo-list.component.html',
  styleUrls: ['./starred-repo-list.component.css']
})
export class StarredRepoListComponent implements OnInit {
  repos: Repo[];

  constructor(private router: Router, private repoService: RepoService) { }

  ngOnInit() {
    this.repos = this.repoService.getRepos();
  }

}
