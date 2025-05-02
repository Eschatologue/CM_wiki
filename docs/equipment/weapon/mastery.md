---
title: Mastery properties
icon: wp/mas
search:
boost: 1.2
---

# Mastery properties

Each weapon has a Mastery property, which is usable only by a character who has a feature, such as Weapon Mastery, that unlocks the property for the character. The properties are defined below witht the following details:

<!-- **Type**{.inl} A Mastery property applies to specific weapon type; either Melee or Ranged weapons.

**Properties**{.inl} A Mastery property is only eligible to weapons that has specific Weapon properties, or sometimes the weapon itself must have no Properties. -->

## Homebrew Addition

To give more options for martial classess, the folowing homebrew rules are implemented.

### Replaceable Weapon Mastery  

When selecting weapons for Weapon Mastery, you can also **replace the Mastery property** of any weapon you are using with another eligible property. For example, you could change a Longsword's **:wp-mas: Sap**{.wp} property to **:wp-mas: Flex**{.wp}.  

These changes only affect the character who makes them. If a Barbarian replaces a Glaive’s **:wp-mas: Graze**{.wp} property with **:wp-mas: Cleave**{.wp}, other characters using the same Glaive still use its default **:wp-mas: Graze**{.wp} property.  

### Repeated Weapon Mastery

When selecting weapons for Weapon Mastery, you can instead **assign an additional _eligible_ Mastery property** to a weapon you already chose. A weapon can have **no more than six** mastery properties at a time.

If a weapon has multiple mastery properties, you can **only use one of them per attack**. You must choose which mastery property you're using before making the attack. This is true for Mastery properties which effects occurs upon a **hit** (e.g. **:wp-mas: Topple**{.wp}), an **attack** (e.g. **:wp-mas: Nick**{.wp}), or a **miss** (e.g.**:wp-mas: Graze**{.wp}). 

For example, a Level 1 Barbarian could choose to apply either **:wp-mas: Cleave**{.wp} or **:wp-mas: Graze**{.wp} when attacking with a Greataxe, instead of selecting a second weapon for Weapon Mastery. Likewise, a Level 1 Rogue could choose either **:wp-mas: Nick**{.wp} or **:wp-mas: Slow**{.wp} for a Dagger.  

## Mastery Properties Description

The following Mastery Properties are available

### Cleave {.noborder}

_**Prerequisites:** Melee Weapon; **:wp-prop-heavy: Heavy**{.wp}_

<hr class="hr-solid">

If you hit a creature with a melee attack using this weapon, you can make an attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.

---

### Graze {.noborder}

_**Prerequisites:** Melee Weapon; **:wp-prop-heavy: Heavy**{.wp}_

<hr class="hr-solid">

If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can't be increased in any way, other than increasing the ability modifier.

---

### Nick {.noborder}

_**Prerequisites:** Melee Weapon; **:wp-prop-light: Light**{.wp}_

<hr class="hr-solid">

