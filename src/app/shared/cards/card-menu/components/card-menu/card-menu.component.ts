import { Component,Input } from '@angular/core';
import { CharacterInterface } from 'src/app/core/interfaces/characters/character.interface';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent {
  @Input() dataCard:CharacterInterface;

  constructor(){
    this.dataCard = {
      id: 0,
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: {
        name: '',
        url: ''
      },
      location: {
        name: '',
        url: ''
      },
      image: '',
      episode: [],
      url: '',
      created: ''
    };
  }
}
