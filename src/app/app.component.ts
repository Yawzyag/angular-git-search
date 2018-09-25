import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitUserService } from './git-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService, GitUserService]
})
export class AppComponent implements OnInit {
  title = 'Angular';
  gitCount: string;
  gitUser: string;
  userSearch: string;

  constructor(
    private GitSearchService: GitSearchService,
    private GitUserService: GitUserService
  ) {}

  ngOnInit() {}
}
