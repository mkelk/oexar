/**
 * Core D&D 5e calculation utilities
 */

import type { AbilityScores, AbilityName, Character, SkillName } from '../types/index.js';

/**
 * Skill to ability score mapping (2024 PHB)
 */
export const SKILL_ABILITIES: Record<SkillName, AbilityName> = {
  acrobatics: 'dexterity',
  animalHandling: 'wisdom',
  arcana: 'intelligence',
  athletics: 'strength',
  deception: 'charisma',
  history: 'intelligence',
  insight: 'wisdom',
  intimidation: 'charisma',
  investigation: 'intelligence',
  medicine: 'wisdom',
  nature: 'intelligence',
  perception: 'wisdom',
  performance: 'charisma',
  persuasion: 'charisma',
  religion: 'intelligence',
  sleightOfHand: 'dexterity',
  stealth: 'dexterity',
  survival: 'wisdom',
};

/**
 * Calculate ability modifier from ability score
 */
export function getAbilityModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

/**
 * Calculate proficiency bonus from character level
 */
export function getProficiencyBonus(level: number): number {
  return Math.ceil(level / 4) + 1;
}

/**
 * Calculate skill bonus for a character
 */
export function getSkillBonus(character: Character, skill: SkillName): number {
  const ability = SKILL_ABILITIES[skill];
  const modifier = getAbilityModifier(character.abilityScores[ability]);

  const proficiency = character.skillProficiencies.find(p => p.skill === skill);
  if (!proficiency?.proficient) {
    return modifier;
  }

  const profBonus = character.proficiencyBonus;
  return modifier + (proficiency.expertise ? profBonus * 2 : profBonus);
}

/**
 * Calculate saving throw bonus for a character
 */
export function getSavingThrowBonus(character: Character, ability: AbilityName): number {
  const modifier = getAbilityModifier(character.abilityScores[ability]);
  const proficient = character.savingThrowProficiencies.includes(ability);

  return proficient ? modifier + character.proficiencyBonus : modifier;
}

/**
 * Calculate passive skill score
 */
export function getPassiveScore(character: Character, skill: SkillName): number {
  return 10 + getSkillBonus(character, skill);
}

/**
 * Calculate spell save DC
 */
export function getSpellSaveDC(
  abilityScore: number,
  proficiencyBonus: number
): number {
  return 8 + getAbilityModifier(abilityScore) + proficiencyBonus;
}

/**
 * Calculate spell attack bonus
 */
export function getSpellAttackBonus(
  abilityScore: number,
  proficiencyBonus: number
): number {
  return getAbilityModifier(abilityScore) + proficiencyBonus;
}

/**
 * Calculate total character level from class levels
 */
export function getTotalLevel(character: Character): number {
  return character.classes.reduce((sum, c) => sum + c.level, 0);
}

/**
 * Format modifier as string with sign
 */
export function formatModifier(modifier: number): string {
  return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}

/**
 * Calculate XP needed for next level (2024 PHB XP table)
 */
export function getXPForLevel(level: number): number {
  const xpTable: Record<number, number> = {
    1: 0,
    2: 300,
    3: 900,
    4: 2700,
    5: 6500,
    6: 14000,
    7: 23000,
    8: 34000,
    9: 48000,
    10: 64000,
    11: 85000,
    12: 100000,
    13: 120000,
    14: 140000,
    15: 165000,
    16: 195000,
    17: 225000,
    18: 265000,
    19: 305000,
    20: 355000,
  };
  return xpTable[level] ?? 0;
}

/**
 * Calculate level from XP
 */
export function getLevelFromXP(xp: number): number {
  for (let level = 20; level >= 1; level--) {
    if (xp >= getXPForLevel(level)) {
      return level;
    }
  }
  return 1;
}
