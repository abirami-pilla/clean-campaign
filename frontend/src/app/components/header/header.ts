import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class HeaderComponent {
  dropdownOpen = false;

  admin = {
    name: 'John Doe',
    phone: '+91 9876543210',
    email: 'admin@cleanbeach.org'
  };
}
