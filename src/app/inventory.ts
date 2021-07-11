import { Armor } from "./interfaces/armor";
import { Art } from "./interfaces/art";
import { Destiny } from "./interfaces/destiny";
import { Feat } from "./interfaces/feat";
import { Junk } from "./interfaces/junk";
import { Ring } from "./interfaces/ring";
import { Spell } from "./interfaces/spell";
import { Tool } from "./interfaces/tool";
import { Weapon } from "./interfaces/weapon";

export class Inventory {
    armors: number[] = [];
    arts: number[] = [];
    destinys: number[] = [];
    feats: number[] = [];
    junks: number[] = [];
    rings: number[] = [];
    spells: number[] = [];
    tools: number[] = [];
    weapons: number[] = [];

    constructor() {}
}

export class Equipment {
    armors: number[] = [];
    arts: number[] = [];
    destinys: number[] = [];
    feats: number[] = [];
    junks: number[] = [];
    rings: number[] = [];
    spells: number[] = [];
    tools: number[] = [];
    weapons: number[] = [];
    constructor() {}
}