import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderSection } from '../../components/header/header-section';
import { HeroSection } from '../../components/hero/hero-section';
import { TrustSection } from '../../components/trust/trust-section';
import { FeaturesSection } from '../../components/features/features-section';
import { CatalogSection } from '../../components/catalog/catalog-section';
import { IncludedSection } from '../../components/included/included-section';
import { HowItWorksSection } from '../../components/how-it-works/how-it-works-section';
import { SupportSection } from '../../components/support/support-section';
import { FaqSection } from '../../components/faq/faq-section';
import { CtaSection } from '../../components/cta/cta-section';
import { FooterSection } from '../../components/footer/footer-section';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    HeaderSection,
    HeroSection,
    TrustSection,
    FeaturesSection,
    CatalogSection,
    IncludedSection,
    HowItWorksSection,
    SupportSection,
    FaqSection,
    CtaSection,
    FooterSection,
  ],
})
export class LandingPage {}
