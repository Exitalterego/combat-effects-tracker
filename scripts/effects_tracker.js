Hooks.on("updateCombat", function() {
    // Execute function once updateCombat Hook is called (e.g. after progressing to next turn)
    
    let resource_setting = game.settings.get("combat-effects-tracker", "trackedResource");
    let c = game.combat.combatant;

    if (c.name.toLowerCase().includes("[effect]")) {
        console.log(resource_setting);
        
        let token = canvas.tokens.ownedTokens.filter(el => el.actor.data._id == c.actor.data._id)[0];
        
        setting_split = resource_setting.split(".");

        let temp_arr = token.actor.data.data;

        setting_split.forEach(function(item, index) {
            temp_arr = temp_arr[item];
        });

        console.log(temp_arr);

        resource = temp_arr - 1;
        
        resoure_string = "actorData.data." + resource_setting;
        token.update({resource_string: resource});
    }
});