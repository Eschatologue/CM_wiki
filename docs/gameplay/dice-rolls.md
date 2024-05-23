---
icon: material/dice-d20

search:
  boost: 2 

---

> "*The ~~Arcana~~ Dice is the means by which all is revealed*" 

Dice rolls are the core mechanics of D&D. In every situation, dice are rolled to determine the outcome of a myriad of situations, such as whether or not a character will succeed at using a particular skill, if an attack will land and how much damage it will do, and even when the DM feels like adding a little unpredictability.

## Dice Notation
D&D uses the d20 system—a role-playing game system published in 2000 by Wizards of the Coast, originally developed for the 3rd edition of Dungeons & Dragons. Though the name is d20, it often includes other dice notations as well—usually notated with a `d` followed by the number of sides on that specific die.

:material-dice-d4:{ .lg .middle } `d4` - :material-dice-d6:{ .lg .middle } `d6` - :material-dice-d8:{ .lg .middle } `d8` - :material-dice-d10:{ .lg .middle } `d10` - :material-dice-d12:{ .lg .middle } `d12` - :material-dice-d20:{ .lg .middle } `d20`

The number of dice to be rolled is notated immediately before the `d`. Any applicable modifiers for the roll are given as an addition (if it is a bonus) or subtraction (if it is a penalty) after the dice notation. When a single twenty-sided die (d20) is rolled with no modifiers, it is notated as `1d20`. When two six-sided dice (d6) are rolled with a modifier of +3, the roll is notated as `2d6+3`.

??? info "The d100"

    D&D also uses a 100-sided die, commonly referred to as "percentile dice" and is often used to determine loot drops from combat, or for rolling on a "Wild Magic" table for certain sorcerer subclasses, or when the DM requires it.


## :material-dice-d20: d20 Rolls

In D&D, the twenty-sided die (d20) is central to the game's mechanics, determining the success or failure of a wide range of actions. Whenever a creature attempts an action with a chance of failure, it rolls a d20 and adds any applicable modifiers. The result is compared to a target number to see if the attempt succeeds.

These attempts are categorized either as attack rolls – which are rolled against the target's **Armour Class** (**AC**), as ability checks – which are rolled against the check's Difficulty Class (DC), or as saving throws – which are rolled against a save DC:

| **ABILITY CHECK FORMULA** |
|:---:|
| :material-dice-d20: d20 + Ability Modifier + Proficiency Bonus (if proficient) + Other Bonuses (if applicable) |

### Categories of d20 Rolls

#### Attack Rolls

*See also [Making an Attack]*

[making an attack]: ./combat/making-an-attack.md
  
When a creature attacks a target, it makes an attack roll against the target's AC to determine whether the attack is a hit or a miss. If the attack is a hit, it generally deals damage, and the attacker rolls for damage. 
Creatures generally make their attacks with their equipped weapon (including unarmed), but some spells – such as a Warlock's Eldritch Blast – require the caster to make spell attack rolls.

#### Saving Throws
  
Traps, spells, conditions, and other sources of harm may allow a creature a chance to avoid or reduce their effect, known as a saving throw or save. To attempt a save, a creature rolls a d20 against a target save DC.

#### Ability Checks
  
An ability check is an attempt to succeed at a specific task, and is rolled against a **Difficulty Class** (**DC**) set by the game for that task. If the final result of the roll equals or exceeds the DC, the attempt is successful.

!!! info "Dificulty Class (DC)"

    A Difficulty Class (or DC) is a number rolled against when making ability checks or saving throws. It represents how difficult a task is to accomplish. The number is determined by the the task attempted – or in the case of saves – the spell, condition, or action that has to be overcome.

### Natural 1s and 20s

Rolling a 1 or 20 on a d20 roll is referred to as a natural 1 or natural 20. When making an attack roll or ability check, rolling a natural 1 is always an automatic failure, while a natural 20 is always an automatic success, regardless of the final result after modifiers are applied. Saving throws attempted during social encounters, and death saving throws, can also roll natural 1s and 20s.

