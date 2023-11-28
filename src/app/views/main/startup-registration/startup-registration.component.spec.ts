import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupRegistrationComponent } from './startup-registration.component';

describe('StartupRegistrationComponent', () => {
  let component: StartupRegistrationComponent;
  let fixture: ComponentFixture<StartupRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartupRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
