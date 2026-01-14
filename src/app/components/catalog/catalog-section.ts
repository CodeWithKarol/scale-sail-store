import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { SCALE_SAIL_TEMPLATES } from '../../core/config/scale-sail.config';
import { ScaleSailTemplate } from '../../core/models/scale-sail.model';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-catalog-section',
  templateUrl: './catalog-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CurrencyPipe, CommonModule, ProductCard],
})
export class CatalogSection {
  products = signal<readonly ScaleSailTemplate[]>(SCALE_SAIL_TEMPLATES);
}
