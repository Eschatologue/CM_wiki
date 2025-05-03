---
icon: ui/grenade
status: homebrew
---

# Grenades

Grenades are handheld explosive devices introduced to Antares by the Londoners. While the concept of delivering explosives in a throwable form isn't entirely new—often achieved through slinging SPells or using crude, rudimentary versions—the Londoners have perfected and standardised these weapons. Their grenades offer a precise and reliable way to unleash destructive power, making them a valuable, though expensive, tool on the battlefield.

## Using a Grenade

A Grenade can either be Thrown or it can be converted into traps in a form of Proximity Mines.

### Throwing Grenade

When you take the **:rsc-a: Attack**{.rsc} action, you can replace one of your attacks to either throw a grenade at a point up to 60 feet away or use a *Grenade* *Launcher(1)*{ .nowrap } to propel the grenade to a point up to 120 feet away. The grenade explodes at that point, creating a particular effect depending on the grenade's effect. 
{ .annotate }

1. **Grenade Launcher**

    --8<-- "docs/equipment/adventuring-gear/item-hb.md:item-grenade-launcher"

### Planting Grenade

You can convert your grenades to proximity mines, provided you are proficient with [Tinker's Tools](../tools/artisan-tools.md#tinkers-tools) or [Gunsmith's Tools](../tools/artisan-tools.md#gunsmiths-tools). 

**Making the Mines**{.inl} For 1 hour, which can coincides with a **:rest-short: Short Rest**, you can convert a number of Grenades up to your Proficiency Bonus into a proximity mine using the aforementioned tools. 

**Planting the Mines**{.inl} As a **:rsc-a: Utilise**{.rsc} action, you can plant them in the ground in your space. On the next turn, whenever a creature (includes you) enters a space within 15 feet of the proximity mine for the first time on a turn or ends its turn there, it explodes at that point, creating a particular effect depending on the grenade's effect.

It's obvious to observers that you're doing something when you take this Action.

## Grenade Descriptions

Below are the effects of each grenade.

**Conccussion** <br>_500 SP, S._

:   This grenade explodes in a concussive blast that fills a **20-foot-radius :aoe-sphere: Sphere**. Each creature in that area must make a **:d20-save: DEX Save (DC 14)**{.d20}, taking **4d6 :dmg-force: Force**{ .dmg-force } damage on a failed save or half as much damage on a successful one.

**Cryogenic** <br>_300 SP, S._

:   This grenade detonates in a burst of frost that fills **20-foot-radius :aoe-sphere: Sphere**. Each creature in that area must make a **:d20-save: CON Save (DC 14)**{.d20}, taking **2d6 :dmg-cold: Cold**{ .dmg-cold } damage from the grenade and have its **:rsc-spd: Speed**{ .em } halved for 1 minute on a failed save. Affected creatures can repeat this save at the start of each of their turns, ending the slowing effect on a success. On a successful save, the creature takes only half damage and suffers no additional effects. 

    Creatures with **:dmg-res: Resistance** to **:dmg-cold: Cold**{ .dmg-cold } damage have **:d20-adv: Advantage**{.d20} on the saving throw, while those with **:dmg-imm: Immunity** automatically succeed.

**Fragmentation** <br>_250 SP, S._

:   This grenade explodes, unleashing a hail of metal fragments that fills a **20-foot-radius :aoe-sphere: Sphere**. Each creature in the area must make on a **:d20-save: DEX Save (DC 14)**{.d20},  taking **3d6 :dmg-prcg: Piercing**{ .dmg-bps } damage on a failed save or half as much damage on a successful one.


**Flashbang** <br>_300 SP, S._

:   This grenade explodes in a blinding flash and a deafening bang that affect a **20-foot-radius :aoe-sphere: Sphere**. Each creature in the area must make a **:d20-save: CON Save (DC 14)**{.d20}, taking **2d6 :dmg-thun: Thunder**{ .dmg-thun } damage and have the **Blinded**{ .cond } and **Deafened**{ .cond } condition for 1 minute on a failed save, or half as much on a successful save with no additional effects. 

    Affected creatures can repeat the save at the start of each of their turns, ending the effect on a success. On a successful save, the creature takes only half damage and suffers no additional effects.

**Incendiary** <br>_300 SP, S._

:   This grenade bursts into flames that fills a **20-foot-radius :aoe-sphere: Sphere**. Each creature in the affected area must make a **:d20-save: DEX Save (DC 14)**{.d20} taking **3d6 :dmg-fire: Fire**{ .dmg-fire } damage on a failed save. 

    The ground within the Sphere is set ablaze for 1 minute and its is considered a [Burning](../../gameplay/phb/exploration.md#burning) hazard. 

**Sleep** <br>_800 SP, S._

:   This grenade releases a cloud of sedative mist that fills a **20-foot-radius :aoe-sphere: Sphere**, then dissipates. Each creature in that area must succeed on a **:d20-save: CON Save (DC 14)**{.d20} or have the **Unconscious**{ .cond } condition for 1 hour. The condition ends on a creature early if the creature takes damage or if another creature uses an Action to shake it awake.


**Smoke** <br>_500 SP, S._

:   This grenade creates a create a **20-foot-radius :aoe-sphere: Sphere** of fog centered on the target. The area of the Sphere is Heavily Obscured by smoke for 1 minute. A strong wind (such as the *Gust of Wind* SPell) disperses the smoke.


--8<-- "includes/snippets/inv-notation.md"