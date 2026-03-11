import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-track-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './track-list.component.html',
  styleUrl: './track-list.component.css'
})
export class TrackListComponent {
  tracks = [
    {
      id: 'albert-park',
      name: 'Albert Park',
      location: 'Melbourne, Australia',
      image: 'assets/images/Albert Park.svg'
    }
  ];
}
