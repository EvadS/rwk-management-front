import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessangersListComponent } from './messangers-list.component';

describe('MessangersListComponent', () => {
  let component: MessangersListComponent;
  let fixture: ComponentFixture<MessangersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessangersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessangersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
