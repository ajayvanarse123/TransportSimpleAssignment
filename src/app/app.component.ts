import { Component } from '@angular/core';
import { TripVisualizerComponent } from './trip-visualizer/trip-visualizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TripVisualizerComponent],
  template: `
    <div class="app-container">
      <app-trip-visualizer></app-trip-visualizer>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'Trip Visualizer';
}