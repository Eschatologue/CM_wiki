---
icon: die/d20

search:
  boost: 2 

---

# Dice Rolls

Dice rolls are the core mechanics of D&D. In every situation, dice are rolled to determine the outcome of a myriad of situations, such as whether or not a character will succeed at using a particular skill, if an attack will land and how much damage it will do, and even when the DM feels like adding a little unpredictability.

## Dice Notation

D&D uses the d20 system—a role-playing game system published in 2000 by Wizards of the Coast, originally developed for the 3rd edition of Dungeons & Dragons. Though the name is d20, it often includes other dice notations as well—usually notated with a `d` followed by the number of sides on that specific die.

:die-d4:{ .lg .middle } `d4` - :die-d6:{ .lg .middle } `d6` - :die-d8:{ .lg .middle } `d8` - :die-d10:{ .lg .middle } `d10` - :die-d12:{ .lg .middle } `d12` - :die-d20:{ .lg .middle } `d20`

The number of dice to be rolled is notated immediately before the `d`. Any applicable modifiers for the roll are given as an addition (if it is a bonus) or subtraction (if it is a penalty) after the dice notation. When a single twenty-sided die (d20) is rolled with no modifiers, it is notated as `1d20`. When two six-sided dice (d6) are rolled with a modifier of +3, the roll is notated as `2d6+3`.

??? info "The d100"

    D&D also uses a 100-sided die, commonly referred to as "percentile dice" and is often used to determine loot drops from combat, or for rolling on a "Wild Magic" table for certain sorcerer subclasses, or when the DM requires it.

## D20 Tests

In D&D, the twenty-sided die (:die-d20: d20) is central to the game's mechanics, determining the success or failure of a wide range of actions. Whenever a creature attempts an action with a chance of failure, it rolls a d20 and adds any applicable modifiers. The result is compared to a target number to see if the attempt succeeds.

The term d20 Test encompasses the three main d20 rolls of the game: :d20-attack: **Attack Rolls** – which are rolled against the target's **Armour Class** (**AC**), :d20-check:**Ability Check** – which are rolled against the check's Difficulty Class (DC), and :d20-save:**Saving Throws** – which are rolled against a save DC

### :d20-attack:{ .lg .pad-r } Attack Roll

When a creature attacks a target, it makes an :d20-attack: **Attack Roll** against the target's AC to determine whether the attack is a hit or a miss. If the attack is a hit, it generally deals damage, and the attacker rolls for damage.

Creatures generally make their attacks with their equipped weapon (including unarmed), but some spells – such as a Warlock's [Eldritch Blast](../spells/cantrip.md#eldritch-blast) – require the caster to make spell :d20-attack: **Attack Rolls**.

!!! quote ""

    <p style="text-align: center;"> D20 + Ability Modifier + Proficiency Bonus (if proficient) + Other Bonuses (if applicable) </p>

*See also [Making an Attack]*

[making an attack]: ./combat/making-an-attack.md

### :d20-check:{ .lg .pad-r } Ability Check
  
An :d20-check: **Ability Check** is an attempt to succeed at a specific task, and is rolled against a **Difficulty Class** (**DC**) set by the DM for that task. If the final result of the roll equals or exceeds the DC, the attempt is successful.

!!! quote ""

    <p style="text-align: center;"> D20 + Ability Modifier </p>

For every :d20-check: **Ability Check**, the DM decides which of the six abilities is relevant to the task at hand and the difficulty of the task, represented by a [Difficulty Class]. The more difficult a task, the higher its DC.

### :d20-save:{ .lg .pad-r } Saving Throw
  
Traps, spells, conditions, and other sources of harm may allow a creature a chance to avoid or reduce their effect, known as a :d20-save: **Saving Throw** or save. To attempt a save, a creature rolls a d20 against a target Save [DC].

!!! quote ""

    <p style="text-align: center;"> D20 + Ability Modifier + Proficiency Bonus (if proficient) + Other Bonuses (if applicable) </p>

## Natural 1s and 20s

Rolling a 1 or 20 on a d20 roll is referred to as a natural 1 or natural 20. When making an :d20-attack: **Attack Roll** or :d20-check: **Ability Check**, rolling a natural 1 is always an automatic failure, while a natural 20 is always an automatic success, regardless of the final result after modifiers are applied. :d20-save: **Saving Throws** attempted during social encounters, and death :d20-save: **Saving Throws**, can also roll natural 1s and 20s.

## Advantage & Disadvantage

A number of situations and conditions give creatures :d20-adv: **Advantage** or :d20-disadv: **Disadvantage** on d20 rolls.

A creature that makes a roll with :d20-adv: **Advantage** rolls two d20 dice separately, and uses the higher of the two results. If they have :d20-disadv: **Disadvantage**, they choose the lower of the two.

When multiple instances of :d20-adv: **Advantage** or :d20-disadv: **Disadvantage** occcurs, each instance beyond the first adds a `+2` or `-2` modifier to the roll, respectively.^HB^

## Difficulty Class

A Difficulty Class (or DC) is a number rolled against when making :d20-check: **Ability Checks** or :d20-save: **Saving Throws**. It represents how difficult a task is to accomplish. The number is determined by the the task attempted – or in the case of saves – the spell, condition, or action that has to be overcome.

| Task Difficulty | DC |
| --- | :-: |
| Very easy | 5 |
| Easy | 10 |
| Medium | 15 |
| Hard | 20 |
| Very hard | 25 |
| Nearly impossible | 30 |

