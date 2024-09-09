import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  template: `
  <h1>Angular Services</h1>
  <div class="card-container">
  <app-card *ngFor="let index of cardIndices" [indexPerson]="index"></app-card>
  </div>
  <!-- <div style="display: flex;flex-direction: row;">
  <app-card [indexPerson]="1"></app-card>
  <app-card [indexPerson]="2"></app-card>
  <app-card [indexPerson]="3"></app-card>
  <app-card [indexPerson]="4"></app-card>
  <app-card [indexPerson]="5"></app-card>
  <app-card [indexPerson]="6"></app-card>
  <app-card [indexPerson]="7"></app-card>
  <app-card [indexPerson]="8"></app-card>
  <app-card [indexPerson]="9"></app-card>
  </div> -->
  <router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-services';
  cardIndices = Array.from({ length: 20 }, (_, i) => i + 1);
}
