import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-compendium',
  templateUrl: './compendium.component.html',
  styleUrls: ['./compendium.component.css']
})
export class CompendiumComponent implements OnInit {
  selectedItem?: Item;
  character?: Character;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    this.characterService.getCharacter(1)
      .subscribe(character => this.character = character);
  }

  setCurrentItem(item: Item): void {
    this.selectedItem = item;
  }
}
