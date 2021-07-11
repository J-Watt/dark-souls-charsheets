import { Equipment, Inventory } from "./inventory";

export class Character {

  // DETAILS
  // id?: number;
  id: number = 0;
  player?: string = "";
  name?: string = "";
  gender?: string = "";
  starterClass?: string = "";
  race?: string = "";
  hollowing: number = 0;
  level: number = 1;
  souls: number = 0;
  fate: number = 0;

  // ATTRIBUTES
  vitality: Attribute = new Attribute();
  endurance: Attribute = new Attribute();
  strength: Attribute = new Attribute();
  dexterity: Attribute = new Attribute();
  attunement: Attribute = new Attribute();
  intelligence: Attribute = new Attribute();
  faith: Attribute = new Attribute();

  // SKILLS
  athletics: Attribute = new Attribute();
  acrobatics: Attribute = new Attribute();
  perception: Attribute = new Attribute();
  fireKeeping: Attribute = new Attribute();
  sanity: Attribute = new Attribute();
  stealth: Attribute = new Attribute();
  precision: Attribute = new Attribute();
  diplomacy: Attribute = new Attribute();
  knowledgeMonsters: Attribute = new Attribute();
  knowledgeMagic: Attribute = new Attribute();
  knowledgeHistory: Attribute = new Attribute();
  knowledgeCosmic: Attribute = new Attribute();
  spellSlots: Attribute = new Attribute();

  // STATS
  hp: Attribute = new Attribute();
  ap: Attribute = new Attribute();
  fp: Attribute = new Attribute();
  curse: Attribute = new Attribute();
  frostbite: Attribute = new Attribute();
  bleed: Attribute = new Attribute();
  poison: Attribute = new Attribute();
  toxic: Attribute = new Attribute();
  armorPhysical: number = 0;
  armorMagic: number = 1;
  armorFire: number = 2;
  armorLightning: number = 3;
  armorDark: number = 4;
  flaskLevel: number = 0;
  dodge: string = "3 AP | 4 AC";

  // PROFICIENCIES
  profShield: number = 0;
  profSpear: number = 0;
  profDagger: number = 0;
  profHammer: number = 0;
  profSword: number = 0;
  profGreatSword: number = 0;
  profReaper: number = 0;
  profAxe: number = 0;
  profFist: number = 0;
  profBow: number = 0;
  profHalberd: number = 0;
  profSorcery: number = 0;
  profMiracles: number = 0;
  profPyromancy: number = 0;
  profHexes: number = 0;
  profDual: number = 0;

  // INVENTORY & EQUIPMENT
  inventory: Inventory = new Inventory();
  equipment: Equipment = new Equipment();

  constructor() { }

  getSoulsNeeded(): number {
    return ((Number(this.level) + 1) * 10);
  }

  getEstusHp(): string {
    return String((this.flaskLevel * 15) + 15);
  }

  getEstusFp(): string {
    return String((this.flaskLevel * 2) + 5);
  }

  getArmorDisplay(armor: number): string {
    switch (Number(armor)) {
      case 1:
        return "10% +1";
      case 2:
        return "20% +2";
      case 3:
        return "30% +3";
      case 4:
        return "30% +4";
      case 5:
        return "30% +5";
      default:
        return "-"
    }
  }

