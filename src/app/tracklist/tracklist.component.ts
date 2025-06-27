import { Component } from '@angular/core';

@Component({
  selector: 'app-tracklist',
  standalone: true,
  imports: [],
  templateUrl: './tracklist.component.html',
  styleUrl: './tracklist.component.css'
})
export class TracklistComponent {
  title = 'Tracklist';
  description = 'This is where the track list will be.';
}

