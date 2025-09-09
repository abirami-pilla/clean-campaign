import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { CampaignOption } from '../models/campagin-option.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registrationsSubject = new BehaviorSubject<User[]>([]);
  public registrations$ = this.registrationsSubject.asObservable();

  private campaignOptions: CampaignOption[] = [
    {
      value: 'ocean-guardian',
      label: 'Ocean Guardian Initiative',
      description: 'Clean and protect our beautiful beaches'
    },
    {
      value: 'green-spaces-revival',
      label: 'Green Spaces Revival',
      description: 'Restore and maintain our community parks'
    },
    {
      value: 'railway-renaissance',
      label: 'Railway Renaissance',
      description: 'Keep our train tracks clean and safe'
    },
    {
      value: 'river-restoration',
      label: 'River Restoration Project',
      description: 'Preserve and clean our waterways'
    },
    {
      value: 'urban-clean-sweep',
      label: 'Urban Clean Sweep',
      description: 'Community-wide cleaning initiative'
    }
  ];

  getCampaignOptions(): CampaignOption[] {
    return this.campaignOptions;
  }

  registerUser(registration: User): Observable<boolean> {
    return new Observable(observer => {
      // Simulate API call
      setTimeout(() => {
        const newRegistration: User= {
          ...registration,
          id: this.generateId(),
          dateRegistered: new Date()
        };
        
        const currentRegistrations = this.registrationsSubject.value;
        this.registrationsSubject.next([...currentRegistrations, newRegistration]);
        
        observer.next(true);
        observer.complete();
      }, 1000);
    });
  }

  getRegistrations(): Observable<User[]> {
    return this.registrations$;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}