---
title: Mastery properties
icon: wp/mas
search:
boost: 1.2
---

# Mastery properties

Each weapon has a Mastery property, which is usable only by a character who has a feature, such as Weapon Mastery, that unlocks the property for the character. The properties are defined below witht the following details:

**Type**{ .inl } A Mastery property applies to specific weapon type; either Melee or Ranged weapons.

**Properties**{ .inl } A Mastery property is only eligible to weapons that has specific Weapon properties, or sometimes the weapon itself must have no Properties.

## Homebrew Addition

To give more options for martial classess, the folowing homebrew rules are implemented. You may refer to the Weapon Mastery table to see which weapon are eligible.

<div class="grid" markdown>

| Weapon Type | Eligible Mastery |
|---|---|
| Light melee | **:wp-mas: Agile**{ .wp }, **:wp-mas: Flurry**{ .wp }, **:wp-mas: Nick**{ .wp }, **:wp-mas: Vex**{ .wp } |
| Medium melee[^1] | **:wp-mas: Brace**{ .wp }, **:wp-mas: Expose**{ .wp }, **:wp-mas: Push**{ .wp }, **:wp-mas: Sap**{ .wp }, **:wp-mas: Slow**{ .wp }, **:wp-mas: Topple**{ .wp } |
| Heavy melee | **:wp-mas: Brace**{ .wp }, **:wp-mas: Cleave**{ .wp }, **:wp-mas: Graze**{ .wp }, **:wp-mas: Push**{ .wp }, **:wp-mas: Topple**{ .wp } |

| Weapon Type | Eligible Mastery |
|---|---|
| Ranged | **:wp-mas: Expose**{ .wp }, **:wp-mas: Sap**{ .wp }, **:wp-mas: Slow**{ .wp }, **:wp-mas: Vex**{ .wp } |
| Heavy ranged | **:wp-mas: Brace**{ .wp }, **:wp-mas: Push**{ .wp } |
| Automatic ranged | **:wp-mas: Spray**{ .wp }[^2], **:wp-mas: Tap**{ .wp } |

</div>

[^1]: Melee Weapons that lacks both **:wp-prop-light: Light**{ .wp } and **:wp-prop-heavy: Heavy**{ .wp } property

[^2]: Must have **:wp-prop-reload: Reload (8+)**{ .wp } property

### Replaceable Weapon Mastery  

When selecting weapons for Weapon Mastery, you can also **replace the Mastery property** of any weapon you are using with another eligible property. For example, you could change a Longsword’s **:wp-mas: Sap**{ .wp } property to **:wp-mas: Flex**{ .wp }.  

These changes only affect the character who makes them. If a Barbarian replaces a Glaive’s **:wp-mas: Graze**{ .wp } property with **:wp-mas: Cleave**{ .wp }, other characters using the same Glaive still use its default **:wp-mas: Graze**{ .wp } property.  

### Repeated Weapon Mastery

When selecting weapons for Weapon Mastery, you can instead **assign an additional _eligible_ Mastery property** to a weapon you already chose. A weapon can have **no more than four** mastery properties at a time.

If a waeapon has multiple mastery properties, you can **only use one of them per attack**. You must choose which mastery property you're using before making the attack.

For example, a Level 1 Barbarian could choose to apply either **:wp-mas: Cleave**{ .wp } or **:wp-mas: Graze**{ .wp } when attacking with a Greataxe, instead of selecting a second weapon for Weapon Mastery. Likewise, a Level 1 Rogue could choose either **:wp-mas: Nick**{ .wp } or **:wp-mas: Slow**{ .wp } for a Dagger.  

## Mastery Properties Description

The Mastery Properties are divided into two groups PHB'24 & Homebrew.

## PHB'24

The following Mastery properties are lined in PHB'24

---

### Cleave

If you hit a creature with a melee attack using this weapon, you can make an attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.

---

### Graze

If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can't be increased in any way, other than increasing the ability modifier.

---

### Nick

When you make the [extra attack](index.md#light) of the **:wp-prop-light: Light** property, you can make it as part of the **:rsc-a: Attack**{ .rsc } action instead of as a **:rsc-b: Bonus Action**{ .rsc }. You can make this extra attack only once per turn.

---

### Push

If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.

---

### Sap 

If you hit a creature with this weapon, that creature has **:d20-dis: Disadvantage**{ .d20 } on its next attack roll before the start of your next turn.

---

### Slow 

If you hit a creature with this weapon and deal damage to the creature, you can reduce its Speed by 10 feet until the start of your next turn. If you hit the creature more than once with this property, the Speed reduction doesn't exceed 10 feet.

---

### Topple 

If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw with a DC equal to 8 + your Proficiency Bonus + the ability modifier used to make the attack roll. On a failed save, the creature has the Prone condition.

---

### Vex 

If you hit a creature with this weapon and deal damage to the creature, you have **:d20-adv: Advantage**{ .d20 } on your next attack roll against that creature before the end of your next turn.

---

## Homebrew

The following Mastery properties are homebrew.

---

### Agile 

Before or after making an attack with this weapon, you can move up to 5 feet without provoking **:rsc-r: Opportunity Attack**{ .rsc }. You can't move in his way if your **:rsc-spd: Speed** is 0.

---

### Brace 

When you make an attack with this weapon, you can expend 15 feet of your **:rsc-spd: Speed**{ .em }. On hit, you roll the weapon damage dice twice and you can use either result. If the attack misses, your **:rsc-spd: Speed**{ .em } isn't reduced. 

---

### Expose 

If you hit a creature with this weapon and deal damage to the creature, the next attack roll by a creature other than you against that creature has **:d20-adv: Advantage**{ .d20 } until the start of your next turn.

---

### Flex 

When you hit a melee attack using this weapon, you deal its **:wp-prop-versatile: Versatile** damage even if you're wielding it with one hand.

---

### Flurry

If your attack roll with this weapon misses a creature, you can immediately make another attack against that creature *with the same weapon*. You don't add your ability modifier to this attack's damage unless it's negative. You can only make this additional attack once per turn.

---

### Spray 


When you take the **:rsc-a: Attack**{ .rsc } action, you can choose to expend 8 pieces of the weapon's ammunition to spray shots in a **15-foot :aoe-cube: Cube** within the weapon's normal range. Each creature in that area must succeed on a **:d20-save: DEX save**{ .d20 } against your [Weapon Save DC](index.md#weapon-save-dc) or take the Weapon's damage. You can't make this special attack if you have less than 8 ammunition in the weapon.

---

### Tap 

Once per turn, when you make an **:wp-prop-automatic: Automatic** attack using this weapon, you can add your ability modifier to the damage roll of the second attack.

---


