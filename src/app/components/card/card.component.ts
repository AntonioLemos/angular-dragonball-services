import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonballService } from '../../services/dragonball.service';
import { mydata } from '../../Models/mydata';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() indexPerson: number = 1;
  cardData: mydata = {
    name: "",
    ki: "",
    maxKi: "",
    race: "",
    image: ""
  };

  constructor(private dragonballService: DragonballService) { }

  ngOnInit(): void {
     this.getCard(this.indexPerson);
  }

  getCard(cardIndex: number): void {
    this.dragonballService.getCard(cardIndex).subscribe({
      next: (data) => {
        this.cardData = data;
      },
      error: (error) => {
        console.error('Error fetching card data:', error);
      }
    });
  }

}
