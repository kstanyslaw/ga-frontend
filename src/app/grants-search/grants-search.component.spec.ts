import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsSearchComponent } from './grants-search.component';

describe('GrantsSearchComponent', () => {
  let component: GrantsSearchComponent;
  let fixture: ComponentFixture<GrantsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
