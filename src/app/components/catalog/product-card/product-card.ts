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
      mintly:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426', // Fintech/Dashboard
      cleanfleet:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072', // Code/Laptop
      'eco-vest':
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=2070', // Money/Green
      innovatetech:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070', // Analytics
      skillswap:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070', // Collab
      smartcare:
        'https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=2070', // Health
      coinquest:
        'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1974', // Crypto
      budgy:
        'https://images.unsplash.com/photo-1554224155-98406856d03f?auto=format&fit=crop&q=80&w=2072', // Finance
    };
    // Default to a generic tech/code image if not found
    return (
      imageMap[id] ||
      'https://images.unsplash.com/photo-1481487484168-9b995ecc16ec?auto=format&fit=crop&q=80&w=2070'
    );
  });
}
