import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repo } from 'src/app/repo';
import { RepoService } from '../../services/repo.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  repo: Repo;

  constructor(private repoService: RepoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const repoList: Repo[] = this.repoService.getRepos();

    this.activatedRoute.paramMap.subscribe(params => {
      this.repo = repoList[+params.get('repoId')];
    });
  }

}
