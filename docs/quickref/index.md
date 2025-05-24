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

!!! dice ""

    <div class="dl-dt-center" markdown>

    **:d20-attack:{ .x2l }**<br>**ATTACK ROLL**{ .xl } 
    :   Made to *hit* a target and is contested by the target's **Armour Class (AC).** 

        ```
        D20 + Ability Modifier + PB (if proficient)
        ```

        **^^DAMAGE ROLL^^**
        :   Rolled to determine how much harm is done to a target. 
            ``` 
            Damage Die + Ability Modifier
            ```

    **:d20-save:{ .x2l }**<br>**SAVING THROW**{ .xl } 
    :   Made to resist an effect and is contested by **Dificulty Class (DC)**.  

        ```
        D20 + Ability Modifier + PB (if proficient)
        ```
    
    **:d20-attack:{ .x2l }**<br>**ATTACK ROLL**{ .xl } 
    :   Made to *hit* a target and is contested by the target's **Armour Class (AC).** 

        ```
        D20 + Ability Modifier
        ```

        **^^SKILL CHECK^^**
        :   Ability Checks made using skills (e.g. Perception, Intimidation, History, etc). 
            ``` 
            D20 + Ability Modifier + PB (if proficient)
            ```       

    </div>



## <br>Calculations { .align-center .noborder }


!!! glossary ""

    <div class="dl-dt-center" markdown>

    **:material-shield:{ .x2l }**<br>**ARMOUR CLASS**{ .xl } 
    :   **Light Armour:** `Armour's AC + DEX modifier`   
        **Medium Armour:** `Armour's AC + DEX modifier (max 2)`  
        **Heavy Armour:** `Armour's AC` 

    :octicons-key-asterisk-16:{.x2l}**<br>PASSIVE CHECKS**

    :   Passive Checks are skill checks that does not require rolling a d20, most commonly used for **Passive Perception** (`10 + Wisdom (Perception) bonus`{.nowrap}).  
        **Calculation**: `10 + Ability (Skill) bonus`

    </div>



## <br>Your Turn { .align-center }

### Movement

<div class="grid" markdown>

!!! move ""

    <div class="grid" markdown>

    :material-fast-forward:{.x3l}

    :   #### MOVE :rsc-spd:{ title="requires Movement" }
    
        **Cost:** *5 ft. per tile* / *10 ft. per tile (Difficult Terrain)*

        Change your position. Movement Cost is ^^Doubled^^ on irregullar surface, such as Deep Liquid (Swim) or Vertical Surface (Climbing).

    :fontawesome-solid-person-arrow-down-to-line:{.x3l}

    :   #### PRONE

        **Cost:** *none*
    
        Give yourself the **Prone**{.cond} condition.

    :fontawesome-solid-person-arrow-up-from-line:{.x3l}

    :   #### STAND UP :rsc-spd:{ title="requires Movement" }

        **Cost:** *half your max __:rsc-spd: Speed__*
    
        End the **Prone**{.cond} condition

    </div>

!!! move ""

    <div class="grid" markdown>

    :material-waves-arrow-right:{.x3l}

    :   #### SWIM :rsc-spd:{ title="requires Movement" }

        **Cost:** *10 ft. per tile*

        Move on deep liquid. 

    :fontawesome-solid-arrow-up-wide-short:{.x3l}

    :   #### CLIMB :rsc-spd:{ title="requires Movement" }

        **Cost:** *10 ft. per tile*

        Scale a vertical surface. 
        
    :material-gesture-tap-hold:{.x3l}

    :   #### MOVE WHILE GRAPPLING

        _**Modifier:** Max :rsc-spd: Speed is halved_

        Move while Grappling a creature. 

    </div>

</div>


--8<-- "docs/quickref/action.md:quickref-action"