import { Armor } from "./interfaces/armor";
import { Art } from "./interfaces/art";
import { Destiny } from "./interfaces/destiny";
import { Feat } from "./interfaces/feat";
import { Item } from "./interfaces/item";
import { Junk } from "./interfaces/junk";
import { Ring } from "./interfaces/ring";
import { Spell } from "./interfaces/spell";
import { Tool } from "./interfaces/tool";
import { Weapon } from "./interfaces/weapon";
import { ARMORS, ARTS, DESTINYS, FEATS, JUNKS, RINGS, SPELLS, TOOLS, WEAPONS } from "./mock-data";

export class Compendium {
    tools: Tool[] = [];
    weapons: Weapon[] = [];
    armors: Armor[] = [];
    rings: Ring[] = [];
    junks: Junk[] = [];
    spells: Spell[] = [];
    arts: Art[] = [];
    feats: Feat[] = [];
    destinys: Destiny[] = [];

    
    categories: Categories = {
        'status': "Status",
        'tools': "Tools",
        'weapons': "Weapons",
        'armors': "Armor",
        'rings': "Rings",
        'items': "Items",
        'spells': "Spells",
        'arts': "Weapon Arts",
        'feats': "Weapon Proficiency Feats",
        'destinys': "Feats Of Destiny"
      };

    constructor() {
        // Cleanup
        this.tools = TOOLS;
        this.weapons = WEAPONS;
        this.armors = ARMORS;
        this.rings = RINGS;
        this.junks = JUNKS;
        this.spells = SPELLS;
        this.arts = ARTS;
        this.feats = FEATS;
        this.destinys = DESTINYS;
        // Cleanup
    }

    getCategories(): string[] {
        return [
            'status',
            'tools',
            'weapons',
            'armors',
            'rings',
            'items',
            'spells',
            'arts',
            'feats',
            'destinys'
        ]
    }

    getCategory(category: string): Item[] {
        switch(category) {
            case "tools":
                return this.tools;
            case "weapons":
                return this.weapons;
            case "armors":
                return this.armors;
            case "rings":
                return this.rings;
            case "items":
                return this.junks;
            case "spells":
                return this.spells;
            case "arts":
                return this.arts;
            case "feats":
                return this.feats;
            case "destinys":
                return this.destinys;
            default:
                return this.tools;

        }
    }
}


export interface Categories {
    status: string;
    tools: string;
    weapons: string;
    armors: string;
    rings: string;
    items: string;
    spells: string;
    arts: string;
    feats: string;
    destinys: string;
  }