  getTotal(attribute: string): number {
    switch (attribute) {
      case "vitality":
        return (Number(this.vitality.value) + Number(this.vitality.modifier));
      case "endurance":
        return (Number(this.endurance.value) + Number(this.endurance.modifier));
      case "strength":
        return (Number(this.strength.value) + Number(this.strength.modifier));
      case "dexterity":
        return (Number(this.dexterity.value) + Number(this.dexterity.modifier));
      case "attunement":
        return (Number(this.attunement.value) + Number(this.attunement.modifier));
      case "intelligence":
        return (Number(this.intelligence.value) + Number(this.intelligence.modifier));
      case "faith":
        return (Number(this.faith.value) + Number(this.faith.modifier));
      case "athletics":
        return (this.getAttributeModifier("endurance") + this.getAttributeModifier("strength") + Number(this.athletics.modifier));
      case "acrobatics":
        return (this.getAttributeModifier("endurance") + this.getAttributeModifier("dexterity") + Number(this.acrobatics.modifier));
      case "perception":
        return (this.getAttributeModifier("endurance") + this.getAttributeModifier("intelligence") + Number(this.perception.modifier));
      case "fireKeeping":
        return (this.getAttributeModifier("endurance") + this.getAttributeModifier("faith") + Number(this.fireKeeping.modifier));
      case "sanity":
        return (this.getAttributeModifier("attunement") + this.getAttributeModifier("strength") + Number(this.sanity.modifier));
      case "stealth":
        return (this.getAttributeModifier("attunement") + this.getAttributeModifier("dexterity") + Number(this.stealth.modifier));
      case "precision":
        return (this.getAttributeModifier("attunement") + this.getAttributeModifier("intelligence") + Number(this.precision.modifier));
      case "diplomacy":
        return (this.getAttributeModifier("attunement") + this.getAttributeModifier("faith")+ Number(this.diplomacy.modifier));
      case "knowledgeMonsters":
        return (Number(this.knowledgeMonsters.value) + Number(this.knowledgeMonsters.modifier));
      case "knowledgeMagic":
        return (Number(this.knowledgeMagic.value) + Number(this.knowledgeMagic.modifier));
      case "knowledgeHistory":
        return (Number(this.knowledgeHistory.value) + Number(this.knowledgeHistory.modifier));
      case "knowledgeCosmic":
        return (Number(this.knowledgeCosmic.value) + Number(this.knowledgeCosmic.modifier));
      case "spellSlots":
        return (Number(this.spellSlots.value) + Number(this.spellSlots.modifier));
      case "hp":
        return (Number(this.hp.value) + Number(this.hp.modifier));
      case "ap":
        return (Number(this.ap.value) + Number(this.ap.modifier));
      case "fp":
        return (Number(this.fp.value) + Number(this.fp.modifier));
      case "curse":
        return (Number(this.curse.value) + Number(this.curse.modifier));
      case "frostbite":
        return (Number(this.frostbite.value) + Number(this.frostbite.modifier));
      case "bleed":
        return (Number(this.bleed.value) + Number(this.bleed.modifier));
      case "toxic":
        return (Number(this.toxic.value) + Number(this.toxic.modifier));
      case "poison":
        return (Number(this.poison.value) + Number(this.poison.modifier));
      default:
        return 0;
    }
  }

  getAttributeModifier(stat: string): number {
    switch (stat) {
      case "vitality":
        return Math.floor((this.getTotal(stat) - 10) / 2);
      case "endurance":
        return Math.floor((this.getTotal(stat) - 10) / 2);
      case "strength":
        return Math.floor((this.getTotal(stat) - 10) / 2);
      case "dexterity":
        return Math.floor((this.getTotal(stat) - 10) / 2);
      case "attunement":
        return Math.floor((this.getTotal(stat) - 10) / 2);
      case "intelligence":
        return Math.floor((this.getTotal(stat) - 10) / 2);
      case "faith":
        return Math.floor((this.getTotal(stat) - 10) / 2);
      default:
        return 0;
    }
  }

  getBarPercent(bar: string): number {
    let result = 100;
    switch (bar) {
      case "hp":
        result = Math.min(Math.floor((this.hp.current / this.getTotal("hp") ) * 100), 100);
        break;
      case "ap":
        result = Math.min(Math.floor((this.ap.current / this.getTotal("ap") ) * 100), 100);
        break;
      case "fp":
        result = Math.min(Math.floor((this.fp.current / this.getTotal("fp") ) * 100), 100);
        break;
    }
    return result;
  }

}

export class Attribute {
  value: number = 1;
  modifier: number = 2;
  current: number = 0;

  constructor() { }

}