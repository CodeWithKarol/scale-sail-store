import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LayoutTemplate } from 'lucide-angular';
import { SCALE_SAIL_TEMPLATES } from '../../core/config/scale-sail.config';
import { ScaleSailTemplate } from '../../core/models/scale-sail.model';
import { ProductCard } from './product-card/product-card';
import { SectionHeader } from '../ui/section-header/section-header';

@Component({
  selector: 'app-catalog-section',
  templateUrl: './catalog-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ProductCard, SectionHeader],
})
export class CatalogSection {
  readonly LayoutTemplate = LayoutTemplate;
  products = signal<readonly ScaleSailTemplate[]>(SCALE_SAIL_TEMPLATES);
}
