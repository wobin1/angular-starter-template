import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedStartupsComponent } from './verified-startups.component';

describe('VerifiedStartupsComponent', () => {
  let component: VerifiedStartupsComponent;
  let fixture: ComponentFixture<VerifiedStartupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedStartupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedStartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
