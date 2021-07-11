import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interfaces/item';
import { Character } from '../character';


@Component({
  selector: 'app-center-pane',
  templateUrl: './center-pane.component.html',
  styleUrls: ['./center-pane.component.css']
})
export class CenterPaneComponent implements OnInit {
  selectedPage: number = 1;

  damageValue: number = 10;

  @Input() currentItem?: Item;
  @Input() character?: Character;

  constructor() { }

  ngOnInit(): void {
  }

  onPageTurn(newPage: number): void {
    this.selectedPage = newPage;
  }

  onEquip(): void {
    if (this.character) {
      switch (this.currentItem?.itemType) {
        case "ARMOR":
          if (!this.isEquipped()) {
            this.character.equipment.armors.push(this.currentItem.id);
          }
          break;
        case "ART":
          if (!this.isEquipped()) {
            this.character.equipment.arts.push(this.currentItem.id);
          }
          break;
        case "DESTINY":
          if (!this.isEquipped()) {
            this.character.equipment.destinys.push(this.currentItem.id);
          }
          break;
        case "FEAT":
          if (!this.isEquipped()) {
            this.character.equipment.feats.push(this.currentItem.id);
          }
          break;
        case "JUNK":
          if (!this.isEquipped()) {
            this.character.equipment.junks.push(this.currentItem.id);
          }
          break;
        case "RING":
          if (!this.isEquipped()) {
            this.character.equipment.rings.push(this.currentItem.id);
          }
          break;
        case "SPELL":
          if (!this.isEquipped()) {
            this.character.equipment.spells.push(this.currentItem.id);
          }
          break;
        case "TOOL":
          if (!this.isEquipped()) {
            this.character.equipment.tools.push(this.currentItem.id);
          }
          break;
        case "WEAPON":
          if (!this.isEquipped()) {
            this.character.equipment.weapons.push(this.currentItem.id);
          }
          break;
      }
    }
  }

  onUnequip(): void {
    if (this.character) {
      switch (this.currentItem?.itemType) {
        case "ARMOR":
          if (this.isEquipped()) {
            let index = this.character.equipment.armors.indexOf(this.currentItem.id);
            if (index > -1) {
              this.character.equipment.armors.splice(index, 1);
            }
          }
          break;
        case "ART":
          if (this.isEquipped()) {
            let index = this.character.equipment.arts.indexOf(this.currentItem.id);
            if (index > -1) {
              this.character.equipment.arts.splice(index, 1);
            }
          }
          break;
        case "DESTINY":
          if (this.isEquipped()) {
            let index = this.character.equipment.destinys.indexOf(this.currentItem.id);
            if (index > -1) {
              this.character.equipment.destinys.splice(index, 1);
            }
          }
          break;
        case "FEAT":
          if (this.isEquipped()) {
            let index = this.character.equipment.feats.indexOf(this.currentItem.id);
            if (index > -1) {
              this.character.equipment.feats.splice(index, 1);
            }
          }
          break;
        case "JUNK":
          if (this.isEquipped()) {
            let index = this.character.equipment.junks.indexOf(this.currentItem.id);
            if (index > -1) {
              this.character.equipment.junks.splice(index, 1);
            }
          }
          break;
        case "RING":
          if (this.isEquipped()) {
            let index = this.character.equipment.rings.indexOf(this.currentItem.id);
            if (index > -1) {
              this.character.equipment.rings.splice(index, 1);
            }
          }
          break;
        case "SPELL":
          if (this.isEquipped()) {
            let index = this.character.equipment.spells.indexOf(this.currentItem.id);
            if (index > -1) {
              this.character.equipment.spells.splice(index, 1);
            }
          }
          break;
        case "TOOL":
          if (this.isEquipped()) {
            let index = this.character.equipment.tools.indexOf(this.currentItem.id);
            if (index > -1) {
              this.character.equipment.tools.splice(index, 1);
            }
          }
          break;
        case "WEAPON":
          if (this.isEquipped()) {
            let index = this.character.equipment.weapons.indexOf(this.currentItem.id);
            if (index > -1) {
              this.character.equipment.weapons.splice(index, 1);
            }
          }
          break;
      }
    }
  }

