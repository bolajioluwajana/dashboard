import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinevisitorsComponent } from './onlinevisitors.component';

describe('OnlinevisitorsComponent', () => {
  let component: OnlinevisitorsComponent;
  let fixture: ComponentFixture<OnlinevisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinevisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinevisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
