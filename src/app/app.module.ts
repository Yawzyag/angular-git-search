import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GitSearchService } from './git-search.service';
import { GitUserService } from './git-user.service';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitUserSearchComponent } from './git-user-search/git-user-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'search',
    redirectTo: '/search/angular',
    pathMatch: 'full'
  },
  {
    path: 'search/:query',
    component: GitSearchComponent,
    data: {
      title: 'GitSearch'
    }
  },
  {
    path: 'search-users',
    redirectTo: '/search-users/yesid',
    pathMatch: 'full'
  },
  {
    path: 'search-users/:query',
    component: GitUserSearchComponent,
    data: {
      title: 'Git Search User'
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    GitUserSearchComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GitSearchService, GitUserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
