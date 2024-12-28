---
icon: dmg/slsh
---

# Damage and Healing

Injury and death are frequent threats in D&D, as detailed in the following rules.

## Hit Points

Hit Points represent durability and the will to live. Creatures with more Hit Points are more difficult to kill. Your Hit Point maximum is the number of Hit Points you have when uninjured. Your current Hit Points can be any number from that maximum down to 0, which is the lowest Hit Points can go.

Whenever you take damage, subtract it from your Hit Points. Hit Point loss has no effect on your capabilities until you reach 0 Hit Points.

If you have half your Hit Points or fewer, you're Bloodied, which has no game effect on its own but which might trigger other game effects.

## Damage Rolls

Each weapon, spell, and damaging monster ability specifies the damage it deals. You roll the damage dice, add any modifiers, and deal the damage to your target. If there's a penalty to the damage, it's possible to deal 0 damage but not negative damage.

When attacking with a weapon, you add your ability modifier—the same modifier used for the attack roll—to the damage roll. A spell tells you which dice to roll for damage and whether to add any modifiers. Unless a rule says otherwise, you don't add your ability modifier to a fixed damage amount that does't use a roll, such as the damage of a Blowgun.

## Critical Hits

Scoring a Critical Hit on an attack roll results in dealing double damage.
 
**Example**: A ranger scoring a Critical Hit with a short sword (1d6 :dmg-prcg: Piercing damage) + 3 (Dexterity modifier). The ranger rolled 3 on the :die-d6: d6, dealing a total of 6 damage and it is doubled to 12 :dmg-prcg: Piercing damage as a result.

## Saving Throws and Damage

Damage dealt via saving throws uses these rules.

### Damage against Multiple Targets

When you create a damaging effect that forces two or more targets to make saving throws against it at the same time, roll the damage once for all the targets. For example, when a wizard casts Fireball, the spell's damage is rolled once for all creatures caught in the blast.

### Half Damage

Many saving throw effects deal half damage (round down) to a target when the target succeeds on the saving throw. The halved damage is equal to half the damage that would be dealt on a failed save.

## Damage Types

Each instance of damage has a type, like Fire or Slashing as defined in the Damage Type table.

=== "Physical Damage"

    |symbol| Name |description|
    |:-:|:--|:--|
    |:dmg-bldg:{ .xxl }| **Bludgeoning** | Damage from blunt force, such as from clubs, hammers, or falling. This type of damage crushes bones and armour. |
    |:dmg-prcg:{ .xxl }| **Piercing** | Damage from pointed weapons, such as arrows, spears, or teeth. This type of damage punctures and penetrates flesh and armour. |
    |:dmg-slsh:{ .xxl }|**Slashing** | Damage from edged weapons, such as swords, axes, or claws. This type of damage cuts and slices through flesh and armour. |

=== "Elemental Damage"

    |symbol| name |description|
    |:-:|:--|:--|
    |:dmg-acid:{ .xxl .dmg-acid }| **Acid**{ .dmg-acid } | Damage from corrosive substances that can eat through materials and flesh. Acid damage can dissolve objects and inflict severe burns. |
    |:dmg-cold:{ .xxl .dmg-cold }| **Cold**{ .dmg-cold } | Damage from extreme cold, such as ice and freezing temperatures. Cold damage can freeze enemies, slow movements, and cause frostbite. |
    |:dmg-fire:{ .xxl .dmg-fire }| **Fire**{ .dmg-fire } | Damage from flames and intense heat. Fire damage can ignite objects, cause burns, and spread rapidly. |
    |:dmg-lgtn:{ .xxl .dmg-lgtn }| **Lightning**{ .dmg-lgtn } | Damage from electrical energy, such as a lightning bolt. Lightning damage can shock, paralyze, and cause severe burns. |
    |:dmg-posn:{ .xxl .dmg-posn }| **Poison**{ .dmg-posn } | Damage from toxic substances, which can also inflict various conditions. Poison damage can cause illness, weakness, and death over time. |
    |:dmg-thun:{ .xxl .dmg-thun }| **Thunder**{ .dmg-thun } | Damage from sonic energy, often causing concussive force. Thunder damage can deafen, knock back, and crush enemies. |

