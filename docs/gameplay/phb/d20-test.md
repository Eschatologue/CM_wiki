---
icon: die/d20
---

# D20 Tests

When the outcome of an action is uncertain, the game uses a d20 roll to determine success or failure. These rolls are called **D20 Tests**, and they come in three kinds:

- **:d20-attack: Attack Roll**{.d20}: Rolled against the target's Armour Class (AC)
- **:d20-check: Ability Check**{.d20}: Rolled against the check's Difficulty Class (DC)
- **:d20-save: Saving Throws**{.d20}: Rolled against a Save DC. 

They follow these steps:

1. **Roll a 1d20:** You always want to roll *high*. If the roll has **:d20-adv: Advantage**{.d20} or **:d20-dis: Disadvantage**{.d20}, you roll two d20s, but you use the number from only one of them-the higher once if you have **:d20-adv: Advantage**{.d20} or the lower one if you have **:d20-dis: Disdvantage**{.d20}.

2. **Add Modifiers:** Add these modifiers to the number rolled on the d20:

    **The Relevant Ability Modifier**{.inl} This chapter and the rules glossary explain which ability modifiers to use for various D20 Tests.
    
    **Your Proficiency Bonus If Relevant**{.inl} Each creature has a Proficiency Bonys, a number added when making a D20 Test that uses something such as a skill, in which the creature has proficiency.
    
    **Circumstantial Bonuses and Penalties**{.inl} A class feature, a spell, or another rule might give a bonus or penalty to the die roll.

3. **Compare the Total to a Target Number:** If the total of the d20 and its modifiers **equals** or **exceeds** the target humber, the D20 Test succeeds. Otherwise, it fails. The Dungeon Master determines the target number and tells players whenever their roll are successfull. The target number for an Ability Check or a Saving Throw is called a Difficulty Class (Dc). The number for an Attack Roll is called an Armour Class (AC), which appears on a character sheet or in a stat block.

## Ability Check
  
An **:d20-check: Ability Check**{.d20} is an attempt to succeed at a specific task, and is rolled against a **Difficulty Class** (**DC**) set by the DM for that task. If the final result of the roll equals or exceeds the DC, the attempt is successful.

For every **:d20-check: Ability Check**{.d20}, the DM decides which of the six abilities is relevant to the task at hand and the difficulty of the task, represented by a [Difficulty Class]. The more difficult a task, the higher its DC.

### Ability Modifier

The **:d20-check: Ability Check**{.d20} is named for the ability modifier is uses: a **:d20-check: STR Check**{.d20}, an **:d20-check: INT check**{.d20}, and so on. Different ability checks are called for in different sutiation, depending on which ability is most relevant. See the Ability Check Examples table of examples of each check's to use.

##### Ability Check Examples

| Ability | Make a Check to... |
|---|---|
| Strength | Lift, Push, or break something |
| Dexterity | Move numbly, quickly, or quietly |
| Constitution | Push your body beyond normal limits |
| Intelligence | Reason or remember |
| Wisdom | Notice things in the environment or in creatures' behaviour |
| Charisma | Influence, Entertain, or Deceive |

### Proficiency Bonus

Add your Proficiency Bonys to an ability check when the DM determines that a skill or tool proficiency is relebant to the check and you have that proficiency.

### Difficulty Class

A Difficulty Class (or DC) is a number rolled against when making **:d20-check: Ability Check** or  **:d20-save: Saving Throw**. It represents how difficult a task is to accomplish. The number is determined by the the task attempted - or in the case of saves - the spell, condition, or action that has to be overcome.

| Task Difficulty | DC |
| --- | :-: |
| Very easy | 5 |
| Easy | 10 |
| Medium | 15 |
| Hard | 20 |
| Very hard | 25 |
| Nearly impossible | 30 |

## Saving Throw
  
Traps, spells, conditions, and other sources of harm may allow a creature a chance to avoid or reduce their effect, known as a **:d20-save: Saving Throw** or save. To attempt a save, a creature rolls a d20 against a target Save DC.

