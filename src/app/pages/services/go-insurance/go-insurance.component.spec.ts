import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoInsuranceComponent } from './go-insurance.component';

describe('GoInsuranceComponent', () => {
  let component: GoInsuranceComponent;
  let fixture: ComponentFixture<GoInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
