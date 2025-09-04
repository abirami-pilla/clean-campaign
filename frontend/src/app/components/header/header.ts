import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  title = 'Clean Campaign Initiative';
  subtitle = 'Join the movement to make our environment cleaner and greener';
  
  currentDate = new Date();
}