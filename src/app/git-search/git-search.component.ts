import { Component, OnInit } from '@angular/core';
import { GitSearch } from '../git-search';
import { GitSearchService } from '../git-search.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  errorSearch: boolean;
  title: string;
  displayQuery: string;

  constructor(
    private GitSearchServic: GitSearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      return this.gitSearch();
    });

    this.route.data.subscribe(result => {
      this.title = result.title;
    });
  }

  gitSearch = () => {
    this.GitSearchServic.gitSearch(this.searchQuery).then(
      response => {
        if (response.total_count > 0) {
          this.errorSearch = true;
          this.searchResults = response;
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
    this.searchResults = null;
    this.router.navigate(['/search/' + this.searchQuery]);
  }
}