  isEquipped(): boolean {
    if (this.character) {
      switch (this.currentItem?.itemType) {
        case "ARMOR":
          return this.character.equipment.armors.includes(this.currentItem?.id);
        case "ART":
          return this.character.equipment.arts.includes(this.currentItem?.id);
        case "DESTINY":
          return this.character.equipment.destinys.includes(this.currentItem?.id);
        case "FEAT":
          return this.character.equipment.feats.includes(this.currentItem?.id);
        case "JUNK":
          return this.character.equipment.junks.includes(this.currentItem?.id);
        case "RING":
          return this.character.equipment.rings.includes(this.currentItem?.id);
        case "SPELL":
          return this.character.equipment.spells.includes(this.currentItem?.id);
        case "TOOL":
          return this.character.equipment.tools.includes(this.currentItem?.id);
        case "WEAPON":
          return this.character.equipment.weapons.includes(this.currentItem?.id);
      }
    }
    return false;
  }

  onQuantityChange(amount: number): void {
    if (this.character) {
      let quantity = 0;
      switch (this.currentItem?.itemType) {
        case "ARMOR":
          quantity = this.character.inventory.armors[this.currentItem.id] ?
            this.character.inventory.armors[this.currentItem.id] :
            0;
          this.character.inventory.armors[this.currentItem.id] = (quantity + amount) >= 0 ? (quantity + amount) : 0;
          break;
        case "ART":
          quantity = this.character.inventory.arts[this.currentItem.id] ?
            this.character.inventory.arts[this.currentItem.id] :
            0;
          this.character.inventory.arts[this.currentItem.id] = (quantity + amount) >= 0 ? (quantity + amount) : 0;
          break;
        case "DESTINY":
          quantity = this.character.inventory.destinys[this.currentItem.id] ?
            this.character.inventory.destinys[this.currentItem.id] :
            0;
          this.character.inventory.destinys[this.currentItem.id] = (quantity + amount) >= 0 ? (quantity + amount) : 0;
          break;
        case "FEAT":
          quantity = this.character.inventory.feats[this.currentItem.id] ?
            this.character.inventory.feats[this.currentItem.id] :
            0;
          this.character.inventory.feats[this.currentItem.id] = (quantity + amount) >= 0 ? (quantity + amount) : 0;
          break;
        case "JUNK":
          quantity = this.character.inventory.junks[this.currentItem.id] ?
            this.character.inventory.junks[this.currentItem.id] :
            0;
          this.character.inventory.junks[this.currentItem.id] = (quantity + amount) >= 0 ? (quantity + amount) : 0;
          break;
        case "RING":
          quantity = this.character.inventory.rings[this.currentItem.id] ?
            this.character.inventory.rings[this.currentItem.id] :
            0;
          this.character.inventory.rings[this.currentItem.id] = (quantity + amount) >= 0 ? (quantity + amount) : 0;
          break;
        case "SPELL":
          quantity = this.character.inventory.spells[this.currentItem.id] ?
            this.character.inventory.spells[this.currentItem.id] :
            0;
          this.character.inventory.spells[this.currentItem.id] = (quantity + amount) >= 0 ? (quantity + amount) : 0;
          break;
        case "TOOL":
          quantity = this.character.inventory.tools[this.currentItem.id] ?
            this.character.inventory.tools[this.currentItem.id] :
            0;
          this.character.inventory.tools[this.currentItem.id] = (quantity + amount) >= 0 ? (quantity + amount) : 0;
          break;
        case "WEAPON":
          quantity = this.character.inventory.weapons[this.currentItem.id] ?
            this.character.inventory.weapons[this.currentItem.id] :
            0;
          this.character.inventory.weapons[this.currentItem.id] = (quantity + amount) >= 0 ? (quantity + amount) : 0;
          break;
      }
      if (!((quantity + amount) > 0)) { this.onUnequip(); }
    }
  }

