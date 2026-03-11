import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapviewerComponent } from './mapviewer.component';

describe('MapviewerComponent', () => {
  let component: MapviewerComponent;
  let fixture: ComponentFixture<MapviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapviewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
