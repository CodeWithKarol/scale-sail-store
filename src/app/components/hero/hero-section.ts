import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Hero Section
 */
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeroSection {}
