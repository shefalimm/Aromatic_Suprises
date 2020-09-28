import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlesComponent } from './candles.component';

describe('CandlesComponent', () => {
  let component: CandlesComponent;
  let fixture: ComponentFixture<CandlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
