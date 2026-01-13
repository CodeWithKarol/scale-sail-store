import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SCALE_SAIL_TEMPLATES } from '../../core/config/scale-sail.config';
import { ScaleSailTemplate } from '../../core/models/scale-sail.model';

@Component({
  selector: 'app-catalog-section',
  templateUrl: './catalog-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CurrencyPipe, CommonModule]
})
export class CatalogSection {
  products = signal<readonly ScaleSailTemplate[]>(SCALE_SAIL_TEMPLATES);

  // Helper to maintain the visual variety since color is not in the config
  getProductColor(id: string): string {
    const colorMap: Record<string, string> = {
      'mintly': 'bg-emerald-500',
      'cleanfleet': 'bg-blue-600',
      'eco-vest': 'bg-teal-700',
      'innovatetech': 'bg-indigo-600',
      'skillswap': 'bg-violet-500',
      'smartcare': 'bg-rose-500',
      'coinquest': 'bg-yellow-500',
      'budgy': 'bg-cyan-500'
    };
    return colorMap[id] || 'bg-slate-500';
  }
}
