import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trust-section',
  templateUrl: './trust-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrustSection {
  portfolioLink = '#';
}
