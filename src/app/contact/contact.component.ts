// contact.component.ts
import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactForm;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      // Handle submission (e.g. API call or email service)
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