### Advantage and Disadvantage

A number of situations and conditions give creatures :octicons-triangle-up-24:**Advantage** or :octicons-triangle-down-24:**Disadvantage** on d20 rolls. 

A creature that makes a roll with :octicons-triangle-up-24:**Advantage** rolls two d20 dice separately, and uses the higher of the two results. If they have :octicons-triangle-down-24:**Disadvantage**, they choose the lower of the two.

When multiple instances of :octicons-triangle-up-24:**Advantage** or :octicons-triangle-down-24:**Disadvantage** occcurs, each instance beyond the first adds a `+2` or `-2` modifier to the roll, respectively.^HB^

## Ability checks
Ability checks are dice rolls made to determine whether a creature succeeds or fails at a task. They are rolled against the task's Difficulty Class (DC). Each ability check is made using one of the six abilities in the game, and creatures add an ability's corresponding ability score modifier to the results of ability checks they make.

For every ability check, the DM decides which of the six abilities is relevant to the task at hand and the difficulty of the task, represented by a Difficulty Class. The more difficult a task, the higher its DC. 

The Typical Difficulty Classes table shows the most common DCs.

| **Task Difficulty** | **DC** |
| --- | :-: |
| Very easy | 5 | 
| Easy | 10 |
| Medium | 15 |
| Hard | 20 |
| Very hard | 25 |
| Nearly impossible | 30 |

### Skill

Ability checks are usually made using a specified skill. Skills are specific areas of expertise, each associated with an ability, that characters can be proficient in.

Characters add their proficiency bonus to any ability checks they make using skills they are proficient in.

| **:material-arm-flex:{ .lg .middle } Strength** | **:material-hand-front-right:{ .lg .middle } Dexterity** | **:material-heart-pulse:{ .lg .middle } Constitution** | **:material-book-cog:{ .lg .middle } Intelligence** | **:fontawesome-solid-scroll:{ .lg .middle } Wisdom** | **:material-handshake:{ .lg .middle } Charisma** |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [Athletics] | [Acrobatics] | - | [Arcana] | [Animal Handling] | [Deception] |
|  | [Sleight of Hand] |  | [History] | [Insight] | [Intimidation] |
|  | [Stealth] |  | [Investigation] | [Medicine] | [Performance] |
|  |  |  | [Nature] | [Perception] | [Persuasion] |
|  |  |  | [Religion] | [Survival] |  |

[Athletics]: ../character-creation/ability-scores/strength.md#athletics

[Acrobatics]: ../character-creation/ability-scores/dexterity.md#acrobatics
[Sleight of Hand]: ../character-creation/ability-scores/dexterity.md#sleight-of-hand
[Stealth]: ../character-creation/ability-scores/dexterity.md#stealth

[Arcana]: ../character-creation/ability-scores/intelligence.md#arcana
[History]: ../character-creation/ability-scores/intelligence.md#history
[Investigation]: ../character-creation/ability-scores/intelligence.md#investigation
[Nature]: ../character-creation/ability-scores/intelligence.md#nature
[Religion]: ../character-creation/ability-scores/intelligence.md#religion

[Animal Handling]: ../character-creation/ability-scores/wisdom.md#animal-handling
[Insight]: ../character-creation/ability-scores/wisdom.md#insight
[Medicine]: ../character-creation/ability-scores/wisdom.md#medicine
[Perception]: ../character-creation/ability-scores/wisdom.md#perception
[Survival]: ../character-creation/ability-scores/wisdom.md#survival

[Deception]: ../character-creation/ability-scores/charisma.md#deception
[Intimidation]: ../character-creation/ability-scores/charisma.md#intimidation
[Performance]: ../character-creation/ability-scores/charisma.md#performance
[Persuasion]: ../character-creation/ability-scores/charisma.md#persuasion

