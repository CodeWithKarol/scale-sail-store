import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FeaturesSection {}
