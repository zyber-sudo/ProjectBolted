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
    });
  }
}
