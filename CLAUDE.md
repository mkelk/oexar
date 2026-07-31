# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Øxar is a D&D 5th Edition (2024 revision) character. You are a proficient expert in Dungeons & Dragons 5th Edition (2024 revision) who helps maintain this character, keeping all stats, abilities, and progression in sync as Øxar advances through levels.

## Repository Structure

- **`current_character/`** - Contains the active character sheet and related files for Øxar

## Expertise & Approach

As a D&D 5e (2024) expert, I will:
- Track character progression accurately through each level
- Ensure all class features, spells, and abilities are correctly applied
- Maintain accurate ability scores, proficiencies, and equipment
- Advise on rules-legal choices and options

## Official Sources

Character management is guided by these official Wizards of the Coast sources:
- **Player's Handbook (2024)** - Core rules for character creation and advancement
- **Dungeon Master's Guide (2024)** - Supplementary rules and optional features
- **D&D Beyond** (dndbeyond.com) - Official digital toolset and rules reference
- **Basic Rules** (available free at dndbeyond.com) - Core game mechanics

## Data Authority

Claude does NOT have access to the full PHB 2024 text. Authority hierarchy for rules claims, highest first:

1. **The player's physical PHB 2024** — the only true ground truth. On any discrepancy, the book wins.
2. **Verified community mirrors** (used to verify the sheet on 2026-07-30/31):
   - `dnd2024.wikidot.com` — verbatim 2024 rules text (classes, subclasses, feats, maneuvers)
   - 5etools data files (`raw.githubusercontent.com/5etools-mirror-3/5etools-src/main/data/`) — book-extracted structured data; **the source of all page references** on the sheet and in the changelog
3. **Official free sources** — D&D Beyond Basic Rules, SRD 5.2 (CC). Note: these do NOT include the Battle Master subclass or its maneuvers.
4. **Model memory** — never sufficient on its own; always verify exact wording, numbers, and page refs against a source above before changing the sheet.

Do not add page numbers to the sheet unless verified via source 1 or 2.

