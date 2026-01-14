import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-trust-section',
  templateUrl: './trust-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage],
})
export class TrustSection {
  portfolioLink = 'https://www.karol-modelski.scale-sail.io/';
}
