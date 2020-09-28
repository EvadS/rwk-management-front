import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSearchersComponent } from './add-searchers.component';

describe('AddSearchersComponent', () => {
  let component: AddSearchersComponent;
  let fixture: ComponentFixture<AddSearchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSearchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSearchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
