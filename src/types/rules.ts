/**
 * D&D 5e (2024) rules reference types
 */

import type { AbilityName, DieSize, SkillName } from './character.js';

export interface ClassDefinition {
  name: string;
  hitDie: DieSize;
  primaryAbility: AbilityName[];
  savingThrowProficiencies: AbilityName[];
  skillChoices: {
    choose: number;
    from: SkillName[];
  };
  armorProficiencies: string[];
  weaponProficiencies: string[];
  toolProficiencies: string[];
  startingEquipment: string[];
  features: ClassFeatureDefinition[];
  subclassLevel: number;
  subclasses: SubclassDefinition[];
  spellcasting?: ClassSpellcastingDefinition;
}

export interface ClassFeatureDefinition {
  name: string;
  level: number;
  description: string;
}

export interface SubclassDefinition {
  name: string;
  description: string;
  features: ClassFeatureDefinition[];
}

export interface ClassSpellcastingDefinition {
  type: 'full' | 'half' | 'third' | 'pact';
  ability: AbilityName;
  spellsKnownProgression?: number[];  // for known casters
  cantripsKnownProgression: number[];
  preparedCaster: boolean;
}

export interface SpeciesDefinition {
  name: string;
  size: 'Small' | 'Medium';
  speed: number;
  traits: SpeciesTrait[];
  abilityScoreIncrease?: {
    choice: boolean;
    options?: AbilityName[];
    fixed?: Partial<Record<AbilityName, number>>;
  };
}

export interface SpeciesTrait {
  name: string;
  description: string;
}

export interface BackgroundDefinition {
  name: string;
  skillProficiencies: SkillName[];
  toolProficiencies: string[];
  languages: number;  // number of languages to choose
  equipment: string[];
  feature: {
    name: string;
    description: string;
  };
  abilityScoreIncrease: {
    // 2024 backgrounds grant ability score increases
    options: AbilityName[];
    total: number;  // total points to distribute
  };
  feat: string;  // 2024 backgrounds grant a 1st-level feat
}

export interface FeatDefinition {
  name: string;
  level: number;  // minimum level requirement (1 for origin feats)
  prerequisite?: string;
  repeatable: boolean;
  description: string;
  benefits: string[];
  abilityScoreIncrease?: {
    abilities: AbilityName[];
    increase: number;
  };
}

/**
 * Level-up information for guiding character progression
 */
export interface LevelUpInfo {
  level: number;
  proficiencyBonus: number;
  features: string[];
  abilityScoreImprovement: boolean;
  newSpellSlots?: Partial<Record<number, number>>;
  choices?: LevelUpChoice[];
}

export interface LevelUpChoice {
  type: 'feat' | 'subclass' | 'skill' | 'spell' | 'invocation' | 'maneuver' | 'other';
  description: string;
  options?: string[];
}