When you make the [extra attack](index.md#light) of the **:wp-prop-light: Light**{.wp} property, you can make it as part of the **:rsc-a: Attack**{ .rsc } action instead of as a **:rsc-b: Bonus Action**{ .rsc }. You can make this extra attack only once per turn.

---

### Push {.noborder}

_**Prerequisites:** Melee or Ranged Weapon; **:wp-prop-heavy: Heavy**{.wp}, **:wp-prop-two-handed: Two-Handed**{.wp}, or **:wp-prop-versatile: Versatile**{.wp}_

<hr class="hr-solid">

If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.

---

### Sap {.noborder}

_**Prerequisites:** Melee or Ranged Weapon; **:wp-prop-versatile: Versatile**{.wp} or **:wp-prop-none: No Properties**{.wp}_

<hr class="hr-solid">

If you hit a creature with this weapon, that creature has **:d20-dis: Disadvantage**{.d20} on its next attack roll before the start of your next turn.

---

### Slow {.noborder}

_**Prerequisites:** Melee or Ranged Weapon; Any Properties_

<hr class="hr-solid">

If you hit a creature with this weapon and deal damage to the creature, you can reduce its **:rsc-spd: Speed** by 10 feet until the start of your next turn. If you hit the creature more than once with this property, the Speed reduction doesn't exceed 10 feet.

---

### Topple {.noborder}

_**Prerequisites:** Melee or Ranged Weapon; **:wp-prop-heavy: Heavy**{.wp}, **:wp-prop-reach: Reach**{.wp}, or **:wp-prop-versatile: Versatile**{.wp}_

<hr class="hr-solid">

If you hit a creature with this weapon, you can force the creature to make a **:d20-save: CON Save**{.d20} with a **DC** equal to 8 + your Proficiency Bonus + the ability modifier used to make the attack roll. On a failed save, the creature has the **Prone**{.cond} condition.

---

### Vex {.noborder}

_**Prerequisites:** Melee or Ranged Weapon; **:wp-prop-ammunition: Ammunition**{.wp}, **:wp-prop-finesse: Finesse**{.wp}, or **:wp-prop-light: Light**{.wp}_

<hr class="hr-solid">

If you hit a creature with this weapon and deal damage to the creature, you have **:d20-adv: Advantage**{.d20} on your next attack roll against that creature before the end of your next turn.

---

### Agile :material-glass-mug-variant:{title="Homebrew" .fg-light} {.noborder}

_**Prerequisites:** Melee or Ranged Weapon; **:wp-prop-light: Light**{.wp} or **:wp-prop-versatile: Versatile**{.wp}_

<hr class="hr-solid">

Before or after making an attack with this weapon, you can move up to 5 feet without provoking **:rsc-r: Opportunity Attack**{ .rsc }. You can't move in his way if your **:rsc-spd: Speed** is 0.

---

### Brace :material-glass-mug-variant:{title="Homebrew" .fg-light} {.noborder}

_**Prerequisites:** Melee or Ranged Weapon; **:wp-prop-heavy: Heavy**{.wp} or **:wp-prop-two-handed: Two-Handed**{.wp}_

<hr class="hr-solid">

On your turn, you can spend an amount of movement equal to half your **:rsc-spd: Speed** (rounded *up* to the nearest 5-foot increment) to brace your weapon. Until the end of your turn, whenever you damage creatures with this weapon, you roll the weapon's damage dice twice and use either result (e.g, A Wood Elf with 35 ft. speed must spend 20 ft. to use this Mastery property).

---

### Expose :material-glass-mug-variant:{title="Homebrew" .fg-light} {.noborder}

_**Prerequisites:** Melee or Ranged Weapon; **:wp-prop-ammunition: Ammunition**{.wp}, **:wp-prop-heavy: Heavy**{.wp}, **:wp-prop-versatile: Versatile**{.wp} or deals **:dmg-bldg: Bludgeoning**{.dmg-bps} damage_

<hr class="hr-solid">

If you hit a creature with this weapon and deal damage to the creature, the next attack roll by a creature other than you against that creature has **:d20-adv: Advantage**{.d20} until the start of your next turn.

---

### Flex :material-glass-mug-variant:{title="Homebrew" .fg-light} {.noborder}

_**Prerequisites:** Melee Weapon; **:wp-prop-versatile: Versatile**{.wp}_

<hr class="hr-solid">

When you hit a melee attack using this weapon, you deal its **:wp-prop-versatile: Versatile**{.wp} damage even if you're wielding it with one hand. 

---

### Flurry :material-glass-mug-variant:{title="Homebrew" .fg-light} {.noborder}

_**Prerequisites:** Melee Weapon; **:wp-prop-light: Light**{.wp}_

<hr class="hr-solid">

If your attack roll with this weapon misses a creature, you can immediately make another attack against that creature *with the same weapon*. You don't add your ability modifier to this attack's damage unless it's negative. You can only make this additional attack once per turn.

---

### Parry :material-glass-mug-variant:{title="Homebrew" .fg-light} {.noborder}

_**Prerequisites:** Melee Weapon; **:wp-prop-finesse: Finesse**{.wp} or **:wp-prop-versatile: Versatile**{.wp}_

<hr class="hr-solid">

While wielding this weapon, when a creature makes a Melee attack roll against you, you can use your **:rsc-r: Reaction**{.rsc} to add *the ability modifier you use for attacks with this weapon* to your AC against that attack, potentially turning it into a miss. 

---

### Speedload :material-glass-mug-variant:{title="Homebrew" .fg-light} {.noborder}

_**Prerequisites:** Ranged Weapon; **:wp-prop-ammunition: Ammunition**{.wp} or **:wp-prop-loading: Loading**{.wp}_

<hr class="hr-solid">

You ignore the **:wp-prop-loading: Loading**{.wp} property of this weapon and you don't need another free hand to load ammunition into the weapon.

---

### Split :material-glass-mug-variant:{title="Homebrew" .fg-light} {.noborder}

_**Prerequisites:** Melee Weapon; **:wp-prop-finesse: Finesse**{.wp}_

<hr class="hr-solid">

When you take the **:rsc-a: Attack**{ .rsc } action on your turn and attack with this weapon ^^with one hand^^, you can make one extra attack as a **:rsc-b: Bonus Action**{ .rsc } later on the same turn. That extra attack must be made with a ^^different^^ **:wp-prop-finesse: Finesse**{.wp} weapon, and you don't add your ability modifier to the extra attack's damage, unless that modifier is negative.

!!! tips "Off-hand Attacks"

    Certain features, such as the [:option-feat-fighting: Two-Weapon Fighting](../../option/feat/feat-fighting-style/phb24.md#two-weapon-fighting) style, apply to this extra attack as if the weapon had the **:wp-prop-light: Light**{.wp} property, allowing you to add your ability modifier to the damage if the feature normally permits it.

---