import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashViewComponent } from './user-dash-view.component';

describe('UserDashViewComponent', () => {
  let component: UserDashViewComponent;
  let fixture: ComponentFixture<UserDashViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
