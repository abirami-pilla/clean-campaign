import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../../services/registeration';
import { User } from '../../models/user.model';
import { CampaignOption } from '../../models/campagin-option.model';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.css']
})
export class RegistrationComponent implements OnInit {
  userRegistration: User = {
    name: '',
    email: '',
    location: '',
    campaignName: ''
  };

  campaignOptions: CampaignOption[] = [];
  isSubmitting = false;
  showSuccess = false;
  formErrors: { [key: string]: string } = {};

  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {
    this.campaignOptions = this.registrationService.getCampaignOptions();
  }

  validateForm(): boolean {
    this.formErrors = {};
    let isValid = true;

    // Name validation
    if (!this.userRegistration.name || this.userRegistration.name.trim().length < 2) {
      this.formErrors['name'] = 'Name must be at least 2 characters long';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.userRegistration.email || !emailRegex.test(this.userRegistration.email)) {
      this.formErrors['email'] = 'Please enter a valid email address';
      isValid = false;
    }

    // Location validation
    if (!this.userRegistration.location || this.userRegistration.location.trim().length < 2) {
      this.formErrors['location'] = 'Location must be at least 2 characters long';
      isValid = false;
    }

    // Campaign validation
    if (!this.userRegistration.campaignName) {
      this.formErrors['campaignName'] = 'Please select a campaign';
      isValid = false;
    }

    return isValid;
  }

  onSubmit() {
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.showSuccess = false;

    this.registrationService.registerUser(this.userRegistration).subscribe({
      next: (success) => {
        if (success) {
          this.showSuccess = true;
          this.resetForm();
        }
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.isSubmitting = false;
      }
    });
  }

  resetForm() {
    this.userRegistration = {
      name: '',
      email: '',
      location: '',
      campaignName: ''
    };
    this.formErrors = {};
  }

  getSelectedCampaign(): CampaignOption | undefined {
    return this.campaignOptions.find(option => option.value === this.userRegistration.campaignName);
  }

  hasError(field: string): boolean {
    return !!this.formErrors[field];
  }

  getError(field: string): string {
    return this.formErrors[field] || '';
  }
}