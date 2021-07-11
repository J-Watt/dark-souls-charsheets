import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Character } from './character';
import { Inventory } from './inventory';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let aInventory = new Inventory();
    let dInventory = new Inventory();

    aInventory.armors = [1,1,1];
    aInventory.arts = [1,1,1];
    aInventory.destinys = [1,1,1];
    aInventory.feats = [1,1,1];
    aInventory.junks = [1,1,1];
    aInventory.rings = [1,1,1];
    aInventory.spells = [1,1,1];
    aInventory.tools = [3,2,5];
    aInventory.weapons = [1,1,1];

    dInventory.armors = [];
    dInventory.armors[3] = 1;
    dInventory.arts = [];
    dInventory.arts[3] = 1;
    dInventory.destinys = [];
    dInventory.destinys[3] = 1;
    dInventory.feats = [];
    dInventory.feats[3] = 1;
    dInventory.junks = [];
    dInventory.junks[3] = 1;
    dInventory.rings = [];
    dInventory.rings[3] = 1;
    dInventory.spells = [];
    dInventory.spells[3] = 1;
    dInventory.tools = [];
    dInventory.tools[3] = 1;
    dInventory.weapons = [];
    dInventory.weapons[3] = 1;

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

    let dasa = new Character();
    dasa.id = 2;
    dasa.name = "Dasa";
    dasa.player = "Paul";
    dasa.gender = "Male";
    dasa.starterClass = "Assassin";
    dasa.race = "Demonkind";
    dasa.vitality.value = 10;
    dasa.endurance.value = 10;
    dasa.strength.value = 10;
    dasa.dexterity.value = 10;
    dasa.attunement.value = 10;
    dasa.intelligence.value = 10;
    dasa.faith.value = 10;
    dasa.hp.value = 50;
    dasa.hp.current = 50;
    dasa.ap.value = 10;
    dasa.ap.current = 10;
    dasa.fp.value = 14;
    dasa.fp.current = 14;
    dasa.curse.value = 10;
    dasa.frostbite.value = 10;
    dasa.bleed.value = 10;
    dasa.poison.value = 10;
    dasa.toxic.value = 10;
    dasa.profSword = 10;
    dasa.inventory = dInventory;



    const characters = [
      astaroth,
      dasa
    ];
    return {characters};
  }

  // Overrides the genId method to ensure that a character always has an id.
  // If the characters array is empty,
  // the method below returns the initial number (11).
  // if the characters array is not empty, the method below returns the highest
  // character id + 1.
  genId(characters: Character[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11;
  }
}