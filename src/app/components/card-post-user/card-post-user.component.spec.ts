import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostUserComponent } from './card-post-user.component';

describe('CardPostUserComponent', () => {
  let component: CardPostUserComponent;
  let fixture: ComponentFixture<CardPostUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPostUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
