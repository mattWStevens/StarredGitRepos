import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepoService } from '../../services/repo.service';

@Component({
  selector: 'app-starred-repo-list',
  templateUrl: './starred-repo-list.component.html',
  styleUrls: ['./starred-repo-list.component.css']
})
export class StarredRepoListComponent implements OnInit {
  repos: String[];

  constructor(private router: Router, private repoService: RepoService) { }

  ngOnInit() {
    this.repos = this.repoService.getRepoNames();
  }

}
