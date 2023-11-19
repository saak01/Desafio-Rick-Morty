import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiRequesteInterface } from 'src/app/core/interfaces/api-request/api-request.interface';
import { CharacterInterface } from 'src/app/core/interfaces/characters/character.interface';
import { ListCharactersService } from 'src/app/core/services/characters/list-characters/list-characters.service';

@Component({
  selector: 'app-list-charecters-root',
  templateUrl: './list-charecters-root.component.html',
  styleUrls: ['./list-charecters-root.component.scss']
})
export class ListCharectersRootComponent implements OnInit{

  mockData = Array.from({length:20});

  listCharacters: Array<CharacterInterface> = [];

  listFilteredCharacters: Array<CharacterInterface> = [];

  isLoading: boolean = true;


  constructor(private listCharacterService: ListCharactersService){}


  ngOnInit(): void {
    firstValueFrom<ApiRequesteInterface>(this.listCharacterService.getCharacters())
      .then((data) => {
        this.listCharacters = data.results;
        this.listFilteredCharacters = data.results
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      })
      .catch((err) => console.log(err));
  }

  onInputChange(event: any) {
    const search = (event.target as HTMLInputElement).value;
    this.listFilteredCharacters = this.listCharacters.filter((character: CharacterInterface) => {
      const characterName = character.name.toLowerCase();
      return characterName.includes(search.toLowerCase());
    });
  }

  onScrollDown(){
    console.log('teste');
  }



}
