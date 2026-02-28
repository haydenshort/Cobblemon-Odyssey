console.info("[BAB] RecipesFix.js loaded")

let $Stopwatch = Java.loadClass("com.google.common.base.Stopwatch")

KubeJSTweaks.beforeRecipes(event => {
    let timer = $Stopwatch.createStarted()

    event.dumpErroringRecipes()

    event.fixItemAtKey([/^create:crushing\/gloomslate_/, /^create:crushing\/sculk_stone_/, /^create:cutting\/.*echo_/], "results")

    event.getEntry([/^farmersdelight:cutting\/echo_/, "farmersdelight:integration/silentgear/cutting/netherwood"])
    .forEach(entry => {
        entry.replaceValueAtKey("tool", "type", "farmersdelight:tool_action", "farmersdelight:item_ability")

        entry.fromPath("sound").ifPresent(result => {
            result.first.add("sound", {sound_id: result.second})
        })
        if (entry.id() == "farmersdelight:integration/silentgear/cutting/netherwood") {
            let resultArray = entry.json().get("result")
            if (resultArray == null) return
            for (let item of resultArray) {
                if (!item.has("item")) continue
                item.add("item", {
                    "id": item.get("item")
                })
            }
        }
    })

    event.getEntry(/^farmingforblockheads:market\//)
    .forEach(entry => {
        entry.addConditionsFromKey("result")
    })

    event.getEntry("create:crafting/tree_fertilizer")
    .forEach(entry => {
        entry.addConditionsFromKey("ingredients")
    })

    event.disable("supplementaries:botany_flax")
    event.disable("endersdelight:chorus_pie_slice")
    event.disable("createages:zinc_age/stonecutting/sd_controller")
    event.disable("createages:zinc_age/stonecutting/sd_controller_io")
    event.disable("ess_requiem:primal_flesh")
    event.disable("ess_requiem:dream_ripper")
    event.disable("create_enchantment_industry_plus:grinding/inksac_dye")
    event.disable(/^actuallyadditions:compat\/mekanism/)
    event.disable("farmersdelight:wheat_dought_from_water_and_flour")

    event.getEntry(/^extradisks:storage_upgrade\/.*_chemical_.*/)
    .forEach(entry => {
        entry.disable()
    })

    event.getEntry("bellsandwhistles:metro/metro_window").forEach(entry => {
	    entry.replaceValueAtKey("ingredients", "tag", "c:glass", "c:glass_blocks")
    })

    event.getEntry(/^betterend:.*_berry_jelly/).forEach(entry => {
	    entry.replaceValueAtKey("ingredients", "tag", "wover:water_bottles", "c:drinks/honey")
    })

    event.getEntry("mushroomquest:artistconkr").forEach(entry => {
        entry.replaceValueAtKey("ingredients", "tag", "forge:dyes", "c:dyes")
    })

    event.getEntry("farmersdelight:integration/create/filling/chocolate_pie")
    .forEach(entry => {
        entry.replaceValueAtKey("ingredients", "fluid_tag", "c:chocolates", "c:chocolate")
    })

    event.getEntry(/^create:.*\/compat\/(biomeswevegone)\//).forEach(entry => {
        entry.addConditionsFromKey("ingredients")
    })

    event.getEntry("berrypouch:berry_pouch_30").forEach(entry => {
        entry.addConditionsFromKey("result")
    })

    event.getEntry(/^regions_unexplored:.*_snowbelle$/).forEach(entry => {
        let ings = entry.json().get("ingredients")
        if (ings != null) {
            for (let ing of ings) {
                let tag = ing.get("tag")
                if (tag != null) {
                    if (tag.getAsString().endsWith("_dyes")) {
                        let color = tag.getAsString().replace("c:","").replace("_dyes","")
                        ing["addProperty(java.lang.String,java.lang.String)"]("tag", "c:dyes/" + color)
                    }
                }
            }
        }
    })

    console.log(`Fixing recipes took ${timer.stop().elapsed("milliseconds")} ms...`)
})