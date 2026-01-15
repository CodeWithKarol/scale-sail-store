import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LucideAngularModule, SquarePen, Zap, CheckCircle } from 'lucide-angular';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage, LucideAngularModule],
})
export class FeaturesSection {
  readonly SquarePen = SquarePen;
  readonly Zap = Zap;
  readonly CheckCircle = CheckCircle;
}
