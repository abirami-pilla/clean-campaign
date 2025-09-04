import { Component } from '@angular/core';
import { RegistrationComponent } from "../registration/registration";

@Component({
  selector: 'app-home',
  imports: [RegistrationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class HomeComponent {

}
