import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbCalculatorComponent } from './cdb-calculator.component';

describe('CDBCALCULATORComponent', () => {
  let component: CdbCalculatorComponent;
  let fixture: ComponentFixture<CdbCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdbCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdbCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
