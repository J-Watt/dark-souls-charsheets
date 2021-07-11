import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Compendium } from '../compendium';
import { Item } from '../interfaces/item';
import { Armor } from '../interfaces/armor';
import { Categories } from '../compendium';
import { Character } from '../character';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})
export class LeftPaneComponent implements OnInit {
  compendium = new Compendium();

  selectedNav: string = "weapons";
  selectedFilter: string = "";
  
  @Input() selectedItem?: Item;
  @Input() character?: Character;
  @Output() currentItem = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectNav(select: string): void {
    this.selectedNav = select;
    this.selectedFilter = this.getFilters(select).find(fil => fil == this.selectedFilter) ? this.selectedFilter : "";
  }

  onSelectItem(select: Item): void {
    this.selectedItem = select;
    this.currentItem.emit(select);
  }

  onSelectFilter(select: string): void {
    if (this.selectedFilter == select) {
      this.selectedFilter = "";
    } else {
      this.selectedFilter = select;
    }
  }

  getTitle(): string {
    return this.compendium.categories[this.selectedNav as keyof Categories];
  }

  getEquipped(itemType: string): Item[] {
    switch (itemType) {
      case "ARMOR":
        return this.compendium.armors.filter(item => this.character?.inventory.armors[item.id] && this.character.equipment.armors.includes(item.id));
      case "ART":
        return this.compendium.arts.filter(item => this.character?.inventory.arts[item.id] && this.character.equipment.arts.includes(item.id));
      case "DESTINY":
        return this.compendium.destinys.filter(item => this.character?.inventory.destinys[item.id] && this.character.equipment.destinys.includes(item.id));
      case "FEAT":
        return this.compendium.feats.filter(item => this.character?.inventory.feats[item.id] && this.character.equipment.feats.includes(item.id));
      case "JUNK":
        return this.compendium.junks.filter(item => this.character?.inventory.junks[item.id] && this.character.equipment.junks.includes(item.id));
      case "RING":
        return this.compendium.rings.filter(item => this.character?.inventory.rings[item.id] && this.character.equipment.rings.includes(item.id));
      case "SPELL":
        return this.compendium.spells.filter(item => this.character?.inventory.spells[item.id] && this.character.equipment.spells.includes(item.id));
      case "TOOL":
        return this.compendium.tools.filter(item => this.character?.inventory.tools[item.id] && this.character.equipment.tools.includes(item.id));
      case "WEAPON":
        return this.compendium.weapons.filter(item => this.character?.inventory.weapons[item.id] && this.character.equipment.weapons.includes(item.id));
      default:
        return [];
    }
  }

  isEquipped(itemType: string, id: number): boolean {
    if (this.character) {
      switch (itemType) {
        case "ARMOR":
           return this.character.equipment.armors.includes(id);
        case "ART":
          return this.character.equipment.arts.includes(id);
        case "DESTINY":
          return this.character.equipment.destinys.includes(id);
        case "FEAT":
          return this.character.equipment.feats.includes(id);
        case "JUNK":
          return this.character.equipment.junks.includes(id);
        case "RING":
          return this.character.equipment.rings.includes(id);
        case "SPELL":
          return this.character.equipment.spells.includes(id);
        case "TOOL":
          return this.character.equipment.tools.includes(id);
        case "WEAPON":
          return this.character.equipment.weapons.includes(id);
      }
    }
    return false;
  }

