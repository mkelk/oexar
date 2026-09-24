# Øxar Character Log

## 2026-09-24

### Added: Gold (placeholder — check actual amount)
Player's session notes said "NB! Tilføj gp" (add gold); the sheet had no currency line. Actual amount unknown, so the starting-equipment default was entered and flagged: **18 GP** = Fighter equipment option A, 4 GP (p. 90; chain mail + Dungeoneer's Pack match that package) + Soldier equipment option A, 14 GP (p. 185). Both values verified in the 5etools book data. Øxar's weapons (greataxe, handaxes) match neither package exactly, so the real figure may differ. Replace it once known.

### 4th Weapon Mastery chosen: Maul (Topple)
Fills the open L4 slot. Maul: 2d6 bludgeoning, Heavy, Two-Handed, Topple, 10 GP (p. 215). Topple (p. 214, verbatim): on a hit, target makes a CON save (8 + STR mod + PB = **DC 15**) or is Prone. Prone (p. 372): attacks from within 5 ft have Advantage, from farther away Disadvantage; the prone creature's attacks have Disadvantage; it can't stand up while its Speed is 0. Rationale: the single-target counterpart to the Greataxe's Cleave, Heavy so GWM's +3 and Hew still apply, and 2d6 with GWF averages 8 vs. 6.75 for the Greataxe's 1d12. **Not owned yet — buy.** Added to ATTACKS (row + Topple line) and Equipment. The mastery swap rule is noted: one weapon choice per Long Rest (p. 91, verbatim).