``` title="Saving Throw"
D20 + Ability Modifier + Proficiency Bonus (if proficient) + Other Bonuses (if applicable)
```

If you don't want to resist the effect, you can choose to fail the save without rolling.

### Ability Modifier

Saving throws are named for the ability modifiers they use: a **:d20-save: Constitution saving throw**{.d20}, a **:d20-save: Wisdom saving throw**{.d20}, and so on. Different sacing throws are used to ressit different kinds of effects, as shown on the Saving Throw Examples table.

##### Saving Throw Examples

| Ability | Make a Save To... |
|---|---|
| Strength | Physically resist direct force |
| Dexterity | Dodge out a harm's way |
| Constitution | Endure a toxic hazard |
| Intelligence | Recognise and illusion as false |
| Wisdom | Resist a mental assault |
| Charisma | Assert your Identity |

### Proficiency Bonus

You add your Proficieny Bonus to your saving throw if you have proficiency in that kind of save.

### Difficulty Class

The Difficulty Class for a Saving Throw is determined by the effect that causes it or by the DM.

## Attack Roll

When a creature attacks a target, it makes an **:d20-attack: Attack Roll**{.d20} against the target's AC to determine whether the attack is a hit or a miss. If the attack is a hit, it generally deals damage, and the attacker rolls for damage.

Creatures generally make their attacks with their equipped weapon (including unarmed), but some spells - such as a Warlock's [:spell-lv0: Eldritch Blast](../../spells/description/core/cantrip.md#eldritch-blast) - require the caster to make spell attack rolls.

``` title="Attack Roll"
D20 + Ability Modifier + Proficiency Bonus (if proficient) + Other Bonuses (if applicable)
```

### Ability Modifiers

The Attack Roll Abilities table shows which ability modifier to use for different types of attack rolls

##### Attack Roll Abilities

| Ability | Attack Type |
|---|---|
| Strength | Melle attack with a weapon or an **:rsc-a: Unarmed Strike**{.rsc} |
| Dexterity | Ranged attack with a weapon or Melee weapon with :wp-prop-finesse: Finesse property |
| Varies | Spell attack (The Ability used is determined by the spellcaster's spellcasting feature) |

### Armour Class

A Creature's Armour Class represents how will the creature avoids wounded in combat, The AC of a character is determined at character creation, whereas the AC od a monster appears in its stat block.

#### Calculating AC

All creatures start with the same base AC calculation:

```title="Base AC"
10 + the creature's Dexterity modifier.
```

A creature AC can then be modified by armour, magic items, spells, and more.

#### Only 1 base AC

Some spells anc class features give characters a different way to calculate their AC. A character with multiple features that give different ways to calculate AC must choose which one to use; only one base calculation can be in effect for a creature.

### Rolling 20 or 1

If you roll a 20 on the d20 (called a "natural 20) for an Attack Roll, the attack hits regardless of any modifier or the target's AC. This is called a Critical Hit.

If you roll a 1 on the d20 (called a "natural 1) for an attack roll, the attack misses regardless of any modifiers or the target's AC

## Advantage & Disadvantage

A number of situations and conditions give creatures **:d20-adv: Advantage**{.d20} or **:d20-dis: Disadvantage**{.d20} on d20 rolls.

A creature that makes a roll with **:d20-adv: Advantage**{.d20} rolls two d20 dice separately, and uses the higher of the two results. If they have **:d20-dis: Disadvantage**{.d20}, they choose the lower of the two.

### Interactions with Rerolls

When you have **:d20-adv: Advantage**{.d20} or **:d20-dis: Disadvantage**{.d20} and something in the game lets you reroll or replace the d20, you can reroll or replace only one die, not both. You choose which one.

### Heroic Inspiration

Sometimes the DM or a rule gives you Heroic Inspiration, if you have Heroic Inspiration you can expend it to reroll **any** die immediately after rolling it, and you must use the new roll.

[Difficulty Class]: #difficulty-class
[DC]: #difficulty-class
