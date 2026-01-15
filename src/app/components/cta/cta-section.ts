import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LucideAngularModule, Rocket } from 'lucide-angular';
import { SectionHeader } from '../ui/section-header/section-header';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage, LucideAngularModule, SectionHeader],
})
export class CtaSection {
  readonly Rocket = Rocket;
}
