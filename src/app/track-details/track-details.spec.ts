import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDetails } from './track-details';

describe('TrackDetails', () => {
  let component: TrackDetails;
  let fixture: ComponentFixture<TrackDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
