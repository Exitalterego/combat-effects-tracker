import { TemporaryEffectForm } from "./form.js"

export class TemporaryEffects {
    /**
     * Handler for combat tracker render
     * @param {*} app 
     * @param {*} html 
     * @param {*} data 
     */

    static async _onRenderCombatTracker(app, html, data) {

        const combatantList = html.find("#combat-tracker.directory-list");
        const listItemHtml = `<div class = "flexrow"><a class = "add-temporary-effect"><i class = "fa fa-plus"></i> Add Temporary Effect </a></div>`

        if (!game.combat || !combatantList.length) {
            return;
        }

        combatantList.append(listItemHtml);

        const button = combatantList.find(".add-temporary-effect");

        button.on("click", event => {
            TemporaryEffects._onAddTemporaryEffect(event);
        });
    }

    /**
     * Open the Temporary Effect form
     * @param {*} event 
     */
    static _onAddTemporaryEffect(event) {
        const temporaryEffectForm = new temporaryEffectForm({}).render(true);
    }
}

// let ct_settings = new CombatTrackerConfig();
// let attr_choices = ct_settings.getAttributeChoices();

