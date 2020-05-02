import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredRepoListComponent } from './starred-repo-list.component';

describe('StarredRepoListComponent', () => {
  let component: StarredRepoListComponent;
  let fixture: ComponentFixture<StarredRepoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredRepoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredRepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
