---
title: Quick Reference
hide:
    - navigation
    - toc
search:
  exclude: true
icon: material/crown-circle
---

# Quick Reference

=== "Core Mechanics"

    !!! dice "D20 Test"

        <div class="grid cards" markdown>

        - ### :d20-attack:{ .lg } Attack Roll

            **Attack Roll** is a D20 Test. It is made to hit a target and is contested by the target's **Armour Class (AC)**.
            
            **Roll:** **:die-d20: D20 + Ability Modifier + PB (if proficient) + other Bonuses**{ .back }

            **Damage Roll**{ .inl } When an attack or attempt to harm is successful, the creature often makes a Damage Roll to determine how much damage it causes to its target.
            
            :   **Roll:** **:die-d6: Damage Die + Ability Modifier + other Bonuses**{ .back }

        </div>

        <div class="grid cards" markdown>

        - ### :d20-save:{ .lg } Saving Throws

            **Saving Throw** or simply 'Save' is a D20 Test. It is made to resist an effect and is contested by **Dificulty Class (DC)**

            **Roll:** **:die-d20: D20 + Ability Modifier + PB (if proficient) + other Bonuses**{ .back }

        </div>

        <div class="grid cards" markdown>

        - ### :d20-check:{ .lg } Ability Check

            **Ability Check** or simply 'Check' is a D20 Test. It is made to see if a creature succeed a particular task and is contested by **Dificulty Class (DC)**

            **Roll:** **:die-d20: D20 + Ability Modifier +  other Bonuses**{ .back }

            **Skill Check**{ .inl } Skill checks are Ability Checks made using skills (e.g. Perception, Intimidation, History, etc)

            :   **Roll:** **:die-d20: D20 + Ability Modifier + PB (if proficient) +  other Bonuses**{ .back }

        </div>

    !!! abstract "Calculations"

        <div class="grid cards" markdown>

        - #### :material-shield: Armour Class (AC) { .inl }

            **Base AC:** **10 + Dex modifier**{ .back }

            **Light Armour:** **Armour's AC + Dex modifier**{ .back }

            **Medium Armour:** **Armour's AC + Dex modifier (max 2)**{ .back }

            **Heavy Armour:** **Armour's AC**{ .back }

        - #### :material-eye-plus: Passive Perception { .inl }

            **Passive Percecption:** **10 + Wisdom (Perception) check bonus**{ .back }

            **:d20-adv: Advantage**{ .d20 } grants **+5 bonus** and **:d20-dis: Disadvantage**{ .d20 } grants **-5 penalty**.

        </div>

=== "Your Turn" 

    !!! move "Movement"

        <div class="grid cards" markdown>

        - #### Move { .inl }

            **Cost:** *5 ft. per tile* / *10 ft. per tile (Difficult Terrain)*

            Change your position.

        - #### Prone { .inl }

            Give yourself the ^^Prone^^ condition.

        - #### Stand Up { .inl }

            **Cost:** *half your max __:rsc-spd: Speed__*

            End the ^^Prone^^ condition

        - #### Climb { .inl }

            **Cost:** *10 ft. per tile*

            Scale a vertical surface. 

        - #### Swim { .inl }

            **Cost:** *10 ft. per tile*

            Move on deep liquid. 

        - #### Move while Grappling { .inl }
        
            _**Modifier:** :rsc-spd: Speed is halved_

            Move while Grappling a creature. 

        </div>

    !!! action "Action"

        <div class="grid cards" markdown>

        - #### **:material-sword-cross: Attack**{ .inl } 

            Perform a Melee or Ranged attack with your weapon or perform Unarmed Strike.

        - #### **:action-dash: Dash**{ .inl }

            For the rest of the turn, give yourself extra Movement equal to your **:rsc-spd: Speed**.

        - #### **:material-arrange-send-to-back: Disengage**{ .inl } 
    
            Your Movement doesn't provoke Opportunity Attack for the rest of the turn.

        - #### **:material-arrow-expand: Dodge**{ .inl } 

            Focus entirely on avoiding attacks.  
            Attack Rolls against you have **:d20-dis: Disadvantage**{ .d20 } & you have **:d20-adv: Advantage**{ .d20 } on **:d20-save: Dex Save**
            
        - #### **:material-handshake: Help**{ .inl } 
    
            Give **:d20-adv: Advantage**{ .d20 } on another creature's Ability Check or Attack Roll.

        - #### **:action-hide: Hide**{ .inl }

            Make a DC 15 Dexterity (Stealth) check. Gain Invisible condition on success.

        - #### **:material-translate-variant: Influence**{ .inl }
    
            Make a Charisma (Deception, Intimidation, Performance, or Persuasion) or Wisdom (Animal Handling) check to alter a creature's attitude.

        - #### **:material-spa: Magic**{ .inl }

            Cast a spell that has a casting time of an Action or use a feature or magic item that requires a Magic action to be activated. 

        - #### **:material-timer-alert: Ready**{ .inl }

            Prepare to take an action or Move in response to a trigger you define.

        - #### **:material-magnify: Search**{ .inl }

            Make a Wisdom (Insight, Medicine, Perception, or Survival) check to discern something that isn't obvious.

        - #### **:material-book-clock: Study**{ .inl }

            Make an Intelligence (Arcana, History, Investigation, Nature, or Religion) check to call to mind an important piece of information about it.
        
        - #### **:material-cog-box: Utilise**{ .inl }
            
            Use a nonmagical object, equip Shield.

        </div>

    !!! bonusaction "**Bonus Action**{ .em }"

        <div class="grid cards" markdown>

        - #### :material-sword-cross: Off-Hand Attack { .inl }

            If you attack with a **:weapon-prop-light: Light weapon** weapon, you can make one Extra Attack with a different **:weapon-prop-light: Light weapon** weapon. Ability modifier is not added to damage roll (unless negative).

        - #### :fontawesome-solid-hand-sparkles: Cast a Spell { .inl }

            Cast a spell with a casting time of a **:rsc-b: Bonus Action**{ .rsc }.

        - #### :simple-sparkfun: Use a Feature { .inl }

            Activate a feature (e.g, Class feature, Species feature) that uses a a **:rsc-b: Bonus Action**{ .rsc }.

        </div>

    !!! reaction "**Reaction**{ .em }"

        <div class="grid cards" markdown>

        - #### Opportunity Attack { .inl }

            _**Trigger:** a Creature leaves your reach_

            Make one Melee attack against the triggering creature.

        - #### Readied Action { .inl }

            _**Trigger:** specified by your **:rsc-a: Ready**{ .rsc } action_

            Execute the reaction specified by your **:rsc-a: Ready**{ .rsc } action.

        - #### :fontawesome-solid-hand-sparkles: Cast a Spell { .inl }
    
            _**Trigger:** specified by the spell_

            Cast a spell with a casting time of a **:rsc-r: Reaction**{ .rsc }.

        - #### :simple-sparkfun: Use a Feature { .inl }

            _**Trigger:** specified by the feature_
            
            Activate a feature (e.g, Class feature, Species feature) that uses a a **:rsc-r: Reaction**{ .rsc }.

        </div>