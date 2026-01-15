import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  LucideAngularModule,
  Download,
  PenTool,
  Rocket,
  ArrowRight,
  Workflow,
} from 'lucide-angular';
import { SectionHeader } from '../ui/section-header/section-header';

@Component({
  selector: 'app-how-it-works-section',
  templateUrl: './how-it-works-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LucideAngularModule, SectionHeader],
})
export class HowItWorksSection {
  readonly Download = Download;
  readonly PenTool = PenTool;
  readonly Rocket = Rocket;
  readonly ArrowRight = ArrowRight;
  readonly Workflow = Workflow;
}
