import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUserSearchComponent } from './git-user-search.component';

describe('GitUserSearchComponent', () => {
  let component: GitUserSearchComponent;
  let fixture: ComponentFixture<GitUserSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitUserSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
