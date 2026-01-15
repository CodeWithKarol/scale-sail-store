import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LucideAngularModule, ShieldCheck, ArrowRight } from 'lucide-angular';
import { SectionHeader } from '../ui/section-header/section-header';

@Component({
  selector: 'app-trust-section',
  templateUrl: './trust-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage, LucideAngularModule, SectionHeader],
})
export class TrustSection {
  readonly ShieldCheck = ShieldCheck;
  readonly ArrowRight = ArrowRight;
  portfolioLink = 'https://www.karol-modelski.scale-sail.io/';
}
