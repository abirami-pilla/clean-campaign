import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.html',
  styleUrls: ['./registration.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule] // ✅ important for formGroup & directives
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(10), Validators.max(100)]],
      occupation: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    console.log('Form Submitted', this.registrationForm.value);
    alert('Thank you for registering!');

    // Reset form after submission
    this.registrationForm.reset();
    this.submitted = false;
  }
}
