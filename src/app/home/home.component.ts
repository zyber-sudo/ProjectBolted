import { Component } from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'F1 Interactive App';
  description = 'Explore Formula 1 tracks, strategies, and more!';

  features = [
    {
      title: 'Track List',
      description: 'View various tracks on the F1 Calendar',
      image: 'assets/images/spa_feature_background.jpg',
    },
    {
      title: 'Historical Comparison (COMING SOON)',
      description: 'See how some of the most famous tracks have changed over time',
      image: 'assets/images/historical_feature_background.jpg',
    },
    {
      title: 'Strat Sim (Coming Soon)',
      description: 'Fight your way for the win!',
      image: 'assets/images/F1_manager_background.png',
    }
  ];
}
