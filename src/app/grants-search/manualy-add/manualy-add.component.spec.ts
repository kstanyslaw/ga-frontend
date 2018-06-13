import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualyAddComponent } from './manualy-add.component';

describe('ManualyAddComponent', () => {
  let component: ManualyAddComponent;
  let fixture: ComponentFixture<ManualyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
