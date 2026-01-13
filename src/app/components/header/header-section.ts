import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderSection {}
