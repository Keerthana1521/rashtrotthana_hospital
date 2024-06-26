import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckupComponent } from './health-checkup.component';

describe('HealthCheckupComponent', () => {
  let component: HealthCheckupComponent;
  let fixture: ComponentFixture<HealthCheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthCheckupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
