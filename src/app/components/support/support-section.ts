import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule, LifeBuoy, Check, ChevronDown, Loader2 } from 'lucide-angular';
import { EMPTY } from 'rxjs';
import { catchError, finalize, take, tap } from 'rxjs/operators';
import { SectionHeader } from '../ui/section-header/section-header';

@Component({
  selector: 'app-support-section',
  templateUrl: './support-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, LucideAngularModule],
})
export class SupportSection {
  readonly LifeBuoy = LifeBuoy;
  readonly Check = Check;
  readonly ChevronDown = ChevronDown;
  readonly Loader2 = Loader2;

  private readonly http = inject(HttpClient);

  protected readonly isSubmitting = signal(false);
  protected readonly isSuccess = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    product: new FormControl('Mintly', { nonNullable: true }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    const rawValue = this.form.getRawValue();
    const formData = {
      access_key: '96dd68a1-6862-4e27-a83f-66e435b684a6',
      name: rawValue.name,
      email: rawValue.email,
      product: rawValue.product,
      message: rawValue.message,
      subject: `New Support Request: ${rawValue.product}`,
    };

    this.http
      .post('https://api.web3forms.com/submit', formData)
      .pipe(
        take(1),
        tap(() => {
          this.isSuccess.set(true);
          this.form.reset();
        }),
        catchError((error) => {
          this.errorMessage.set(
            error.error?.message || error.message || 'Something went wrong. Please try again later.'
          );
          return EMPTY;
        }),
        finalize(() => this.isSubmitting.set(false))
      )
      .subscribe();
  }
}
