import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CtaSection {}
