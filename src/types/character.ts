/**
 * Core character types for D&D 5e (2024 revision)
 */

export type AbilityName = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';

export interface AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export type SkillName =
  | 'acrobatics' | 'animalHandling' | 'arcana' | 'athletics'
  | 'deception' | 'history' | 'insight' | 'intimidation'
  | 'investigation' | 'medicine' | 'nature' | 'perception'
  | 'performance' | 'persuasion' | 'religion' | 'sleightOfHand'
  | 'stealth' | 'survival';

export interface SkillProficiency {
  skill: SkillName;
  proficient: boolean;
  expertise: boolean;
}

export type DieSize = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';

export interface HitPoints {
  maximum: number;
  current: number;
  temporary: number;
}

export interface DeathSaves {
  successes: number;
  failures: number;
}

export interface ClassLevel {
  className: string;
  subclass?: string;
  level: number;
  hitDie: DieSize;
}

export interface Character {
  id: string;
  name: string;
  species: string;  // 2024 PHB uses "species" instead of "race"
  background: string;
  alignment?: string;

  classes: ClassLevel[];
  totalLevel: number;
  experiencePoints: number;

  abilityScores: AbilityScores;
  savingThrowProficiencies: AbilityName[];
  skillProficiencies: SkillProficiency[];

  hitPoints: HitPoints;
  hitDice: { die: DieSize; total: number; used: number }[];
  deathSaves: DeathSaves;

  armorClass: number;
  initiative: number;
  speed: number;

  proficiencyBonus: number;

  features: CharacterFeature[];
  equipment: EquipmentItem[];
  currency: Currency;

  spellcasting?: SpellcastingInfo;

  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CharacterFeature {
  name: string;
  source: string;  // e.g., "Fighter 1", "Human", "Soldier Background"
  description: string;
  usesPerRest?: {
    uses: number;
    maxUses: number;
    restType: 'short' | 'long';
  };
}

export interface EquipmentItem {
  name: string;
  quantity: number;
  weight?: number;
  equipped: boolean;
  description?: string;
  properties?: string[];
}

export interface Currency {
  copper: number;
  silver: number;
  electrum: number;
  gold: number;
  platinum: number;
}

export interface SpellcastingInfo {
  spellcastingClass: string;
  spellcastingAbility: AbilityName;
  spellSaveDC: number;
  spellAttackBonus: number;
  spellSlots: SpellSlots;
  knownSpells: Spell[];
  preparedSpells: string[];  // spell IDs
  cantripsKnown: Spell[];
}

export interface SpellSlots {
  level1: { total: number; used: number };
  level2: { total: number; used: number };
  level3: { total: number; used: number };
  level4: { total: number; used: number };
  level5: { total: number; used: number };
  level6: { total: number; used: number };
  level7: { total: number; used: number };
  level8: { total: number; used: number };
  level9: { total: number; used: number };
}

export interface Spell {
  id: string;
  name: string;
  level: number;  // 0 for cantrips
  school: SpellSchool;
  castingTime: string;
  range: string;
  components: {
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    materialDescription?: string;
  };
  duration: string;
  concentration: boolean;
  ritual: boolean;
  description: string;
}

export type SpellSchool =
  | 'abjuration' | 'conjuration' | 'divination' | 'enchantment'
  | 'evocation' | 'illusion' | 'necromancy' | 'transmutation';
