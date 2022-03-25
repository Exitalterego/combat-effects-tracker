Hooks.on("updateCombat", function() {
    // Execute function once updateCombat Hook is called (e.g. after progressing to next turn)
    let trackedResource = game.settings.get("combat-effects-tracker", "trackedResource");
    let c = game.combat.combatant;

    if (c.name.toLowerCase().includes("[effect]")) {
        let token = canvas.tokens.ownedTokens.filter(el => el.actor.data._id == c.actor.data._id)[0];
        let actor = token.actor;
        let node = actor.data.data;

        // Drill down to the tracked resource being used.
        setting_split = trackedResource.split(".");
        setting_split.forEach(function(item, index) {
            node = node[item];
        });
        // Decrement the value.
        let value = node - 1;

        if (value > 0) {
            // The effect still remains.
            console.log( 'Reducing ' + c.name + ' duration to ' + value );
            key = "actor.data.data." + trackedResource;
            key = "data." + trackedResource;
            data = {};
            data[key] = value;
            // Update the new value.
            actor.data.document.update(data);
        } else {
            // The effect has expired.
            console.log( c.name + ' has expired, removing combatant' );
            // Send a chat message.
            let message = c.name + ' has expired!';
            let chatData = {
                user: game.user.id,
                speaker: ChatMessage.getSpeaker(),
                content: message
            };
            ChatMessage.create(chatData, {});
            // Delete the combatant.
            c.delete();
        }
    }
});
