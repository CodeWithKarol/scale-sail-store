import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  LucideAngularModule,
  Code,
  LayoutGrid,
  MonitorSmartphone,
  Paintbrush,
  BookOpen,
  ShieldCheck,
  PackageCheck,
} from 'lucide-angular';
import { SectionHeader } from '../ui/section-header/section-header';

@Component({
  selector: 'app-included-section',
  templateUrl: './included-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LucideAngularModule, SectionHeader],
})
export class IncludedSection {
  readonly Code = Code;
  readonly LayoutGrid = LayoutGrid;
  readonly MonitorSmartphone = MonitorSmartphone;
  readonly Paintbrush = Paintbrush;
  readonly BookOpen = BookOpen;
  readonly ShieldCheck = ShieldCheck;
  readonly PackageCheck = PackageCheck;
}
