---
title: "Quick Reference"
hide: 
    - navigation
search:
  exclude: true
icon: material/fast-forward
---

:die-d4:{.x3l} :die-d6:{.x3l} :die-d8:{.x3l} :die-d10:{.x3l} :die-d12:{.x3l} :die-d20:{.x3l}
{ .align-center }

# Quick Reference { .align-center }

---

## <br>Dice Rolls { .align-center .noborder }

| **:d20-attack:{ .x2l }** <br>**Attack Roll**{ .xl } | **:d20-save:{ .x2l }** <br>**Saving Throw**{ .xl } | **:d20-check:{ .x2l }** <br>**Ability Check**{ .xl } |
|:-:|:-:|:-:|
| Made to *hit* a target and is contested by the target's **Armour Class (AC)** | Made to resist an effect and is contested by **Dificulty Class (DC)** | Made to succeed a particular task and is contested by **Dificulty Class (DC)** | 
| **D20 + Ability Modifier + PB (if proficient)**{ .calc } | **D20 + Ability Modifier + PB (if proficient)**{ .calc } | **D20 + Ability Modifier**{ .calc }  |
| ↓ | - | ↓ |
| **DAMAGE ROLL**{ .chev-lr } | | **SKILL CHECK**{ .chev-lr } |
| Rolled to determine how much harm is done to a target | | Ability Checks made using skills (e.g. Perception, Intimidation, History, etc) |
| **Damage Die + Ability Modifier**{ .calc } | | **D20 + Ability Modifier + PB (if proficient)**{ .calc } |

## <br>Calculations { .align-center .noborder }

| **:material-shield:{ .x2l }** <br>**Armour Class**{ .xl } | **:material-eye-plus:{ .x2l }** <br>**Passive Perception**{ .xl } |
|:-:|:-:|
| **Light Armour:** `Armour's AC + DEX modifier` <br>**Medium Armour:** `Armour's AC + DEX modifier (max 2)` <br>**Heavy Armour:** `Armour's AC` | `10 + Wisdom (Perception) bonus` |

---


## Your Turn

### Movement

<div class="grid" markdown>

!!! movement ""

    <div class="grid" markdown>

    :material-fast-forward:{.x3l}

    :   #### MOVE :rsc-spd:{ title="requires Movement" }
    
        **Cost:** *5 ft. per tile* / *10 ft. per tile (Difficult Terrain)*

        Change your position. Movement Cost is ^^Doubled^^ on irregullar surface, such as Deep Liquid (Swim) or Vertical Surface (Climbing).

    :material-arrow-down-bold-hexagon-outline:{.x3l}

    :   #### PRONE

        **Cost:** *none**
    
        Give yourself the **Prone**{ .cond } condition.

    :material-arrow-up-bold-hexagon-outline:{.x3l}

    :   #### STAND UP :rsc-spd:{ title="requires Movement" }

        **Cost:** *half your max __:rsc-spd: Speed__*
    
        End the **Prone**{ .cond } condition

!!! movement ""

    :material-waves-arrow-right:{.x3l}

    :   #### SWIM

        **Cost:** *10 ft. per tile*

        Move on deep liquid. 

    :fontawesome-solid-arrow-up-wide-short:{.x3l}

    :   #### CLIMB

        **Cost:** *10 ft. per tile*

        Scale a vertical surface. 
        
    :material-gesture-tap-hold:{.x3l}

    :   #### MOVE WHILE GRAPPLING

        _**Modifier:** :rsc-spd: Speed is halved_

        Move while Grappling a creature. 

    </div>

</div>


--8<-- "docs/quickref/action.md:quickref-action"