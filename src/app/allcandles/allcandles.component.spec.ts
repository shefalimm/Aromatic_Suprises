import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcandlesComponent } from './allcandles.component';

describe('AllcandlesComponent', () => {
  let component: AllcandlesComponent;
  let fixture: ComponentFixture<AllcandlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcandlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
