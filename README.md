# Combat Effects Tracker

> This module for Foundry VTT allows you to track temporary effects by adding them to the combat tracker. 

## Requirements

There are no other modules required for this to work, but it synergizes well with the *Add Temporary Combatant* functionality of the <a href="https://github.com/death-save/combat-utility-belt">Combat Utility Belt</a> module, as it allows you to quickly add temporary effects.

## Installation

Paste the following link in the *Install Module* interface of your Foundry VTT instance:

```
https://raw.githubusercontent.com/MKamysz/combat-effects-tracker/master/module.json
```

## How it works

1. Set the module settings to the correct resource that you use in your Combat Tracker
2. Create a new Combatant for the desired effect and give it the [Effect] prefix, e.g. [Effect] Bardic Inspiration
3. Give the effect's Combatant an Initiative value that puts it where you want it to be in the Combat Tracker﻿
4. Set the resource of your effect's Combatant that you track in your Combat Tracker to the desired duration in turns, e.g. Armor Class = 10 for a duration of 1 minute
5. That's it - each time the Combat Tracker reaches [Effect] Bardic Inspiration, it will reduce its Armor Class by 1, and when it reaches 0 you'll know that the effect is over!

![Recordit GIF](http://g.recordit.co/IeyCCcFGGt.gif)