## Skill Checks

Ability Checks are usually made using a specified skill. Skills are specific areas of expertise, each associated with an ability, that characters can be proficient in.

Characters add their Proficiency Bonus to any :d20-check: **Ability Checks** they make using skills they are proficient in.

| | | ABILITIES |  | |
|:---:|:---:|:---:|:---:|:---:|
| **:ability-str:{ .lg  } STRENGTH** | **:ability-dex:{ .lg  } DEXTERITY** | **:ability-int:{ .lg  } INTELIGENCE** | **:ability-wis:{ .lg  } WISDOM** | **:ability-cha:{ .lg  } CHARISMNA** |
| Athletics | Acrobatics | Arcana | Animal Handling | Deception |
|  | Sleight of Hand | History | Insight | Intimidation |
|  | Stealth | Investigation | Medicine | Performance |
|  |  | Nature | Perception | Persuasion |
|  |  | Religion | Survival |  |

??? question "Constitution :d20-check: **Ability Check**"

    Constitution checks are uncommon, and no skills apply to Constitution checks, because the endurance this ability represents is largely passive rather than involving a specific effort on the part of a character or monster.

All characters gain Proficiency in multiple skills depending on their chosen background during character creation, and can choose 2-4 more skills to be proficient in from a list of skills determined by their class.

Additionally, some races, subclasses, and feats also give Proficiency in specific skills, and bards receive the class feature Jack of All Trades at level 2, allowing them to add half their Proficiency Bonus (rounded down) to :d20-check: **Ability Checks** they make using skills they are not proficient in.

Proficiency does not stack – there's no benefit to having multiple sources of Proficiency for a skill.

### Expertise

Characters can also have expertise in a skill, which allows them to add double their Proficiency Bonus when making a corresponding :d20-check: **Ability Check**. While it is possible to have Proficiency and expertise in a skill at the same time, they do not stack. Some sources of expertise do, however, require the character to already be proficient in a skill.

Sources of expertise that require prior Proficiency in the respective skill include:

- Rogues gain expertise in any two skills they are proficient in at both level 1 and level 6.
- Bards gain expertise in any two skills they are proficient in at both level 3 and level 10.

## Contests

Sometimes one character's or monster's efforts are directly opposed to another's. This can occur when both of them are trying to do the same thing and only one can succeed, such as attempting to snatch up a magic ring that has fallen to the floor. This situation also applies when one of them is trying to prevent the other one from accomplishing a goal—for example, when a monster tries to force open a door that an adventurer is holding closed. In situations like these, the outcome is determined by a special form of :d20-check: **Ability Check**, called a contest.

Both participants in a contest make :d20-check: **Ability Checks** appropriate to their efforts. They apply all appropriate bonuses and penalties, but instead of comparing the total to a DC, they compare the totals of their two checks. The participant with the higher check total wins the contest. That character or monster either succeeds at the action or prevents the other one from succeeding.

If the contest results in a tie, the situation remains the same as it was before the contest. Thus, one contestant might win the contest by default. If two characters tie in a contest to snatch a ring off the floor, neither character grabs it. In a contest between a monster trying to open a door and an adventurer trying to keep the door closed, a tie means that the door remains shut.

## Passive Checks

A passive check is a special kind of :d20-check: **Ability Check** that doesn't involve any die rolls. Such a check can represent the average result for a task done repeatedly, such as searching for secret doors over and over again, or can be used when the DM wants to secretly determine whether the characters succeed at something without rolling dice, such as noticing a hidden monster.

Here's how to determine a character's total for a passive check:

!!! quote ""

    <p style="text-align: center;"> 10 + Ability Modifier + Proficiency Bonus (if proficient) + Other Bonuses (if applicable) </p>

If the character has :d20-adv: **Advantage** on the check, add 5. For :d20-disadv: **Disadvantage**, subtract 5. The game refers to a passive check total as a score. Only one instance would apply.

For example, if a 1st-level character has a Wisdom of 15 and Proficiency in Perception, he or she has a passive Wisdom (Perception) score of 14.

The rules on hiding in the "Dexterity" also rely on passive checks.

## Working Together

Sometimes two or more characters team up to attempt a task. The character who's leading the effort—or the one with the highest ability modifier—can make an :d20-check: **Ability Check** with advantage, reflecting the help provided by the other characters. In combat, this requires the Help action (see chapter 9).

A character can only provide help if the task is one that he or she could attempt alone. For example, trying to open a lock requires Proficiency with thieves' tools, so a character who lacks that Proficiency can't help another character in that task. Moreover, a character can help only when two or more individuals working together would actually be productive. Some tasks, such as threading a needle, are no easier with help.

## Group Checks

When a number of individuals are trying to accomplish something as a group, the DM might ask for a group :d20-check: **Ability Check**. In such a situation, the characters who are skilled at a particular task help cover those who aren't.

To make a group :d20-check: **Ability Check**, everyone in the group makes the :d20-check: **Ability Check**. If at least half the group succeeds, the whole group succeeds. Otherwise, the group fails.

Group checks don't come up very often, and they're most useful when all the characters succeed or fail as a group. For example, when adventurers are navigating a swamp, the DM might call for a group Wisdom (Survival) check to see if the characters can avoid the quicksand, sinkholes, and other natural hazards of the environment. If at least half the group succeeds, the successful characters are able to guide their companions out of danger. Otherwise, the group stumbles into one of these hazards.

[Difficulty Class]: #difficulty-class
[DC]: #difficulty-class
