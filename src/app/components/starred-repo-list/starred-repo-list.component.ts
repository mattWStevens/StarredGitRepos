import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepoService } from '../../services/repo.service';
import { Repo } from '../../repo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepoResponse } from 'src/app/repo-response';

@Component({
  selector: 'app-starred-repo-list',
  templateUrl: './starred-repo-list.component.html',
  styleUrls: ['./starred-repo-list.component.css']
})
export class StarredRepoListComponent implements OnInit {
  realRepos$: Observable<RepoResponse[]>;

  constructor(private router: Router, private repoService: RepoService, private http: HttpClient) { }

  ngOnInit() {
    this.realRepos$ = this.http.get<RepoResponse[]>('https://api.github.com/users/mattWStevens/starred');
    //TODO: Move http get to service get method so can call that and assign to observable***
  }
}
