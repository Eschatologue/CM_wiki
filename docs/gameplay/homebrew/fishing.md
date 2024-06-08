---
icon: fontawesome/solid/fish-fins
---

!!! homebrew "This is a Homebrew Mechanic!"

    You just stumbled into a Homebrew mechanic! This minigame is orginally designed by Saffy Penrose, and its system is used as a base for this D&D Fishing mechanic.

In the days before the devastation caused by the warp storms and the emergence of horrendous aberrations in the Antares wilderness, fishing was a cherished pastime. Commoners, adventurers, and even nobility took delight in casting their lines into the serene waters. However, as most civilizations withdrew behind the protective walls of citadel cities, the art of fishing slowly slipped into obscurity.

Antares' natural rivers and waters, now severely tainted by the Warp, saw most of its fish population undergo mutations, giving them grotesque features akin to the aberrations roaming the land. While many former fishermen and anglers turned to fish farming to preserve the dwindling population of untainted fish, a few individuals remained steadfast in their love for the excitement and adrenaline that only fishing could provide. 

## It's Fishin' Time

This newly designed fishing mechanic is completely different from what you might remember in the previous version. Forget the old rules and refer to this version from now on.

**Time:** Fishing takes time. From preparing your gear, attaching the bait and tackles, luring the rod, and of course, waiting. Each fishing attempt will take at least **1 hour**.

## How to Fish

### Rolling Dice

For every 1 hour you spend fishing, roll :material-dice-d6: 5d6. The process varies slightly depending on your skills:

- **Proficiency in Wisdom (Survival) or Intelligence (Arcana):** You can reroll a number of times up to to your Wisdom (Survival) or Intelligence (Arcana) modifier. If you have both proficiencies, use the highest modifier.
- **No Proficiency:** You can reroll a number of dice equal to your Wisdom or Intelligence modifier, using the highest modifier.

You can reroll the same die more than once. After rerolling, keep each final die result.

### Calculating Final Result

Before summing your results, check if you rolled a special result. Multiply your sum by the corresponding modifier in the special result table. Sum all the dice you rolled, then multiply the total by the appropriate multiplier from the table. The final result is rounded up.

#### Special Result Table

| **Special Result** | **Multiplier** | **Description** | **Example** |
|---|:-:|---|:-:|
| Full House | ×2 | Three dice of one number and two of another. | `3 3 3 5 5`  |
| Three-of-a-kind | ×2 | Three dice of the same number. | `5 5 5 2 4`  |
| Straight | ×3 | Five sequential numbers. | `5 4 3 2 1`  |
| Four-of-a-kind | ×4 | Four dice of the same number. | `2 2 2 2 4`  |
| Five-of-a-kind | ×5 | Five dice of the same number. | `6 6 6 6 6`  |

<html> 

<head> 
<title>HTML Calculator</title> 

<!-- For styling -->
<style> 
table { 
border: 1px solid black; 
margin-left: auto; 
margin-right: auto; 
} 

input[type="button"] { 
width: 100%; 
padding: 20px 40px; 
background-color: green; 
color: white; 
font-size: 24px; 
font-weight: bold; 
border: none; 
border-radius: 5px; 
} 

input[type="text"] { 
padding: 20px 30px; 
font-size: 24px; 
font-weight: bold; 
border: none; 
border-radius: 5px; 
border: 2px solid black; 
} 
</style> 
</head> 

<body> 

<!-- Create table -->
<table id="calcu"> 
<tr> 
<td colspan="3"> 
<input type="text" id="result"> 
</td> 
<td><input type="button" value="c"></td> 
</tr> 

<tr> 
<td><input type="button" value="1"></td> 
<td><input type="button" value="2"></td> 
<td><input type="button" value="3"></td> 
<td><input type="button" value="/"></td> 
</tr> 
<tr> 
<td><input type="button" value="4"></td> 
<td><input type="button" value="5"></td> 
<td><input type="button" value="6"></td> 
<td><input type="button" value="*"></td> 
</tr> 
<tr> 
<td><input type="button" value="7"></td> 
<td><input type="button" value="8"></td> 
<td><input type="button" value="9"></td> 
<td><input type="button" value="-"></td> 
</tr> 
<tr> 
<td><input type="button" value="0"></td> 
<td><input type="button" value="."></td> 
<td><input type="button" value="="></td> 
<td><input type="button" value="+"></td> 
</tr> 
</table> 
</body> 

</html>  