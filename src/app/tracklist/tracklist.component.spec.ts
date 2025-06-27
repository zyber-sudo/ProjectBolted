import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TracklistComponent } from './tracklist.component';

describe('TracklistComponent', () => {
  let component: TracklistComponent;
  let fixture: ComponentFixture<TracklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracklistComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TracklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBeDefined();
    expect(component.title).toContain('Welcome to ProjectBolt');
  });

  it('should have a description', () => {
    expect(component.description).toBeDefined();
    expect(component.description).toContain('modern web application');
  });

  it('should render title in h1 tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to ProjectBolt');
  });

  it('should render three feature cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const featureCards = compiled.querySelectorAll('.feature-card');
    expect(featureCards.length).toBe(3);
  });

  it('should have a call-to-action button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const ctaButton = compiled.querySelector('.cta-button');
    expect(ctaButton).toBeTruthy();
    expect(ctaButton?.textContent).toContain('Get Started');
  });
});