  onConditionChange(condition: string): void {
    if (this.character) {
      switch (condition) {
        case "BLEED":
          this.character.bleed.current = this.character.bleed.current >= this.character.getTotal("bleed") ? 0 : this.character.bleed.current + 1;
          break;
        case "POISON":
          this.character.poison.current = this.character.poison.current >= this.character.getTotal("poison") ? 0 : this.character.poison.current + 1;
          break;
        case "TOXIC":
          this.character.toxic.current = this.character.toxic.current >= this.character.getTotal("toxic") ? 0 : this.character.toxic.current + 1;
          break;
        case "FROSTBITE":
          this.character.frostbite.current = this.character.frostbite.current >= this.character.getTotal("frostbite") ? 0 : this.character.frostbite.current + 1;
          break;
        case "CURSE":
          this.character.curse.current = this.character.curse.current >= this.character.getTotal("curse") ? 0 : this.character.curse.current + 1;
          break;
      }
    }
  }

  getItemQuantity(): number {
    switch (this.currentItem?.itemType) {
      case "ARMOR":
        return this.character?.inventory.armors[this.currentItem.id] ? this.character?.inventory.armors[this.currentItem.id] : 0;
      case "ART":
        return this.character?.inventory.arts[this.currentItem.id] ? this.character?.inventory.arts[this.currentItem.id] : 0;
      case "DESTINY":
        return this.character?.inventory.destinys[this.currentItem.id] ? this.character?.inventory.destinys[this.currentItem.id] : 0;
      case "FEAT":
        return this.character?.inventory.feats[this.currentItem.id] ? this.character?.inventory.feats[this.currentItem.id] : 0;
      case "JUNK":
        return this.character?.inventory.junks[this.currentItem.id] ? this.character?.inventory.junks[this.currentItem.id] : 0;
      case "RING":
        return this.character?.inventory.rings[this.currentItem.id] ? this.character?.inventory.rings[this.currentItem.id] : 0;
      case "SPELL":
        return this.character?.inventory.spells[this.currentItem.id] ? this.character?.inventory.spells[this.currentItem.id] : 0;
      case "TOOL":
        return this.character?.inventory.tools[this.currentItem.id] ? this.character?.inventory.tools[this.currentItem.id] : 0;
      case "WEAPON":
        return this.character?.inventory.weapons[this.currentItem.id] ? this.character?.inventory.weapons[this.currentItem.id] : 0;
      default:
        return 0;
    }
  }

  getDamage(dmgType: string): number {
    let result = this.damageValue;
    let guard = 0;
    if (this.character) {
      switch (dmgType) {
        case "PHYSICAL":
          guard = Number(this.character.armorPhysical);
          break;
        case "MAGIC":
          guard = Number(this.character.armorMagic);
          break;
        case "FIRE":
          guard = Number(this.character.armorFire);
          break;
        case "LIGHTNING":
          guard = Number(this.character.armorLightning);
          break;
        case "DARK":
          guard = Number(this.character.armorDark);
          break;
      }
    }
    switch (guard) {
      case 1:
        result -= (Math.floor(this.damageValue * 0.1) + 1);
        break;
      case 2:
        result -= (Math.floor(this.damageValue * 0.2) + 2);
        break;
      case 3:
        result -= (Math.floor(this.damageValue * 0.3) + 3);
        break;
      case 4:
        result -= (Math.floor(this.damageValue * 0.3) + 4);
        break;
      case 5:
        result -= (Math.floor(this.damageValue * 0.3) + 5);
        break;
    }
    return result > 0 ? result : 0;
  }
}
