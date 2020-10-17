import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  name: String = window.history.state['name'];
  description: String = window.history.state['description'];
  url: String = window.history.state['url'];

  constructor() { }

  ngOnInit() {
  }

}
