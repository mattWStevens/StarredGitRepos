import { Component, OnInit } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.realRepos$ = this.http.get<RepoResponse[]>('https://api.github.com/users/mattWStevens/starred');
  }
}
