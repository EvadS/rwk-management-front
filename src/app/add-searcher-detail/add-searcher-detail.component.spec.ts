import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSearcherDetailComponent } from './add-searcher-detail.component';

describe('AddSearcherDetailComponent', () => {
  let component: AddSearcherDetailComponent;
  let fixture: ComponentFixture<AddSearcherDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSearcherDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSearcherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
