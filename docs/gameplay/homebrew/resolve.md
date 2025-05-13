---
icon: material/door-open
---

!!! example "Experimental"

    You just stumbled into an **Experimental** mechanic!
# Resolve

> *“If death doesn't take you, something else will.”

**Resolve** is a measure of how a creature reacts when pushed beyond its limits - mentally, physically, or emotionally. When a creature endures overwhelming trauma, it must roll on the **Resolve Result Table**, representing a sudden mental fracture, instinctual response, or psychosomatic effect.

## When to Roll

A creature roll on the **Resolve Result Table** under the following condition:

**Receive Massive Damage**

:   When a Creature takes damage from a single source equal to or greater than **half its hit point maximum**, it must succeed an **Intelligence, Wisdom, or Charisma saving throw** (the creature's choice) or it must roll on the **Resolve Result Table**. The DC equals 10 or half the damage taken (round down), whichever number is higher, up to a maximum DC of 30.

**Reduced to 0 Hit Points**

:   Once per **:rest-long: Long Rest**, when a creature is reduced to **0 Hit points**, it may choose to roll on the **Resolve Result table** instead of falling Unconscious and making death saving throws. If it does so, it immediately gains 1 Hit Point and the creature roll in the **Resolve Result table** as normal

**Special Case**{.inl} If a creature takes massive damage **and** is reduced to 0 hit points at the same time, it rolls **only once**.

## Resolve Result

When a creature is required to roll on the **Resolve Result Table**, it gains a random effect that reflects its physical or mental response to extreme trauma. Most outcomes are negative or debilitating, though some are beneficial — rare moments of clarity, adrenaline, or grim resolve.

Resolve result persist until the creature finishes a **:rest-long: Long Rest** or until the [:spell-lv2: Calm Emotions](../../spells/description/core/level-2.md#calm-emotions) spell is cast on it.

**Duplicate Results**{.inl} If a creature rolls a result it already has, it imediately ends the current result.

**Resolve Effects as Conditions**{.inl} Effects gained from the Resolve Result Table are treated as Conditions for the purpose of spells, abilities, and other game mechanics that references conditions with the exception of **Collapses**, **Moment of Denial**, and **Barely Standing**

##### Resolve Result

| d100 | Affliction | Effect |
|:-:|---|---|
| == | **Instantaneous**{.chev-lr} | |
| 01-06 | **Collapse** | The creature drops to 0 hit points. |
| 07-12 | **Collapse (Stable)** | The creature drops to 0 hit points but is stable (no death saves required). |
| 13-35 | **Moment of Denial** | Nothing happens. The creature powers through - for now. |
| 36-49 | **Barely Standing** | The creature's current Hit Points becomes to 10% of its Hit Point Maximum (rounded down). |
| == | **Meltdown**{.chev-lr} | |
| 50-53 | **Fearful** | The creature gains the **Frightened**{.cond} condition. |
| 54-57 | **Lethargic** | The creature gain 1 level of **Exhaustion**{.cond}. |
| 58-61 | **Masochistic** | The creature suffers `-2` to **AC** & has **:d20-dis: Disadvantage**{.d20} on CON checks & save |
| 62-64 | **Irrational** | The creature has **:d20-dis: Disadvantage**{.d20} on INT checks & save. |
| 65-70 | **Paranoid** | The creature **can't be targeted by spells or effects** that require it to be a **willing target**. |
| 71-73 | **Hopeless** | The creature has **:d20-dis: Disadvantage**{.d20} on STR checks & save. |
| 74-77 | **Selfish** | The creature has **:d20-dis: Disadvantage**{.d20} on CHA checks & save. |
| 78-81 | **Anxious** | The creature has **:d20-dis: Disadvantage**{.d20} on WIS checks & save. |
| 82-85 | **Abusive** | The creature adds `+1d8` to **damage rolls**, but `-1d8` to **attack rolls**. |
| 86-89 | **Mania** | The creature has **:d20-dis: Disadvantage**{.d20} on attack rolls. |
| == | **Resolute**{.chev-lr} | |
| 90-91 | **Stalwart** | The creature gains `+2` to **AC** & has **:d20-adv: Advantage**{.d20} on Death Saving Throw. |
| 92-93 | **Courageous** | The creature's **:rsc-spd: Speed** increases by half of its base Speed & has **:d20-adv: Advantage**{.d20} on CHA checks & save. |
| 94-95 | **Focused** | The creature adds `+1d8` to its **attack rolls** & has **:d20-adv: Advantage**{.d20} on WIS checks & save. |
| 96-97 | **Powerful** | The creature adds `+1d8` to its **damage rolls** & has **:d20-adv: Advantage**{.d20} on STR checks & save. |
| 98-99 | **Vigorous** | The creature **regains Hit Points equal to half its Hit Point Maximum** & has **:d20-adv: Advantage**{.d20} on CON Save. |
| 00 | **Indomitable** | The creature choose two Resolute effect of its choice. |