import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-support-section',
  templateUrl: './support-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SupportSection {}
