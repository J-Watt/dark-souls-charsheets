import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Item } from '../interfaces/item';
import { Inventory } from '../inventory';

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
    
    this.characterService.airtableTest()
    .subscribe(data => {console.log("=========="); console.log(data)});

    let aInventory = new Inventory();

    aInventory.armors = [1,1,1];
    aInventory.arts = [1,1,1];
    aInventory.destinys = [1,1,1];
    aInventory.feats = [1,1,1];
    aInventory.junks = [1,1,1];
    aInventory.rings = [1,1,1];
    aInventory.spells = [1,1,1];
    aInventory.tools = [3,2,5];
    aInventory.weapons = [1,1,1];

    let astaroth = new Character();
    astaroth.id = 1;
    astaroth.name = "Astaroth";
    astaroth.player = "Jordan";
    astaroth.gender = "Male";
    astaroth.starterClass = "Sorcerer";
    astaroth.race = "Demonkind";
    astaroth.vitality.value = 10;
    astaroth.endurance.value = 10;
    astaroth.strength.value = 10;
    astaroth.dexterity.value = 10;
    astaroth.attunement.value = 10;
    astaroth.intelligence.value = 10;
    astaroth.faith.value = 10;
    astaroth.hp.value = 50;
    astaroth.hp.current = 50;
    astaroth.ap.value = 10;
    astaroth.ap.current = 10;
    astaroth.fp.value = 14;
    astaroth.fp.current = 14;
    astaroth.curse.value = 10;
    astaroth.frostbite.value = 10;
    astaroth.bleed.value = 10;
    astaroth.poison.value = 10;
    astaroth.toxic.value = 10;
    astaroth.profHexes = 10;
    astaroth.inventory = aInventory;

    // console.log(JSON.stringify(astaroth));
  }

  setCurrentItem(item: Item): void {
    this.selectedItem = item;
  }
}