  getItemQuantity(itemType: string, id: number): number {
    let quantity = 0;
    switch (itemType) {
      case "ARMOR":
        quantity = this.character?.inventory.armors[id] ? this.character?.inventory.armors[id] : 0;
        break;
      case "ART":
        quantity = this.character?.inventory.arts[id] ? this.character?.inventory.arts[id] : 0;
        break;
      case "DESTINY":
        quantity = this.character?.inventory.destinys[id] ? this.character?.inventory.destinys[id] : 0;
        break;
      case "FEAT":
        quantity = this.character?.inventory.feats[id] ? this.character?.inventory.feats[id] : 0;
        break;
      case "JUNK":
        quantity = this.character?.inventory.junks[id] ? this.character?.inventory.junks[id] : 0;
        break;
      case "RING":
        quantity = this.character?.inventory.rings[id] ? this.character?.inventory.rings[id] : 0;
        break;
      case "SPELL":
        quantity = this.character?.inventory.spells[id] ? this.character?.inventory.spells[id] : 0;
        break;
      case "TOOL":
        quantity = this.character?.inventory.tools[id] ? this.character?.inventory.tools[id] : 0;
        break;
      case "WEAPON":
        quantity = this.character?.inventory.weapons[id] ? this.character?.inventory.weapons[id] : 0;
        break;
    }
    return quantity;
  }

  getInventory(cat: string): Item[] {
    switch (cat) {
      case "armors":
        return this.compendium.armors.filter(item => this.character?.inventory.armors[item.id]);
      case "arts":
        return this.compendium.arts.filter(item => this.character?.inventory.arts[item.id]);
      case "destinys":
        return this.compendium.destinys.filter(item => this.character?.inventory.destinys[item.id]);
      case "feats":
        return this.compendium.feats.filter(item => this.character?.inventory.feats[item.id]);
      case "items":
        return this.compendium.junks.filter(item => this.character?.inventory.junks[item.id]);
      case "rings":
        return this.compendium.rings.filter(item => this.character?.inventory.rings[item.id]);
      case "spells":
        return this.compendium.spells.filter(item => this.character?.inventory.spells[item.id]);
      case "tools":
        return this.compendium.tools.filter(item => this.character?.inventory.tools[item.id]);
      case "weapons":
        return this.compendium.weapons.filter(item => this.character?.inventory.weapons[item.id]);
      default:
        return [];
    }
  }

  getCompendium(cat: string): Item[] {
    let result: Item[] = [];
    switch (cat) {
      case "armors":
        result = this.compendium.armors.filter(item => !this.character?.inventory.armors[item.id]);
        break;
      case "arts":
        result = this.compendium.arts.filter(item => !this.character?.inventory.arts[item.id]);
        break;
      case "destinys":
        result = this.compendium.destinys.filter(item => !this.character?.inventory.destinys[item.id]);
        break;
      case "feats":
        result = this.compendium.feats.filter(item => !this.character?.inventory.feats[item.id]);
        break;
      case "items":
        result = this.compendium.junks.filter(item => !this.character?.inventory.junks[item.id]);
        break;
      case "rings":
        result = this.compendium.rings.filter(item => !this.character?.inventory.rings[item.id]);
        break;
      case "spells":
        result = this.compendium.spells.filter(item => !this.character?.inventory.spells[item.id]);
        break;
      case "tools":
        result = this.compendium.tools.filter(item => !this.character?.inventory.tools[item.id]);
        break;
      case "weapons":
        result = this.compendium.weapons.filter(item => !this.character?.inventory.weapons[item.id]);
        break;
    }

    return this.selectedFilter ? result.filter(item => item.tags.find(i => i == this.selectedFilter)) : result;
  }

  getFilters(cat: string): string[] {
    let wepTypes = [
                    "Shield",
                    "Spear",
                    "Dagger",
                    "Hammer",
                    "Sword",
                    "Great Sword",
                    "Reaper",
                    "Axe",
                    "Fist",
                    "Bow",
                    "Halberd",
                    "Sorcery",
                    "Miracles",
                    "Pyromancy",
                    "Hexes",
                    "Dual"
                  ];

    switch (cat) {
      case "armors":
        return ["Light", "Medium", "Heavy"];
      case "arts":
        return wepTypes;
      case "destinys":
        return [];
      case "feats":
        return wepTypes;
      case "items":
        return [];
      case "rings":
        return [];
      case "spells":
        return ["Sorcery", "Miracles", "Pyromancy", "Hexes"];
      case "tools":
        return [];
      case "weapons":
        return wepTypes;
      default:
        return [];
    }
  }

}
