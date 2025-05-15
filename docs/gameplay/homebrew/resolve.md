---
icon: material/door-open
---

!!! example "Experimental"

    You just stumbled into an **Experimental** mechanic!

# Resolve

> "If death doesn't take you, something else will.”

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

| d100 | d# | Name | Effect |
|:-:|:-:|---|---|
| | d4 |**Instantaneous**{.chev-lr} | |
| 01-06 | 1 | **Collapse** | The creature drops to 0 hit points. |
| 07-12 | 2 | **Collapse (Stable)** | The creature drops to 0 hit points but is stable (no death saves required). |
| 13-28 | 3 | **Moment of Denial** | Nothing happens. The creature powers through - for now. |
| 29-44 | 4 | **Barely Standing** | The creature's current Hit Points becomes to 10% of its Hit Point Maximum (rounded down). |
| == | d10 | **Meltdown**{.chev-lr} | |
| 45-48 | 1 | **Fearful** | The creature gains the **Frightened**{.cond} condition. |
| 49-52 | 2 | **Lethargic** | The creature gain 1 level of **Exhaustion**{.cond}. |
| 53-56 | 3 | **Masochistic** | The creature suffers `-2` to **AC** & has **:d20-dis: Disadvantage**{.d20} on CON checks & save |
| 57-60 | 4 | **Irrational** | The creature has **:d20-dis: Disadvantage**{.d20} on INT checks & save. |
| 61-64 | 5 | **Paranoid** | The creature **can't be targeted by spells or effects** that require it to be a **willing target**. |
| 65-68 | 6 | **Hopeless** | The creature has **:d20-dis: Disadvantage**{.d20} on STR checks & save. |
| 69-72 | 7 | **Selfish** | The creature has **:d20-dis: Disadvantage**{.d20} on CHA checks & save. |
| 73-76 | 8 | **Anxious** | The creature has **:d20-dis: Disadvantage**{.d20} on WIS checks & save. |
| 77-80 | 9 | **Abusive** | The creature adds `+1d8` to **damage rolls**, but `-1d8` to **attack rolls**. |
| 81-84 | 10 | **Mania** | The creature has **:d20-dis: Disadvantage**{.d20} on attack rolls. |
| == | d6 | **Resolute**{.chev-lr} | |
| 85-87 | 1 | **Stalwart** | The creature gains `+2` to **AC** & has **:d20-adv: Advantage**{.d20} on Death Saving Throw.<br>*"Many fall in the face of chaos; But not this one, not today"*{.quote} |
| 88-90 | 2 | **Courageous** | The creature's **:rsc-spd: Speed** increases by half of its base Speed & has **:d20-adv: Advantage**{.d20} on CHA checks & save.<br>*"A moment of valour shines brightest agaisnt a backdrop of despair"*{.quote} |
| 91-93 | 3 | **Focused** | The creature adds `+1d8` to its **attack rolls** & has **:d20-adv: Advantage**{.d20} on WIS checks & save.<br>*"A moment of clarity in the eye of the storm"*{.quote} |
| 94-96 | 4 | **Powerful** | The creature adds `+1d8` to its **damage rolls** & has **:d20-adv: Advantage**{.d20} on STR checks & save.<br>*"Anger is power - unleash it!"*{.quote} |
| 97-99 | 5 | **Vigorous** | The creature **regains Hit Points equal to half its Hit Point Maximum** & has **:d20-adv: Advantage**{.d20} on CON Save.<br>*"Adversity can foster hope and resilience"*{.quote} |
| 00 | 6 | **Indomitable** | The creature choose two Resolute effect of its choice.<br>*"Even the abyss recoils from such resolve."*{.quote} |