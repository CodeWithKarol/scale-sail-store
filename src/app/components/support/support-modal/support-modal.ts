import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { catchError, finalize, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-support-modal',
  templateUrl: './support-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class SupportModal {
  close = output<void>();
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
      access_key: '96dd68a1-6862-4e27-a83f-66e435b684a6', // Replace with valid Web3Forms Access Key
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
          // Auto close after 2 seconds
          setTimeout(() => this.close.emit(), 2000);
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
