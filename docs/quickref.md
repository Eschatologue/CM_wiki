---
title: "Quick Reference"
hide: 
    - navigation
search:
  exclude: true
icon: material/fast-forward
---

# Quick Reference

## Dice Rolls

---

**:d20-attack:{ .xl } <br>Attack Roll**

:   Made to hit a target and is contested by the target's **Armour Class (AC)**.

    `D20 + Ability Modifier + PB (if proficient) + other Bonuses`

    ---

    **Damage Roll**{ .chev-lr }  
    When an attack or attempt to harm is successful, the creature often makes a Damage Roll to determine how much damage it causes to its target.   

    `Damage Die + Ability Modifier + other Bonuses`


---

**:d20-save:{ .xl } <br>Saving Throw**

:   Made to resist an effect and is contested by **Dificulty Class (DC)**

    `D20 + Ability Modifier + PB (if proficient) + other Bonuses`

---

**:d20-check:{ .xl } <br>Ability Check**

:   Made to see if a creature succeed a particular task and is contested by **Dificulty Class (DC)**

    `D20 + Ability Modifier + other Bonuses`

    ---

    **Skill Check**{ .chev-lr }  
    Skill checks are Ability Checks made using skills (e.g. Perception, Intimidation, History, etc)

    `D20 + Ability Modifier + PB (if proficient) + other Bonuses`


---

## Calculations

---

**:material-shield:{ .xl .align-center } <br>Armour Class**

:   **Base AC:** `10 + DEX modifier`

    **Light Armour:** `Armour's AC + DEX modifier`

    **Medium Armour:** `Armour's AC + DEX modifier (max 2)`

    **Heavy Armour:** A`rmour's AC`

---

**:material-eye-plus:{ .xl .align-center } <br>Passive Perception**

:   `10 + Wisdom (Perception) check bonus`

    **:d20-adv: Advantage**{ .d20 } grants **+5 bonus** and **:d20-dis: Disadvantage**{ .d20 } grants **-5 penalty**.

---


## Your Turn

### Movement { .hide }

!!! move "Movement"

    <div class="grid cards" markdown>

    - #### Move { .chev-lr }

        **Cost:** *5 ft. per tile* / *10 ft. per tile (Difficult Terrain)*

        Change your position.

    - #### Prone { .chev-lr }

        **Cost:** *none*

        Give yourself the ^^Prone^^ condition.

    - #### Stand Up { .chev-lr }

        **Cost:** *half your max __:rsc-spd: Speed__*

        End the ^^Prone^^ condition

    - #### Climb { .chev-lr }

        **Cost:** *10 ft. per tile*

        Scale a vertical surface. 

    - #### Swim { .chev-lr }

        **Cost:** *10 ft. per tile*

        Move on deep liquid. 

    - #### Move while Grappling { .chev-lr }
    
        _**Modifier:** :rsc-spd: Speed is halved_

        Move while Grappling a creature. 

    </div>

### Action { .hide }

!!! action "Action"

    <div class="grid cards" markdown>

    - #### :material-sword-cross: Attack { .chev-lr } 
        
        Perform a Melee or Ranged attack with your weapon or perform **:rsc-a: Unarmed Strike**{ .rsc }.

    - #### **:action-dash: Dash**{ .chev-lr }

        For the rest of the turn, give yourself extra Movement equal to your **:rsc-spd: Speed**.

    - #### **:material-arrange-send-to-back: Disengage**{ .chev-lr } 

        Your Movement doesn't provoke **:rsc-r: Opportunity Attack**{ .rsc } for the rest of the turn.

    - #### **:material-arrow-expand: Dodge**{ .chev-lr } 

        Focus entirely on avoiding attacks.  
        Attack Rolls against you have **:d20-dis: Disadvantage**{ .d20 } & you have **:d20-adv: Advantage**{ .d20 } on **:d20-save: DEX Save**
        
    - #### **:material-handshake: Help**{ .chev-lr } 

        Give **:d20-adv: Advantage**{ .d20 } on another creature's Ability Check or Attack Roll.

    - #### **:action-hide: Hide**{ .chev-lr }

        Make a DC 15 Dexterity (Stealth) check. Gain Invisible condition on success.

    - #### **:material-translate-variant: Influence**{ .chev-lr }

        Make a Charisma (Deception, Intimidation, Performance, or Persuasion) or Wisdom (Animal Handling) check to alter a creature's attitude.

    - #### **:material-spa: Magic**{ .chev-lr }

        Cast a spell that has a casting time of an Action or use a feature or magic item that requires a Magic action to be activated. 

    - #### **:material-timer-alert: Ready**{ .chev-lr }

        Prepare to take an action or Move in response to a trigger you define.

    - #### **:material-magnify: Search**{ .chev-lr }

        Make a Wisdom (Insight, Medicine, Perception, or Survival) check to discern something that isn't obvious.

    - #### **:material-book-clock: Study**{ .chev-lr }

        Make an Intelligence (Arcana, History, Investigation, Nature, or Religion) check to call to mind an important piece of information about it.
    
    - #### **:material-cog-box: Utilise**{ .chev-lr }
        
        Use a nonmagical object, equip Shield.

    </div>

### Bonus Action { .hide }

!!! bonusaction "**Bonus Action**{ .em }"

    <div class="grid cards" markdown>

    - #### :material-sword-cross: Off-Hand Attack { .chev-lr }

        If you attack with a **:wp-prop-light: Light weapon** weapon, you can make one Extra Attack with a different **:wp-prop-light: Light weapon** weapon. Ability modifier is not added to damage roll (unless negative).

    - #### :fontawesome-solid-hand-sparkles: Cast a Spell { .chev-lr }

        Cast a spell with a casting time of a **:rsc-b: Bonus Action**{ .rsc }.

    - #### :simple-sparkfun: Use a Feature { .chev-lr }

        Activate a feature (e.g, Class feature, Species feature) that uses a a **:rsc-b: Bonus Action**{ .rsc }.

    </div>

### Reaction { .hide }

!!! reaction "**Reaction**{ .em }"

    <div class="grid cards" markdown>

    - #### Opportunity Attack { .chev-lr }

        _**Trigger:** a Creature leaves your reach_

        Make one Melee attack against the triggering creature.

    - #### Readied Action { .chev-lr }

        _**Trigger:** specified by your **:rsc-a: Ready**{ .rsc } action_

        Execute the reaction specified by your **:rsc-a: Ready**{ .rsc } action.

    - #### :fontawesome-solid-hand-sparkles: Cast a Spell { .chev-lr }

        _**Trigger:** specified by the spell_

        Cast a spell with a casting time of a **:rsc-r: Reaction**{ .rsc }.

    - #### :simple-sparkfun: Use a Feature { .chev-lr }

        _**Trigger:** specified by the feature_
        
        Activate a feature (e.g, Class feature, Species feature) that uses a a **:rsc-r: Reaction**{ .rsc }.

    </div>

