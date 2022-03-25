async function registerSettings() {
    // Get combat tracker attribute structure.
    let ct_config = new CombatTrackerConfig();
    const data = await ct_config.getData();
    let attr_choices = data.attributeChoices;

    // Construct a dictionary of the attribute choices to use for the dropdown box.
    let option_choices = {};
    Object.keys(attr_choices).forEach(function(item1, index1) {
        attr_choices[item1].forEach(function(item, index) {
            option_choices[item] = item;
        });
    });

    // Register the configuration entry.
    game.settings.register("combat-effects-tracker", "trackedResource", {
        name: "Tracked resource",
        hint: "Specify which resource you track in your combat trackers.",
        scope: "world",
        config: true,
        default: 1,
        type: String,
        choices: option_choices
    });  

}

Hooks.on(`ready`, () => {
    console.log('Combat Effects Tracker | Ready');
    registerSettings();
});
