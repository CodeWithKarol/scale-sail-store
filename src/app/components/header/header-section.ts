import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class HeaderSection {
  protected readonly isMobileMenuOpen = signal(false);

  protected readonly navigation = [
    { name: 'Templates', href: '#catalog' },
    { name: "What's included", href: '#included' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
