Hooks.once("init", () => {
    
    game.settings.register("combat-effects-tracker", "effectsPrefix", {
          name: "Combat Effect Prefix",
      hint: "Specify the prefix in the name of a combatant that identifies that its tracked resource shall be lowered on each of its turns.",
          scope: "world",
          config: true,
          default: true,
          type: Boolean
      });
    
      game.settings.register("combat-effects-tracker", "trackedResource", {
          name: "Tracked resource",
          hint: "Specify which resource you track in your combat trackers.",
          scope: "world",
          config: true,
          default: 1,
      type: String,
      choices: {test: "test", na: "na?", holdup: "hää"},
      range: {min: 0, max: 50, step: 0.5}
      });  

});