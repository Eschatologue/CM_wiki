---
title: Mastery properties
icon: material/tailwind
search:
boost: 1.2
---

# Mastery properties

Each weapon has a Mastery property, which is usable only by a character who has a feature, such as Weapon Mastery, that unlocks the property for the character. The properties are defined below witht the following details:

**Type**{ .inl } A Mastery property applies to specific weapon type; either Melee or Ranged weapons.

**Properties**{ .inl } A Mastery property is only eligible to weapons that has specific Weapon properties, or sometimes the weapon itself must have no Properties.

## Homebrew Addition

To give more options for martial classess, the folowing homebrew rules are implemented. You may refer to the Weapon Mastery table to see which weapon are eligible.

| Weapon Type | Eligible Mastery |
|---|---|
| Light Melee | Agile, Flurry, Nick, Vex |
| Medium Melee (Melee weapons without Heavy or Light) | Brace, Expose, Push, Sap, Slow, Topple |
| Heavy Melee | Cleave, Graze, Push, Topple |
| Ranged | Expose, Sap, Slow, Vex |
| Automatic Ranged | Spray, Tap |
| Firearms (Reload 8+) | Spray |

### Replaceable Weapon Mastery  

When selecting weapons for Weapon Mastery, you can also **replace the Mastery property** of any weapon you are using with another eligible property. For example, you could change a Longsword’s [Sap](#sap) property to [Flex](#flex).  

These changes only affect the character who makes them. If a Barbarian replaces a Glaive’s [Graze](#graze) property with [Cleave](#cleave), other characters using the same Glaive still use its default [Graze](#graze) property.  

### Repeated Weapon Mastery

When selecting weapons for Weapon Mastery, you can instead **assign an additional _eligible_ Mastery property** to a weapon you already chose. A weapon can have **no more than four** mastery properties at a time.

If a waeapon has multiple mastery properties, you can **only use one of them per attack**. You must choose which mastery property you're using before making the attack.

For example, a Level 1 Barbarian could choose to apply either [Cleave](#cleave) or [Graze](#graze) when attacking with a Greataxe, instead of selecting a second weapon for Weapon Mastery. Likewise, a Level 1 Rogue could choose either [Nick](#nick) or [Slow](#slow) for a Dagger.  

## Mastery Properties Description

The Mastery Properties are divided into two groups PHB'24 & Homebrew.

## PHB'24

The following Mastery properties are lined in PHB'24

---

### Cleave

**Type:** Melee Weapon  
**Properties:** :weapon-prop-heavy: Heavy

If you hit a creature with a melee attack using this weapon, you can make an attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.

---

### Graze

**Type:** Melee Weapon  
**Properties:** :weapon-prop-heavy: Heavy

If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can't be increased in any way, other than increasing the ability modifier.

---

### Nick

**Type:** Any  
**Properties:** :weapon-prop-light: Light

When you make the [extra attack](index.md#light) of the **:weapon-prop-light: Light** property, you can make it as part of the **:rsc-a: Attack**{ .rsc } action instead of as a **:rsc-b: Bonus Action**{ .rsc }. You can make this extra attack only once per turn.

---

### Push

**Type:** Any  
**Properties:** :weapon-prop-heavy: Heavy, :weapon-prop-two-handed: Two-Handed, or :weapon-prop-versatile: Versatile

If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.

---

### Sap 

**Type:** Any  
**Properties:** :weapon-prop-versatile: Versatile or No Weapon Property

If you hit a creature with this weapon, that creature has **:d20-dis: Disadvantage**{ .d20 } on its next attack roll before the start of your next turn.

---

### Slow 

**Type:** Any  
**Properties:** Any

If you hit a creature with this weapon and deal damage to the creature, you can reduce its Speed by 10 feet until the start of your next turn. If you hit the creature more than once with this property, the Speed reduction doesn't exceed 10 feet.

---

### Topple 

**Type:** Any  
**Properties:** :weapon-prop-heavy: Heavy, :weapon-prop-reach: Reach, or :weapon-prop-versatile: Versatile

If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw with a DC equal to 8 + your Proficiency Bonus + the ability modifier used to make the attack roll. On a failed save, the creature has the Prone condition.

---

### Vex 

**Type:** Any  
**Properties:** :weapon-prop-ammunition: Ammunition, :weapon-prop-finesse: Finesse, or :weapon-prop-light: Light

If you hit a creature with this weapon and deal damage to the creature, you have **:d20-adv: Advantage**{ .d20 } on your next attack roll against that creature before the end of your next turn.

---

## Homebrew

The following Mastery properties are homebrew.

---

### Agile 

**Type:** Melee weapon  
**Properties:** :weapon-prop-light: Light or :weapon-prop-versatile: Versatile

Before or after making an attack with this weapon, you can move up to 5 feet without provoking **:rsc-r: Opportunity Attack**{ .rsc }. You can't move in his way if your **:rsc-spd: Speed** is 0.

---

### Brace 

**Type:** Any  
**Properties:** :weapon-prop-heavy: Heavy or :weapon-prop-versatile: Versatile

When you make an attack with this weapon, you can expend 15 feet of your **:rsc-spd: Speed**{ .em }. On hit, you roll the weapon damage dice twice and you can use either result. If the attack misses, your **:rsc-spd: Speed**{ .em } isn't reduced. 

---

### Expose 

**Type:** Any  
**Properties:** No :weapon-prop-light: Light property.

If you hit a creature with this weapon and deal damage to the creature, the next attack roll by a creature other than you against that creature has **:d20-adv: Advantage**{ .d20 } until the start of your next turn.

---

### Flex 

**Type:** Melee weapon  
**Properties:** :weapon-prop-versatile: Versatile

When you hit a melee attack using this weapon, you deal its **:weapon-prop-versatile: Versatile** damage even if you're wielding it with one hand.

---

### Flurry

**Type:** Melee weapon  
**Properties:** :weapon-prop-light: Light

If your attack roll with this weapon misses a creature, you can immediately make another attack against that creature *with the same weapon*. You don't add your ability modifier to this attack's damage unless it's negative. You can only make this additional attack once per turn.

---

### Spray 

**Type:** Ranged weapon  
**Properties:** :weapon-prop-automatic: Automatic and :weapon-prop-reload: Reload (8+)

When you take the **:rsc-a: Attack**{ .rsc } action, you can choose to expend 8 pieces of the weapon's ammunition to spray shots in a **15-foot :aoe-cube: Cube** within the weapon's normal range. Each creature in that area must succeed on a **:d20-save: DEX save**{ .d20 } against your [Weapon Save DC](index.md#weapon-save-dc) or take the Weapon's damage. You can't make this special attack if you have less than 8 ammunition in the weapon.

---

### Tap 

**Type:** Ranged weapon  
**Properties:** :weapon-prop-automatic: Automatic

Once per turn, when you make an **:weapon-prop-automatic: Automatic** attack using this weapon, you can add your ability modifier to the damage roll of the second attack.

---


