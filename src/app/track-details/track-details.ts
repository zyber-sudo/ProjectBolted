import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-track-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './track-details.html',
  styleUrl: './track-details.css'
})
export class TrackDetails implements OnInit {
  track: any;
  scale = 1;
  positionX = 0;
  positionY = 0;
  isDragging = false;
  lastMouseX = 0;
  lastMouseY = 0;
  isAddingPoi = false;
  pois: { x: number, y: number, label: string, sport: string }[] = [];

  tracks = [
    {
      id: 'albert-park',
      name: 'Albert Park',
      location: 'Melbourne, Australia',
      image: 'assets/images/Albert Park.svg'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const trackId = params.get('id');
      this.track = this.tracks.find(t => t.id === trackId);
      if (this.track) {
        this.loadPois();
      }
    });
  }

  toggleAddPoi() {
    this.isAddingPoi = !this.isAddingPoi;
  }

  onMapClick(event: MouseEvent) {
    if (!this.isAddingPoi) return;

    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();

    // Mouse position relative to the container
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Center of the container
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Coordinate calculation:
    // When the map is scaled and translated:
    // x_screen = centerX + (x_original_offset_from_center) * scale + positionX
    // x_original_offset_from_center = (x_screen - centerX - positionX) / scale
    // x_original = x_original_offset_from_center (since poi-pins is centered)

    const x = (mouseX - centerX - this.positionX) / this.scale;
    const y = (mouseY - centerY - this.positionY) / this.scale;

    const label = prompt('Enter a name for this point of interest:');
    if (label) {
      const sport = prompt('Enter the sport for this POI (e.g. F1, MotoGP, etc.):') || 'F1';
      this.pois.push({ x, y, label, sport });
      this.savePois();
      this.isAddingPoi = false;
    }
  }

  savePois() {
    if (this.track) {
      localStorage.setItem(`pois_${this.track.id}`, JSON.stringify(this.pois));
    }
  }

  loadPois() {
    if (this.track) {
      const saved = localStorage.getItem(`pois_${this.track.id}`);
      this.pois = saved ? JSON.parse(saved) : [];
    }
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();
    const zoomIntensity = 0.1;
    const delta = event.deltaY > 0 ? -zoomIntensity : zoomIntensity;
    const newScale = Math.min(Math.max(0.5, this.scale + delta), 5);
    this.scale = newScale;
  }

  onMouseDown(event: MouseEvent) {
    if (this.scale > 1) {
      this.isDragging = true;
      this.lastMouseX = event.clientX;
      this.lastMouseY = event.clientY;
    }
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const dx = event.clientX - this.lastMouseX;
      const dy = event.clientY - this.lastMouseY;
      this.positionX += dx;
      this.positionY += dy;
      this.lastMouseX = event.clientX;
      this.lastMouseY = event.clientY;
    }
  }

  onMouseUp() {
    this.isDragging = false;
  }

  zoomIn() {
    this.scale = Math.min(this.scale + 0.2, 5);
  }

  zoomOut() {
    this.scale = Math.max(this.scale - 0.2, 0.5);
  }

  resetZoom() {
    this.scale = 1;
    this.positionX = 0;
    this.positionY = 0;
  }
}
