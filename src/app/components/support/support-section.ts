import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SupportModal } from './support-modal/support-modal';

@Component({
  selector: 'app-support-section',
  templateUrl: './support-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SupportModal],
})
export class SupportSection {
  protected readonly isModalOpen = signal(false);

  toggleModal(isOpen: boolean) {
    this.isModalOpen.set(isOpen);
  }
}
