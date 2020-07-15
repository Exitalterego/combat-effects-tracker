Hooks.on("updateCombat", function() {
    // Execute function once updateCombat Hook is called (e.g. after progressing to next turn)
    
    let c = game.combat.combatant

    if (c.name.toLowerCase().includes("[effect]")) {
        let token = canvas.tokens.ownedTokens.filter(el => el.actor.data._id == c.actor.data._id)[0];

        ac = token.data.actorData.data.attributes.ac.value;
        ac = ac - 1;
        
        token.update({"actorData.data.attributes.ac.value": ac});
    }
});