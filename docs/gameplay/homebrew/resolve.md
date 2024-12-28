---
icon: material/door-open
search:
  exclude: true
---

!!! homebrew "This is a Homebrew Mechanic!"

    You just stumbled into a Homebrew mechanic! This game material made by me, and is heavily inspired by Darkest Dungeon 1 and Darkest Dungeon 2.

# Resolve and Death's Door

The Resolve and Death's Door mechanic is introduced in Crown & Misery to add more unpredictability to combat. In simple terms, even if you're reduced to 0 HP, you're still in the game! This mechanic replaces the usual Death Saving Throws in regular D&D, allowing players to remain conscious at 0 HP with varying degrees of virtue and affliction.

## Death's Door

When reduced to 0 Hit Points but not killed outright, you remain conscious but are considered to be at *Death's Door*. You must immediately make a Resolve Check unless you are already under the effects of either **Resolute** or **Meltdown**.

- **Damage and Failures.** Each instance of damage from a single source counts as one 'Death :d20-save: **Saving Throw** Failure', with Critical Hits counting as two failures. Upon accumulating three failures or if the damage equals or exceeds your Hit Point maximum, you **die** instantly.
- **Stabilization.** While at Death's Door, anyone (including yourself) may attempt to stabilize you with a DC 10 Wisdom (Medicine) check. A successful check grants one 'Death :Saving Throw Success', with critical successes granting two. Upon gaining three 'Death Saving Thro Successes', you regain 1 Hit Point.
- **Healing.** Direct healing removes you from Death's Door and allows you to heal for the expected amount.

## Resolve Check

A Resolve Check is an :d20-check: **Ability Check** made to determine whether a creature gains the **Resolute** or **Meltdown** condition.

### Making a the check

- :material-plus-box-multiple: **Ability Modifier:** The Resolve Check is a pure d20 roll, meaning you ^^don't add any modifier^^ unless you have an ability or a feature that states otherwise.
- :material-shield-alert: **Difficulty Class:** The Resolve Check has a flat **DC of 17**. On a successful check, you gain the **Resolute** condition; on a failed check, you gain the **Meltdown** condition.

### When to Make a the check

A Resolve Check is made under two conditions:

1. :material-door-open: **Death's Door:** As mentioned above, when you are reduced to 0 Hit Points but not killed outright, you must immediately make a Resolve Check, ending the Death's Door state on a successful one.
2. :material-bullseye-arrow: **Massive Damage:** When you take damage from a single source equal to or greater than half your Hit Point maximum, you must make a :d20-save: **Saving Throw** using Intelligence, Wisdom, or Charisma (whichever has the highest ability modifier) with DC equals to 8 or half the damage you take, whichever number is higher (to a maximum of 18). On a failed save, you must make a Resolve Check.

#### Resolve Check Flow Chart

``` mermaid
graph LR;
    A[Character Receives Damage] --> B{Reduced to 0 HP or Massive Damage?};
    B -->|Reduced to 0 HP| C[Death's Door];
    B -->|Massive Damage| D[Massive Damage Check];
    
    C --> E[Resolve Check];
    E -->|Success DC 17| F[Gain Resolute Condition];
    E -->|Failure| G[Gain Meltdown Condition];
    
    D -->|Fail| E;
    D -->|Pass| H[No Further Action];

    C --> I[Damage from Single Source];
    I -->|Counts as One Failure| J[Death Saving Throw Failure];
    J -->|Three Failures or Damage >= Max HP| K[Death];
    I -->|Critical Hit| L[Counts as Two Failures];
    
    C --> M[Stabilization Attempt];
    M -->|Success DC 10 Wisdom| N[Death Saving Throw Success];
    N -->|Three Successes| O[Regain 1 HP];
    
    C --> P[Healing];
    P --> Q[Remove from Death's Door];
```

## Conditions: Resolute and Meltdown

### Resolute

The Resolute condition lasts for 10 minutes but can end early under the following conditions:

- **Unconcious.** You have the Unconscious condition.
- **Being Calmed.** Spell such as *Calm Emotions* is cast on you, requiring the caster to make an :d20-check: **Ability Check** using its spellcasting ability. The DC is equal to the highest Ability Score you have between Intelligence, Wisdom, or Charisma. On success, **Resolute** ends.

While this condition is in effect, you gain several benefits:

- **Recovery:** You restore Hit Points up to half of your lost Hit Points, and whenever you are at *Death's Door*, *Death's Door* ends immediately.
- **Suppressed Conditions:** Conditions such as *paralyzed*, *frightened,* and *charmed* on you are suppressed for the duration. When the duration ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.

Immediately after you receive this condition, you roll a d10 and gain a virtue depending on the result:

| :die-d10: d10 | VIRTUE | QUOTE |
| :-: | --- | --- |
| 1-2 | Courageous | "A moment of valour shines brightest against a backdrop of despair" |
| 3-4 | Focused | "A moment of clarity in the eye of the storm" |
| 5-6 | Powerful  | "Anger is power - unleash it!" |
| 7-8 | Stalwart | "Many fall in the face of chaos; But not this one, not today" |
| 9-10 | Steadfast | "Adversity can foster hope, and resilience" |

### Meltdown

The Meltdown condition lasts for 10 minutes but can end early under the following conditions:

- **Recovery.** You regain at least half of your Hit Point maximum.
- **Being Calmed.** Spell such as *Calm Emotions* is cast on you, requiring the caster to make an :d20-check: **Ability Check** using its spellcasting ability. The DC is equal to the highest Ability Score you have between Intelligence, Wisdom, or Charisma. On success, **Meltdown** ends.
- **Resting.** You finish a Short Rest or Long Rest.
- **Healed.** The spell *Greater Restoration* spell is cast on you.

