---
title: Battlesmith (Artificer Subclass)
status: adapted
---

# Battlesmith

> *Arm and Protect your Allies with a Mechanical Companion*

Armies require protection, and someone has to put things back together if defenses fail. A combination  of protector and medic, a Battle Smith is an expert at defending others and repairing both material and personnel. To aid in their work, Battle Smiths are usually accompanied by a steel defender, a protective companion of their own creation. Many soldiers tell stories of nearly dying before being saved by a Battle Smith and a steel defender.

### Level 3: Tool of the Trade

You have proficiency with Smith's Tools. If you already have this proficiency, you gain proficiency with one other type of Artisan's Tools of your choice.

In addition, whenever you make an ability check with Smith's Tools, you can use your Intelligence as the ability, instead of Strength.

### Level 3: Battle Smith Spells

Your combat training as a Battle Smith ensures you always have certain spells ready. When you reach an Artificer level specified in the Battle Smith Spells table, you thereafter always have the listed spells prepared.

##### Battle Smith Spells

| Level | Spells |
|:-:|:--|
| 3 | [:spell-lv1: Heroism], [:spell-lv1: Shield] |
| 5 | [:spell-lv2: Aid], [:spell-lv2: Warding Bond] |
| 9 | [:spell-lv3: Aura of Vitality], [:spell-lv3: Elemental Weapon] |
| 13 | [:spell-lv4: Aura of Purity], [:spell-lv4: Fire Shield] |
| 17 | [:spell-lv5: Animate Objects], [:spell-lv5: Mass Cure Wounds] |

### Level 3: Battle Ready

Your combat training and your experiments with magic have paid off in two ways:

***Extra Proficiencies.*** You have proficiency with Martial weapons. 

***Intelligent Attacks.*** When you make an attack with a Magic weapon or a weapon that bears an Artificer Infusion with which you have proficiency, you can choose to use your Intelligence modifier for the attack and damage rolls, instead of Strength or Dexterity. 

### Level 3: Steel Defender

Your tinkering has borne you a companion, a steel defender. It's friendly to you and your companions, and it obeys your commands. See its game statistics in the Steel Defender stat block. You determine the creature's appearance and whether it has two legs or four; your choice has no effect on its game statistics.

***The Defender in Combat.*** In combat, the Defender shares your Initiative count, but it takes its turn immediately after yours. It can move and use its Reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a Bonus Action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you have the Incapacitated condition, the Defender can take any action of its choice, not just Dodge.

***Repairing or Replacing the Defender.*** If the [:spell-lv0: Mending] spell is cast on the Defender, it regains 2d6 Hit Points. If it has died within the last hour, you can use your Smith's Tools as an action to revive it, provided you are within 5 feet of it and you expend a spell slot of level 1 or higher. The Steel Defender returns to life after 1 minute with all its Hit Points restored.

At the end of a Long Rest, you can create a new Steel Defender if you have Smith's Tools with you. If you already have a Defender from this feature, the first one immediately perishes. The Defender also perishes if you die.


### Level 5: Extra Attack

You can attack twice, instead of once, whenever you take the Attack action on your turn.

In addition, you can cast one of your cantrip that has the casting time of an action in place of those attack.

### Level 9: Arcane Jolt

You've learned new ways to channel arcane energy to harm or heal. Once per turn when you hit a target with an attack, when a creature fails a save against your one of your spells, or your Steel Defender hits a target, you can channel magical energy through the strike to create one of the following effects:

***Damaging Jolt.*** The target takes an extra 2d6 :dmg-force: Force damage.

***Healing Jolt.*** Choose one creature or object you can see within 30 feet of the target. Healing energy flows into the chosen recipient, restoring 2d6 Hit Points to it.

You can use this energy a number of times equal to your Intelligence modifier (minimum of once), but you can do so no more than once on a turn. You regain all expended uses when you finish a long rest.

### Level 15: Improved Defender

Your Arcane Jolt and Steel Defender become more powerful:

***Improved Jolt.*** The extra damage and the healing of your Arcane Jolt both increase to 4d6.

***Protected Defender.*** Your Steel Defender gains a +2 bonus to Armour Class.

***Forceful Deflect.*** Whenever your Steel Defender uses its Deflect Attack, the attacker takes Force damage equal to 1d4 + your Intelligence modifier.

!!! statblock "Steel Defender"

    ## Steel Defender

    *Medium Construct*

    **AC** 15 (natural armour)  
    **HP** 2 + your Int. modifier + 5x your Artificer level  
    **Speed** 40 ft.  

    | | | MOD | SAVE | | | MOD | SAVE |
    |--:|:-:|:-:|:-:|--:|:-:|:-:|:-:|
    | **Str** | 14 | +2 | +2 | **Int** | 4 | -3 | -3 |
    | **Dex** | 12 | +1 | +1 + PB | **Wis** | 10 | +0 | +0 |
    | **Con** | 14 | +2 | +2 + PB | **Cha** | 6 | -2 | -2 |

    **Senses** Darkvision 60 ft., Passive Perception 10 + (PB x 2)  
    **Skills** Athletics +2 plus PB, Perception +0 plus PB x 2  
    **Immunities** Poison, Charmed, Exhaustion, Poisoned  
    **Languages** understands the languages you speak  
    **Proficiency Bonus** equals your bonus   

    #### Traits

    ***Vigilant.*** The defender can't be surprised.  

    #### Actions (Requires Your :rsc-b: Bonus Action)

    ***Force-Empowered Rend.*** *Melee Weapon Attack:* your spell attack modifier to hit, reach 5 ft., one target you can see. *Hit:* 1d8 + PB force damage.  

    ***Repair (3/Day).*** The magical mechanisms inside the defender restore 2d8 + PB hit points to itself or to one construct or object within 5 feet of it.  

    #### Reactions

    ***Deflect Attack.*** The defender imposes :d20-disadv: Disadvantage on the attack roll of one creature it can see that is within 5 feet of it, provided the attack roll is against a creature other than the defender.

--8<-- "includes/snippets/spells2/lv0.md"
--8<-- "includes/snippets/spells2/lv1.md"
--8<-- "includes/snippets/spells2/lv2.md"
--8<-- "includes/snippets/spells2/lv3.md"
--8<-- "includes/snippets/spells2/lv4.md"
--8<-- "includes/snippets/spells2/lv5.md"