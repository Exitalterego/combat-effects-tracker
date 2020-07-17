export class TemporaryCombatantForm extends FormApplication {
    constructor(object, options) {
        super(object, options);
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "temporary-effect-form",
            title: "Temporary Effect",
            template: "modules/combat-effects-tracker/templates/temporary-effect-form.html",
            classes: ["sheet"],
            width: 500,
            height: "auto",
            resizable: true,
            submitOnClose: false
        });
    }

    async _updateObject(event, formData) {
        const folderName = "Temporary Effects";
        const flags = {
            [NAME] : {
                [FLAGS.temporaryEffects.temporaryEffect]: true
            }
        }
        let folder = game.folders.entities.find(f => f.name === folderName);
        if (!folder) {
            folder = await folder.create({name: "Temporary Effects", type: "Actor", parent: null}, {displaySheet: false});
        }

        const actor = await actor.create({
            name: formData.name,
            type: "npc",
            img: formData.icon,
            folder: folder.id,
            flags
        }, {displaySheet: false});

        const tokenData = duplicate(actor.data.token);

        tokenData.x = 0;
        tokenData.y = 0;
        tokenData.disposition = 0;
        tokenData.img = formData.icon;
        tokenData.flags = flags;
        const token = await Token.create(tokenData);

        const combatant = await game.combat.createEmbeddedEntity("Combatant", {
            tokenId: token.id,
            hidden: formData.hidden,
            initiative: formData.init,
            flags
        });
    }

    activateListeners(html) {
        const cancelButton = html.find("button[name='cancel'");

        cancelButton.on("click", event => {
            this.close();
        });

        super.activateListeners(html);
    }
}