Immediately after you receive this condition, you roll a d10 and gain an affliction depending on the result:

| :die-d10: d10 | AFFLICTION | QUOTE |
| :-: | --- | --- |
| 1-2 | Abusive | “Frustration and fury, more destructive than a hundred cannons” |
| 3-4 | Fearful | “Fear and frailty finally claim their due” |
| 5-6 | Hopeless | “There can be no hope in this hell, no hope at all.” |
| 7-8 | Irrational | “Reeling, gasping, taken over the edge into madness!” |
| 9-10 | Masochistic | “Those who covet injury find it in no short supply” |

> Taking additional damage in the **Meltdown** condition does not deduct from the total count of restored Hit Points. This means that if a creature has the **Meltdown** condition and then receives healing, any subsequent damage taken doesn't undo the progress made towards ending the condition.

## Virtues and Affliction

## Virtues

### Courageous

*"A moment of valour shines brightest agaisnt a backdrop of despair"*

- Whenever you or an ally within 30 ft. of you (provided the ally can see you) makes a D20 Test, it can roll a d4 and add the number rolled to the result.
- Conditions such as *charmed* or *frightened* that affects an ally that can see you within 30 ft. of you are supressed. When the creature is beyond 30ft. of you or can't see you, any suppressed effect immediately resumes, provided that its duration has not expired in the meantime.

### Focused

*"A moment of clarity in the eye of the storm"*

- The number you need to roll a Critical Hit and a Critical Success is reduced by 2. This effect can stack.
- Once per turn, when you miss an attack, you can choose to reroll the d20. You must use the new roll.
- Taking damage can't break your concentration on a spell. Any spells that you are concentrating on before gaining this virtue immediately resumes.

### Powerful

*"Anger is power - unleash it!"*

- Once per turn when you roll damage for a weapon attack or spell attack, you can choose one of the die and make it roll the maximum amount possible.
- When you force a creature to make a :d20-save: **Saving Throw** or a contested :d20-check: **Ability Check**, it make the :d20-save: **Saving Throw** or the :d20-check: **Ability Check** at a**:d20-disadv: Disadvantage**{ .d20 }.
- You have **:d20-adv: Advantage**{ .d20 } on Strength checks and Strength :d20-save: **Saving Throws**.

### Stalwart

*"Many fall in the face of chaos; But not this one, not today"*

- You reduce all damage received by a number equal to twice of your Proficiency Bonus (minimum of 1 damage).
- You can't be moved or being *prone* against your will.
- You have **:d20-adv: Advantage**{ .d20 } on Strength checks, Strength :d20-save: **Saving Throws** and Constitution :d20-save: **Saving Throws**.

### Vigorous

*"Adversity can foster hope, and resillience"*

- You immediately restore Hit Points equal to 1d10 + your Character level.
- Your gain +1 bonus to your AC and +2 to any :d20-save: **Saving Throw** you make.
- You gain bonus of 10 ft. movement speed.

## Affliction

### Abusive

*“Frustration and fury, more destructive than a hundred cannons”*

- You have **:d20-adv: Advantage**{ .d20 } on attack made using Strength and **:d20-disadv: Disadvantage**{ .d20 } on attack made using Dexterity.
- On each of your turn, you must make an attack to any creature that is within your reach.
- All creatures, including your ally can provoke opportunity attack from you, and you must use your **:rsc-r: Reaction**{ .rsc } when available to make an attack.

### Fearful

*“Fear and frailty finally claim their due”*

- You receive the *frightened* condition against the last creature that damage you.
- You are overcome with shaking, and have**:d20-disadv: Disadvantage**{ .d20 } on Dexterity :d20-save: **Saving Throw**.
- You are vulnerable to Psychic damage.
- You gain +10ft. of walking speed.

### Hopeless

*“There can be no hope in this hell, no hope at all.”*

- You have **:d20-disadv: Disadvantage**{ .d20 } on all attack rolls and :d20-check: **Ability Checks**.
- Whenever you regain Hit Point, the amount total is halved. This does not affect the progress in which **Meltdown** can be ended early.
- You are resistant to Psychic damage.
- Your **:rsc-spd: Speed**{ .rsc } is halved.

### Irrational

*“Reeling, gasping, taken over the edge into madness!”*

- You begins babbling and is incapable of normal speech. Spells that has the Verbal (V) component can't be cast.
- You have **:d20-disadv: Disadvantage**{ .d20 } on Intelligence and Wisdom :d20-save: **Saving Throws**.
- You can't take **:rsc-r: Reaction**{ .rsc } and must roll a :die-d10:d10 at the start of each of your turns to determine a behavior for that turn.
    
    | :die-d10:**d10** | **BEHAVIOUR** |
    | :-: | --- |
    | 1 | You uses all your movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. You cant take an **:rsc-a: Action**{ .rsc } this turn. |
    | 2-6 | You don't move or take actions this turn. |
    | 7-8 | You uses your **:rsc-a: Action**{ .rsc } to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, you does nothing this turn. |
    | 9-10 | You can act and move normally. |

### Massochistic

*“Those who covet injury find it in no short supply”*

- Your Armour Class is reduced by 2.
- Any damage you received is reduced by 2.
- You have **:d20-disadv: Disadvantage**{ .d20 } on Strength, Dexterity, and Constitution :d20-save: **Saving Throw**.
- You can't willingly move away from a hostile creature.