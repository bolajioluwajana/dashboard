import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRetentionComponent } from './customer-retention.component';

describe('CustomerRetentionComponent', () => {
  let component: CustomerRetentionComponent;
  let fixture: ComponentFixture<CustomerRetentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRetentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
