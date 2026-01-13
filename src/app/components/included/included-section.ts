import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-included-section',
  templateUrl: './included-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IncludedSection {}
