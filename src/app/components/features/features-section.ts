import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LucideAngularModule, SquarePen, Zap, CheckCircle } from 'lucide-angular';
import { SectionHeader } from '../ui/section-header/section-header';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage, LucideAngularModule, SectionHeader],
})
export class FeaturesSection {
  readonly SquarePen = SquarePen;
  readonly Zap = Zap;
  readonly CheckCircle = CheckCircle;
}
