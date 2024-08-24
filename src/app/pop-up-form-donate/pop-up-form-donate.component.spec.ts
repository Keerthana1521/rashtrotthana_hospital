import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFormDonateComponent } from './pop-up-form-donate.component';

describe('PopUpFormDonateComponent', () => {
  let component: PopUpFormDonateComponent;
  let fixture: ComponentFixture<PopUpFormDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpFormDonateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpFormDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
