import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupDetailPageComponent } from './startup-detail-page.component';

describe('StartupDetailPageComponent', () => {
  let component: StartupDetailPageComponent;
  let fixture: ComponentFixture<StartupDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartupDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
