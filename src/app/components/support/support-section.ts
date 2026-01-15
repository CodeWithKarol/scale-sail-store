import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LucideAngularModule, LifeBuoy } from 'lucide-angular';
import { SupportModal } from './support-modal/support-modal';
import { SectionHeader } from '../ui/section-header/section-header';

@Component({
  selector: 'app-support-section',
  templateUrl: './support-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SupportModal, LucideAngularModule, SectionHeader],
})
export class SupportSection {
  protected readonly isModalOpen = signal(false);
  readonly LifeBuoy = LifeBuoy;

  toggleModal(isOpen: boolean) {
    this.isModalOpen.set(isOpen);
  }
}
