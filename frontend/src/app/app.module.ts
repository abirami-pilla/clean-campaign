import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { HomeComponent } from './components/home/home';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <app-footer></app-footer>
  `,
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HomeComponent]
})
export class AppComponent {}
