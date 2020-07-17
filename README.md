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

In the module settings dialogue, choose which resource you track in your combat tracker. The module always uses the tracked resource as the countdown for the duration.

Once the settings are aligned, you can create a new combatant that represents an effect you want to track and edit the name to include **[Effect]** (upper or lowercase doesn't matter here). Now set the tracked resource of the effect combatant to the desired duration in turns.

That's it - each time the combat tracker reaches the effect, it will reduce the tracked resource by one as displayed in the GIF:

![Recordit GIF](http://g.recordit.co/IeyCCcFGGt.gif)