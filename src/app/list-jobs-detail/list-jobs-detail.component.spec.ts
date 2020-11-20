import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobsDetailComponent } from './list-jobs-detail.component';

describe('ListJobsDetailComponent', () => {
  let component: ListJobsDetailComponent;
  let fixture: ComponentFixture<ListJobsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJobsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