=== "Magical Damage"

    |symbol| name |description|
    |:-:|:--|:--|
    |:dmg-force:{ .xxl .dmg-force }| **Force**{ .dmg-force } | Damage from pure magical energy. Force damage is highly effective against all targets and bypasses many defenses. |
    |:dmg-necr:{ .xxl .dmg-necr }| **Necrotic**{ .dmg-necr } | Damage from deathly energy, draining life force. Necrotic damage can wither flesh, drain vitality, and is particularly effective against living creatures. |
    |:dmg-psyc:{ .xxl .dmg-psyc }| **Psychic**{ .dmg-psyc } | Damage from mental energy, affecting the mind. Psychic damage can cause confusion, insanity, and severe mental trauma. |
    |:dmg-radi:{ .xxl .dmg-radi }| **Radiant**{ .dmg-radi } | Damage from intense, often holy or celestial, energy that can come from divine sources or powerful light-based effects. Radiant damage can purify and is particularly effective against undead and fiends. |

## :dmg-res: Resistance and :dmg-vul: Vulnerability

Some creatures and objects have **:dmg-res: Resistance**{ .em } or **:dmg-vul: Vulnerability**{ .em } to certain damage types. 

If you have **:dmg-res: Resistance**{ .em } to a damage type, damage of that type is **halved** against you (round down). 

If you have **:dmg-vul: Vulnerability**{ .em } to a damage type, damage of that type is **doubled** against you. 

For example, if you have **:dmg-res: Resistance**{ .em } to **:dmg-cold: Cold**{ .dmg-cold } damage, such damage is halved against you, and if you have **:dmg-vul: Vulnerability**{ .em } to **:dmg-fire: Fire**{ .dmg-fire } damage, such damage is doubled against you.

### No Stacking

Multiple instances of **:dmg-res: Resistance**{ .em } or **:dmg-vul: Vulnerability**{ .em } that affect the same damage type count as only one instance. For example, if you have **:dmg-res: Resistance**{ .em } to **:dmg-necr: Necrotic**{ .dmg-necr } damage as well as **:dmg-res: Resistance**{ .em } to all damage, **:dmg-necr: Necrotic**{ .dmg-necr } damage is reduced by half against you.

### Order of Application

Modifiers to damage are applied in the following order: 

1. **:material-plus: Adjustments** are applied **First**; such as Bonuses, Penalties, or Multipliers
2. **:dmg-res: Resistance**{ .em } is applied **Second** 
3. **:dmg-vul: Vulnerability**{ .em } is applied **Third**.

For example, a creature has **:dmg-res: Resistance**{ .em } to all damage, **:dmg-vul: Vulnerability**{ .em } to **:dmg-fire: Fire**{ .dmg-fire } damage, and a magical aura that reduces all damage by **5**. If it takes **28 :dmg-fire: Fire**{ .dmg-fire } damage, the calculation is as follows: first, the damage is reduced by 5 (28 --> 23). Next, **:dmg-res: Resistance**{ .em } halves the remaining damage (23 --> 11, rounded down). Finally, **:dmg-vul: Vulnerability**{ .em } doubles the damage (11 --> 22). The creature takes **22 :dmg-fire: Fire**{ .dmg-fire } in total.  

---  

## :dmg-imm: Immunity

Some creatures and objects have **:dmg-imm: Immunity**{ .em } to certain damage types and conditions. **:dmg-imm: Immunity**{ .em } to a damage type means you don't take damage of that type, and **:dmg-imm: Immunity**{ .em } to a condition means you aren't affected by it.

## Healing

Hit Points can be restored by magic, such as the Cure Wounds spell or a Potion of Healing, or by a Short or Long Rest.

When you receive healing, add the restored Hit Points to your current Hit Points. Your Hit Points can't exceed your Hit Point maximum, so any Hit Points regained in excess of the maximum are lost. For example, if you receive 8 Hit Points of healing and have 14 Hit Points and a Hit Point maximum of 20, you regain 6 Hit Points, not 8.

## Temporary Hit Points

Some spells and other effects confer Temporary Hit Points, which are a buffer against losing actual Hit Points, as explained below.

### Lose Temporary Hit Points First
If you have Temporary Hit Points and take damage, those points are lost first, and any leftover damage carries over to your Hit Points. For example, if you have 5 Temporary Hit Points and take 7 damage, you lose those points and then lose 2 Hit Points.

### Duration
Temporary Hit Points last until they're depleted or you finish a Long Rest (see the rules glossary).

### Temporary Hit Points Don't Stack

Temporary Hit Points can't be added together. If you have Temporary Hit Points and receive more of them, you decide whether to keep the ones you have or to gain the new ones. For example, if a spell grants you 12 Temporary Hit Points when you already have 10, you can have 12 or 10, not 22.

### They're Not Hit Points or Healing

Temporary Hit Points can't be added to your Hit Points, healing can't restore them, and receiving Temporary Hit Points doesn't count as healing. Because Temporary Hit Points aren't Hit Points, a creature can be at full Hit Points and receive Temporary Hit Points.

If you have 0 Hit Points, receiving Temporary Hit Points doesn't restore you to consciousness. Only true healing can save you.