import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LucideAngularModule],
})
export class SectionHeader {
  icon = input<any>(null);
  badge = input<string>('');
  title = input.required<string>();
  description = input<string>('');
  align = input<'center' | 'left'>('center');
  theme = input<'light' | 'dark'>('light');

  containerClass = computed(() => {
    const alignment = this.align();
    return alignment === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl lg:max-w-lg';
  });

  iconContainerClass = computed(() => {
    const alignment = this.align();
    return `mb-6 flex ${alignment === 'center' ? 'justify-center' : 'justify-start'}`;
  });

  iconClass = computed(() => {
    const theme = this.theme();
    return `h-10 w-10 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`;
  });

  badgeClass = computed(() => {
    const theme = this.theme();
    const base = 'text-base/7 font-semibold uppercase tracking-wide';
    const color = theme === 'light' ? 'text-indigo-600' : 'text-indigo-400';
    return `${base} ${color}`;
  });

  titleClass = computed(() => {
    const theme = this.theme();
    const base = 'mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-balance';
    const color = theme === 'light' ? 'text-slate-900' : 'text-white';
    return `${base} ${color}`;
  });

  descriptionClass = computed(() => {
    const theme = this.theme();
    const base = 'mt-6 text-lg leading-8';
    const color = theme === 'light' ? 'text-slate-600' : 'text-slate-300';
    return `${base} ${color}`;
  });
}
