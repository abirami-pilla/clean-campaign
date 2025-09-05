import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { name: 'Facebook', url: '#', iconClass: 'fab fa-facebook-f' },
    { name: 'Twitter', url: '#', iconClass: 'fab fa-twitter' },
    { name: 'Instagram', url: '#', iconClass: 'fab fa-instagram' },
    { name: 'LinkedIn', url: '#', iconClass: 'fab fa-linkedin-in' }
  ];

  quickLinks = [
    { name: 'About Us', url: '#' },
    { name: 'Our Campaigns', url: '#' },
    { name: 'Get Involved', url: '#' },
    { name: 'Contact', url: '#' }
  ];
}