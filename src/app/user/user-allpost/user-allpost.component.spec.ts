import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllpostComponent } from './user-allpost.component';

describe('UserAllpostComponent', () => {
  let component: UserAllpostComponent;
  let fixture: ComponentFixture<UserAllpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
