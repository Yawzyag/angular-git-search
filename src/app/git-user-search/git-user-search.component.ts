import { Component, OnInit } from '@angular/core';
import { GitUser } from '../git-user-search';
import { GitUserService } from '../git-user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-git-user-search',
  templateUrl: './git-user-search.component.html',
  styleUrls: ['./git-user-search.component.css']
})
export class GitUserSearchComponent implements OnInit {
  userSearchResults: GitUser;
  searchQuery: string;
  errorSearch: boolean;
  title: string;
  displayQuery: string;

  constructor(
    private GitUserServic: GitUserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      return this.gitUserSearch();
    });

    this.route.data.subscribe(result => {
      this.title = result.title;
    });
  }

  gitUserSearch() {
    this.GitUserServic.gitUser(this.searchQuery).then(
      response => {
        if (response.total_count > 0) {
          this.errorSearch = true;
          this.userSearchResults = response;
        } else {
          this.errorSearch = false;
        }
      },
      error => {
        this.errorSearch = error.ok;
        console.log('Error: ' + error.statusText);
      }
    );
  }

  sendQuery = () => {
    this.userSearchResults = null;
    this.router.navigate(['/search-users/' + this.searchQuery]);
  }
}
