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
  name: String = window.history.state['name'];
  description: String = window.history.state['description'];
  url: String = window.history.state['url'];

  constructor(private repoService: RepoService, private activatedRoute: ActivatedRoute) { }

}
