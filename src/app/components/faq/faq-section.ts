import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FaqSection {
  protected readonly faqs = [
    {
      question: 'Do I need a framework or build tools?',
      answer: 'No—these are static HTML/CSS/JS templates. Upload and go live.',
    },
    {
      question: 'Can I use these commercially?',
      answer:
        'Yes. A commercial-use license is included (details depend on the template—see the included license file).',
    },
    {
      question: 'Are the templates accessible?',
      answer:
        'They’re built with accessible foundations (semantic structure, focus visibility, practical contrast). Always review final brand colors and content to maintain WCAG AA.',
    },
    {
      question: 'Can I connect the forms to my email/service?',
      answer:
        'Yes. Templates are designed to be easy to hook up to services like Formspree / Netlify Forms / EmailJS or your backend.',
    },
    {
      question: 'Where can I see proof of quality?',
      answer: 'My portfolio shows the frontend standards behind Scale Sail.',
    },
  ];
}
