import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Trip {
  start: string;
  end: string;
}

@Component({
  selector: 'app-trip-visualizer',
  templateUrl: './trip-visualizer.component.html',
  styleUrls: ['./trip-visualizer.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TripVisualizerComponent {
  startPoint: string = '';
  endPoint: string = '';
  trips: Trip[] = [];

  handleAddTrip(): void {
    if (this.startPoint && this.endPoint) {
      this.trips.push({ start: this.startPoint, end: this.endPoint });
      this.startPoint = '';
      this.endPoint = '';
    }
  }

  handleRemoveTrip(index: number): void {
    this.trips.splice(index, 1);
  }

  getFirstThreeChars(text: string): string {
    return text.substring(0, 3).toUpperCase();
  }

  isContinuedTrip(currentIndex: number): boolean {
    if (currentIndex === 0) return false;
    return this.trips[currentIndex - 1].end === this.trips[currentIndex].start;
  }

  isRepeatedRoute(currentIndex: number): boolean {
    for (let i = 0; i < currentIndex; i++) {
      if (
        this.trips[i].start === this.trips[currentIndex].start &&
        this.trips[i].end === this.trips[currentIndex].end
      ) {
        return true;
      }
    }
    return false;
  }

  getLineClass(index: number): string {
    if (this.isRepeatedRoute(index)) {
      return 'level-2';
    }
    return 'level-1';
  }

  showArrow(index: number): boolean {
    return !this.isContinuedTrip(index);
  }
} 