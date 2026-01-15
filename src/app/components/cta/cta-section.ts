import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, Rocket, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LucideAngularModule],
})
export class CtaSection {
  readonly Rocket = Rocket;
  readonly ArrowRight = ArrowRight;
}