### Added: BATTLE SCENARIOS page (new page 3)
Five scenario playbooks: Big Brute (Maul/Topple + Action Surge, Earth's Grasp lock-down), Mob (Greataxe/Cleave + Hew), Bodyguard (Goading, maul Opportunity Attacks), Archers & Casters (Lunging, Vex, Rune Stone), Emergency. Rules cited were checked against 5etools book data this session: Attack action equip/unequip (p. 361), Dash (p. 365), Opportunity Attack (p. 371), Prone (p. 372), Restrained (p. 373), Goading/Lunging/Riposte, GWM, Savage Attacker. Earth's Grasp duration remains a DM call (custom item).

### Layout / housekeeping
- Merged Current HP + Death Saves and Passive Perception + Tools onto single lines so page 1 still fits
- HTML: removed a stray duplicated partial `<head>` block at the top of the file; `<title>` corrected from "Level 4" to "Level 5"

### Languages: TODO added
Still 2 open standard languages (p. 37). Added a TODO to ask the DM whether the Svilland setting has its own languages (e.g. a Norse tongue) before picking.

---

## 2026-08-01

### Tactical Mind is not a Bonus Action (player caught it)
The sheet listed Tactical Mind under Bonus Action — wrong. The 2024 text (Fighter, p. 91, verified verbatim) gives it **no action cost**: it triggers on any failed ability check, anytime, in or out of combat. It expends a Second Wind *use* but is not the Second Wind Bonus Action, so no Tactical Shift movement applies and it doesn't compete for the Bonus Action. Moved to a new "No Action" subsection in TURN OPTIONS.

---

## 2026-07-31 (later)

### Level Up: 4 → 5

#### New Features *(PHB p. 92)*
- **Extra Attack** — 2 attacks per Attack action (4 with Action Surge)
- **Tactical Shift** — Second Wind (Bonus Action) now also moves 15 ft without provoking Opportunity Attacks

*(Ref correction: initially logged as p. 91 by unverified assumption; book data confirms both L5 features are on p. 92.)*

#### Proficiency Bonus +2 → +3 (cascade)
- Attacks: +6 → +7 (both weapons)
- **Maneuver save DC: 14 → 15**
- **GWM Heavy Weapon Mastery: +2 → +3** (normal swing now 1d12+7)
- Saves: STR +7, CON +6
- Skills: Athletics +7, Stealth +4 (Disadv), Perception/Survival/Animal Handling +3, Intimidation +2
- Passive Perception: 12 → 13

#### HP: 48 → 59
- Level 5: 6 (fixed d10) + 3 (CON) = 9; Tough +2 (now +10 total)
- Hit Dice: 4d10 → 5d10

#### Other
- Second Wind heals 1d10+5 (1d10 + Fighter level)
- Fighting style: **kept Great Weapon Fighting** (swap was available, declined)
- Unchanged: AC 16, superiority dice (4×d8), 3 maneuvers (next at L7), Second Wind 3 uses, Action Surge 1, Weapon Masteries 4
- Still open: 4th Weapon Mastery choice, 2 languages

#### Reconciled player hand-edits (same day)
- Kept player annotations on RESOURCES (superiority dice "for maneuvers", Rune Stone usage notes, Cleave clarification)
- **Player note "(re-roll any dice)" on Heroic Inspiration exposed a 2014 leftover**: the sheet said "spend for Advantage." 2024 rule (p. 368, verbatim): expend to *reroll any die* immediately after rolling, must use the new roll; a duplicate gain may be given to another player. RESOURCES, Features, and FIGHTING TECHNIQUES updated to reroll semantics.
- Corrected "(DC 13 STR maneuver)" → "(DC 13 STR save)" on Earth's Grasp — it's the item's own save, not a Battle Master maneuver (those are DC 15)
- Restored "Long: all" on Hit Dice (the hand-edit had come from a pre-fix copy of the line); fixed "maneuverr" typo

#### Adversarial re-check of the L5 upgrade (same day)
- All level-up numbers verified against book data: L5 grants exactly Extra Attack + Tactical Shift (p. 92), PB +3 cascade (+7 attacks, DC 15, HWM +3, saves, skills, PP 13), HP 59, 5d10 Hit Dice, Second Wind 1d10+5 at 3 uses; nothing gained was missed, nothing extra granted.
- **Pre-existing error found and fixed:** Hit Dice reset was listed as "Long (half)" — that's the 2014 rule. The 2024 Long Rest restores **all** spent Hit Point Dice (PHB p. 370, verified verbatim). RESOURCES table corrected to "Long: all".
- Flagged in FIGHTING TECHNIQUES: the Earth's Grasp → party-wide Advantage line is the natural reading of the custom item's wording; exact Restrained timing/duration marked as a DM call.

#### Added: FIGHTING TECHNIQUES section
New best-practice tactics page on the sheet: standard turn, openers, nova turn (with Earth's Grasp priming), reaction priority (Rune Stone Shield vs. Riposte vs. Opportunity Attack), survival tools, and resource pacing.

---

## 2026-07-31

### PHB 2024 Page References for the 2026-07-30 Changes (verified against book-extracted data)

| Change | PHB 2024 ref |
|--------|--------------|
| Maneuver save DC formula (→ DC 14) | Combat Superiority, **p. 93** |
| Superiority Dice (4×d8, Short/Long Rest), max 1 maneuver/attack | Combat Superiority, **p. 93** |
| Lunging Attack 2024 version (also Goading, Riposte) | Maneuver Options, **p. 94** |
| GWM Heavy Weapon Mastery (per-hit, not 1/turn) | Great Weapon Master, **p. 204** |
| 4th Weapon Mastery at L4, swap one per Long Rest | Weapon Mastery, **p. 91** (Fighter class from p. 90) |
| Second Wind 3 uses / Tactical Mind / Action Surge | **p. 91** |
| Soldier background (no vehicle proficiency) | **p. 185** |
| Languages: Common + two standard | Choose Languages, **p. 37** |
| Weapon mastery properties (Cleave, Vex, Graze) | Mastery Properties, **p. 214** |
| Savage Attacker / Tough (origin feats) | **p. 201** / **p. 202** |
| Sentinel (planned L8) | **p. 207** |

#### In-sheet page references added (same day, later)
Added verified PHB 2024 refs directly to the sheet — only book-verified page numbers used: Human (p. 194), Fighter/Battle Master (pp. 90/93), Soldier (p. 185), GWF (p. 209), Tough (p. 202), Heroic Inspiration (p. 368), Tactical Mind (p. 91), Savage Attacker (p. 201), Maneuvers (pp. 93–94), Languages (p. 37), Weapons (p. 215), Mastery Properties (p. 214), Chain Mail (p. 219), *Shield* spell (p. 316), Restrained condition (p. 373), Sentinel (p. 207). Not referenced (custom item, no official page): the Rune Stone itself.

#### Corrections to previously logged page refs
The 2025-12-03 refs were partly wrong: GWM is **p. 204** (not 201 — the sheet's original 204 was correct and has been restored after being wrongly "fixed" to 201 on 2026-07-30), Soldier is **p. 185** (not 179), Human is **p. 194** (not 170), Sentinel is **p. 207** (not 206). Battle Master is pp. 93–95 as logged; Fighter starts **p. 90** (not 91).

---

## 2026-07-30

### Full 2024-Rules Sanity Check (web-verified)

#### Fixed
- **Maneuver save DC: 13 → 14** — DC = 8 + STR mod (+4) + PB (+2). Was never bumped when GWM raised STR 17 → 18 at L4.
- **Lunging Attack corrected to 2024 version** — Old sheet had the 2014 "+5 ft reach" version. 2024: Bonus Action, expend a Superiority Die and take the Dash action; if you move ≥5 ft in a straight line immediately before hitting with a melee attack as part of the Attack action, add the die to damage. Moved into Bonus Action turn options.
- **GWM Heavy Weapon Mastery is not 1/turn** — Applies to *every* hit with a Heavy weapon made as part of the Attack action (excludes Hew, opportunity attacks, Riposte). Whether the Cleave follow-up hit qualifies is RAW-ambiguous (Nick's mastery says "as part of the Attack action" explicitly; Cleave's doesn't) — marked as DM call. Removed from "Free (1/turn each)".
- **Removed Land Vehicles proficiency** — 2024 Soldier grants only Athletics, Intimidation, and one Gaming Set (vehicles were the 2014 version).
- **Languages: 2 open slots** — 2024 rule: every PC knows Common plus two standard languages (species/backgrounds no longer grant them). Sheet previously said "choose one more".

#### Added
- **4th Weapon Mastery slot (Fighter L4)** — Weapon Mastery scales 3 (L1) → 4 (L4) → 5 (L10) → 6 (L16). Marked as an open slot; one mastery choice may also be swapped each Long Rest.
- **Superiority Dice tracker in MANEUVERS section** — duplicate of the RESOURCES tracker, placed next to where dice are spent.
- **"Max 1 maneuver per attack"** noted in MANEUVERS header (verbatim Combat Superiority rule).

#### Verification method
All rules re-verified 2026-07-30 against verbatim 2024 text (Battle Master Combat Superiority + maneuvers, Great Weapon Master feat, Fighter class table & Weapon Mastery feature) — DC formula, Lunging Attack wording, HWM having no per-turn limit, L4 = 4 masteries / 3 Second Wind uses all confirmed word-for-word.

#### Verified correct
HP 48, AC 16, saves STR +6 / CON +5, attacks +6 (1d12+4 / 1d6+4), Second Wind 3 uses @ 1d10+4, Action Surge 1, Superiority Dice 4×d8 (Short/Long Rest), 3 maneuvers known (2 more at L7), PB +2, Origin feats (Savage Attacker + Tough), point-buy-legal ability scores, all skill mods, Passive Perception 12.

#### Note
- The committed PDF predates the L3/L4 updates and is stale — regenerate before printing.

#### Remaining TODO
- Choose 4th Weapon Mastery
- Choose 2 languages

---

## 2026-05-03 (later)

### Acquired: Rune Stone
A single stone bearing one carved rune that offers two effect options, each with its own recharge.

- **Shield effect** — Reaction; casts the *Shield* spell (+5 AC until start of next turn, negates *Magic Missile*). Recharges on Short Rest.
- **Earth's Grasp effect** — On next hit with a weapon attack, target makes a DC 13 STR save or cannot move next round and counts as Restrained. Recharges on Long Rest.

Added to RESOURCES (tracking circles), Reaction options (Shield), and a new "Magic Items" section under Equipment.

---

## 2026-05-03

### Level Up: 3 → 4

#### Ability Score Improvement: Great Weapon Master Feat *(PHB 2024 p. 201)*
- **+1 STR**: 17 → 18 (+3 → +4 mod)
- **Heavy Weapon Mastery**: 1/turn, +PB (+2) damage on hit with a Heavy weapon
- **Hew** (Bonus Action): After a crit or reducing a creature to 0 HP with a Heavy weapon, make one attack with that weapon

#### HP: 37 → 48
- Level 4: 6 (fixed d10) + 3 (CON) = 9
- Tough: +2 (now +8 total)

#### Hit Dice: 3d10 → 4d10

#### Derived Updates from STR 17 → 18
- STR save: +5 → +6
- Athletics: +5 → +6
- Greataxe: +5/1d12+3 → +6/1d12+4 (1d12+6 when HWM triggers)
- Handaxe: +5/1d6+3 → +6/1d6+4
- Greatsword (theoretical): 2d6+3 → 2d6+4
- Second Wind: 1d10+3 → 1d10+4 (heals 1d10 + Fighter level)
- **Second Wind uses: 2 → 3** (Fighter table bump at L4; next at L10)

#### Unchanged
- AC 16, Initiative +1, Proficiency Bonus +2 (next bump at L5)
- Superiority Dice (4), Maneuvers (Goading, Lunging, Riposte), DC 13
- Action Surge (1 use)
- Removed L4 entry from Planned Features (now active); Sentinel still planned for L8

---

## 2026-01-11 (Session 2)

### Origin Feat Correction & Level Up to 3

#### Origin Feat Fix
Discovered that **Great Weapon Master is NOT an Origin Feat** — it's a General Feat requiring level 4+. Origin Feats are a specific list of 10 feats (Alert, Crafter, Healer, Lucky, Magic Initiate, Musician, Savage Attacker, Skilled, Tavern Brawler, Tough).

- **Replaced GWM with Tough** as the Human Versatile Origin Feat
- Tough grants +2 HP per level (retroactive)
- Removed +2 GWM damage from Greataxe attacks (now 1d12+3 instead of 1d12+5)
- Moved GWM to Planned Features (Level 4)

#### Level Up: 2 → 3
- **HP:** 37 (Level 1: 10+3, Level 2: 6+3, Level 3: 6+3, Tough: +6)
- **Hit Dice:** 3d10
- **Second Wind:** Now heals 1d10+3

#### Battle Master Subclass Activated
- **Combat Superiority:** 4 Superiority Dice (d8), DC 13
- **Maneuvers Chosen:**
  - Goading Attack (taunt/control)
  - Lunging Attack (+5 ft reach)
  - Riposte (reaction counterattack)
- **Student of War:** Brewer's Supplies, Animal Handling

#### Added Missing Feature
- **Tactical Mind** (Level 2) — Expend Second Wind use to add 1d10 to a failed ability check

#### Reorganization
- Moved planned feats (GWM, Sentinel) to new "Planned Features" section at end of document
- Added Maneuvers and Reaction Options to Quick Reference

#### Great Weapon Fighting Correction
- **2024 rule:** Treat 1s and 2s as 3s (no reroll)
- **2014 rule (old):** Reroll 1s and 2s, must use new result
- Updated Fighting Style description, weapon entries, and Quick Reference

#### Remaining TODO
- **Additional Language** — Still needs to be chosen

---

## 2026-01-11

### Character Sheet Validation & Corrections

Full validation against 2024 PHB rules revealed the following:

#### Fixed
- **Savage Attacker now a current feat** — Soldier background grants this as an Origin Feat (PHB p. 179). Combined with Human Versatile (Great Weapon Master), Øxar has TWO Origin Feats at level 1. Previously incorrectly listed as "Planned for Level 4".
- **Fighting Style corrected to Great Weapon Fighting** — Was incorrectly listed as Defense
- **AC corrected from 17 to 16** — Chain Mail only (no +1 from Defense fighting style)
- **Added GWF reroll notes** — Greataxe weapon entry and Quick Reference now note the 1-2 reroll mechanic
- **Fighter class skills chosen** — Perception (+2) and Survival (+2)
- **Added Quick Summary section** — At-a-glance combat stats, saves, Greataxe attack, and resources at the top of the sheet
- **3rd Weapon Mastery chosen** — Graze (Greatsword). On a miss, still deal STR mod damage. Added Greatsword stats for when one is acquired.

#### Remaining TODOs
- **Additional Language** — Humans know Common plus one other language (PHB p. 170)

#### Clarified
- **Battle Master section** — Added "Not yet active" note to clarify these features unlock at Level 3+

#### Verified Correct
- Ability scores, modifiers, HP, AC, saving throws
- Second Wind (2 uses), Action Surge, Heroic Inspiration
- Great Weapon Master 2024 version
- Weapon stats and existing masteries
- Battle Master subclass preview

#### External Audit Reviewed
Reviewed third-party audit that claimed several errors. Most claims were based on 2014 rules, not 2024:
- Background ASIs: Exist in 2024 (PHB p. 179)
- Second Wind 2 uses: Correct for 2024 (PHB p. 91)
- GWM +PB damage: Exists in 2024 (PHB p. 201)
- Two Origin Feats: Legal for Humans via Versatile trait (PHB p. 170)

---

## 2025-12-04

### Level Up to 2
Updated character sheet to Level 2 based on handwritten sheet comparison:
- **Level:** 1 → 2
- **Hit Points:** 13 → 24 (10+3 at L1, 8+3 at L2)
- **Hit Dice:** 1d10 → 2d10
- **Action Surge** added *(PHB p. 92)* — 1 additional Action per Short/Long Rest
- **Second Wind** updated to heal 1d10+2, regains on Short Rest (corrected)
- **Skillful trait:** Changed from Perception to **Stealth** (+3)
- Added "Last Updated" date to character sheet header
- Reformatted Resources Per Rest as a table

### Outstanding TODO
- **⚠️ PLAYER ACTION REQUIRED: Choose 2 Fighter class skill proficiencies**
  - Options: Acrobatics, Animal Handling, History, Insight, Perception, or Survival
  - (Athletics, Intimidation, Stealth already taken)

---

## 2025-12-03

### PHB 2024 Page References Added
Added inline cross-references throughout the character sheet for easy lookup and compact printing. References integrated into section headers and text rather than on separate lines. Key pages:
- Ability Scores (p. 36), Combat (pp. 361–365), Human (p. 170), Soldier (p. 179)
- Fighter (pp. 91–97), Battle Master (pp. 93–95), Fighting Styles (p. 95)
- Feats: Great Weapon Master (p. 201), Sentinel (p. 206)
- Equipment: Weapons (pp. 213–215), Armor (pp. 218–219), Masteries (pp. 213–214)

### Battle Master Section Corrections
- Corrected to **4 Superiority Dice** at level 3 (was unstated)
- Fixed **Student of War** to Level 3 feature (was incorrectly listed as Level 7)
- Added **Know Your Enemy** as the correct Level 7 feature
- Added Short Rest recovery for Superiority Dice

### Handaxe Weapon Mastery Added
- Added **Vex** mastery for Handaxes (PHB p. 214)

---

### Character Sheet Review & Corrections
- **Great Weapon Master feat updated to 2024 PHB version**
  - Removed old 2014 Power Attack (-5 to hit / +10 damage) — this no longer exists
  - Added Heavy Weapon Mastery: +Proficiency Bonus damage once per turn with Heavy weapons
  - Added Hew: Bonus action attack after crit or reducing enemy to 0 HP
  - Added page reference (PHB 2024, p. 201)
- **Attack quick reference updated** to reflect correct 2024 GWM mechanics
- **Added bonus action options** to quick reference for clarity

### Initial Entry
- Initialized