All characters gain proficiency in multiple skills depending on their chosen background during character creation, and can choose 2-4 more skills to be proficient in from a list of skills determined by their class.

Additionally, some races, subclasses, and feats also give proficiency in specific skills, and bards receive the class feature Jack of All Trades at level 2, allowing them to add half their proficiency bonus (rounded down) to ability checks they make using skills they are not proficient in.

Proficiency does not stack – there's no benefit to having multiple sources of proficiency for a skill.

#### Expertise

Characters can also have expertise in a skill, which allows them to add double their proficiency bonus when making a corresponding ability check. While it is possible to have proficiency and expertise in a skill at the same time, they do not stack. Some sources of expertise do, however, require the character to already be proficient in a skill.

Sources of expertise that require prior proficiency in the respective skill include:

- Rogues gain expertise in any two skills they are proficient in at both level 1 and level 6.
- Bards gain expertise in any two skills they are proficient in at both level 3 and level 10.

### Contests

Sometimes one character's or monster's efforts are directly opposed to another's. This can occur when both of them are trying to do the same thing and only one can succeed, such as attempting to snatch up a magic ring that has fallen to the floor. This situation also applies when one of them is trying to prevent the other one from accomplishing a goal—for example, when a monster tries to force open a door that an adventurer is holding closed. In situations like these, the outcome is determined by a special form of ability check, called a contest.

Both participants in a contest make ability checks appropriate to their efforts. They apply all appropriate bonuses and penalties, but instead of comparing the total to a DC, they compare the totals of their two checks. The participant with the higher check total wins the contest. That character or monster either succeeds at the action or prevents the other one from succeeding.

If the contest results in a tie, the situation remains the same as it was before the contest. Thus, one contestant might win the contest by default. If two characters tie in a contest to snatch a ring off the floor, neither character grabs it. In a contest between a monster trying to open a door and an adventurer trying to keep the door closed, a tie means that the door remains shut.

### Passive Checks

A passive check is a special kind of ability check that doesn't involve any die rolls. Such a check can represent the average result for a task done repeatedly, such as searching for secret doors over and over again, or can be used when the DM wants to secretly determine whether the characters succeed at something without rolling dice, such as noticing a hidden monster.

Here's how to determine a character's total for a passive check:

:   `10 + all modifiers that normally apply to the check`

If the character has advantage on the check, add 5. For :octicons-triangle-down-24: **Disadvantage**, subtract 5. The game refers to a passive check total as a score.

For example, if a 1st-level character has a Wisdom of 15 and proficiency in Perception, he or she has a passive Wisdom (Perception) score of 14.

The rules on hiding in the "Dexterity" also rely on passive checks.

### Working Together

Sometimes two or more characters team up to attempt a task. The character who's leading the effort—or the one with the highest ability modifier—can make an ability check with advantage, reflecting the help provided by the other characters. In combat, this requires the Help action (see chapter 9).

A character can only provide help if the task is one that he or she could attempt alone. For example, trying to open a lock requires proficiency with thieves' tools, so a character who lacks that proficiency can't help another character in that task. Moreover, a character can help only when two or more individuals working together would actually be productive. Some tasks, such as threading a needle, are no easier with help.

### Group Checks

When a number of individuals are trying to accomplish something as a group, the DM might ask for a group ability check. In such a situation, the characters who are skilled at a particular task help cover those who aren't.

To make a group ability check, everyone in the group makes the ability check. If at least half the group succeeds, the whole group succeeds. Otherwise, the group fails.

Group checks don't come up very often, and they're most useful when all the characters succeed or fail as a group. For example, when adventurers are navigating a swamp, the DM might call for a group Wisdom (Survival) check to see if the characters can avoid the quicksand, sinkholes, and other natural hazards of the environment. If at least half the group succeeds, the successful characters are able to guide their companions out of danger. Otherwise, the group stumbles into one of these hazards.
