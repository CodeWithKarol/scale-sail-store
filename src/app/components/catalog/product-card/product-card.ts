import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ScaleSailTemplate } from '../../../core/models/scale-sail.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
})
export class ProductCard {
  product = input.required<ScaleSailTemplate>();

  protected readonly productImage = computed(() => {
    const id = this.product().id;
    const imageMap: Record<string, string> = {
      mintly: '/mintly.webp',
      cleanfleet: '/clean-fleet.webp',
      'eco-vest': '/eco-vest.webp',
      innovatetech: '/innovate-tech.webp',
      skillswap: '/skill-swap.webp',
      smartcare: '/smart-care-home.webp',
      coinquest: '/coin-quest.webp',
      budgy: '/budgy.webp',
    };
    // Default to first image or a placeholder if not found
    return imageMap[id] || '/mintly.webp';
  });
}
