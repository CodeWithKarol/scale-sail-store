import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LucideAngularModule],
})
export class HeaderSection {
  protected readonly isMobileMenuOpen = signal(false);
  readonly Menu = Menu;
  readonly X = X;

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
