import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works-section',
  templateUrl: './how-it-works-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HowItWorksSection {}
