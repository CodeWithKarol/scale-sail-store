import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FaqSection {}
