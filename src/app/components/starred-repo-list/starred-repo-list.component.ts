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
  repos: Repo[];
  realRepos$: Observable<RepoResponse[]>;

  constructor(private router: Router, private repoService: RepoService, private http: HttpClient) { }

  ngOnInit() {
    this.repos = this.repoService.getRepos();
    this.realRepos$ = this.http.get<RepoResponse[]>('https://api.github.com/users/mattWStevens/starred')
    /*this.realRepos$.subscribe(realrepos => {
      for (var i = 0; i < 6; i++) {
        this.repos[i] = realrepos[i];
      } //TODO: Star other repos and try again to see if maps correctly, if it does, then begin replacing other implementation
        with the actual observable.
    });*/
    console.log(this.repos);
  }
}
