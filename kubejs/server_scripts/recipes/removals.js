console.info("[BAB] Removals.js loaded")

const removeByOutput = [
    "functionalstorage:iron_downgrade",
    "minecraft:milk_bucket",
    "farm_and_charm:fertilized_soil",
    "ftbquests:task_screen_configurator",
    "ftbquests:stage_barrier",
    "ftbquests:detector",
    "ftbquests:loot_crate_opener",
    "ftbquests:screen_1",
    "ftbquests:screen_3",
    "ftbquests:screen_5",
    "ftbquests:screen_7",
    "ftbquests:barrier",
]

const removeById = [
    "farmersdelight:bread_from_smelting",
    "farmersdelight:bread_from_smoking",
    "netherdepthsupgrade:food/nether_salad",
    "farmersdelight:honey_cookie",
    "farmersdelight:sweet_berry_cookie",
    "farm_and_charm:supply_cart",
    "farm_and_charm:plow",
    "netherdepthsupgrade:grilled_lava_pufferfish",
    "netherdepthsupgrade:grilled_obsidianfish",
    "netherdepthsupgrade:grilled_searing_cod",
    "netherdepthsupgrade:grilled_soulsucker",
    "netherdepthsupgrade:grilled_glowdine",
    "netherdepthsupgrade:grilled_magmacubefish",
    "netherdepthsupgrade:grilled_blazefish",
    "create:fill_minecraft_bucket_with_minecraft_milk",
    "culturalrecipes:fermenting/pickle",
    "mushroomquest:miso_soup_2",
    "minecraft:beetroot_soup",
    "/^createmonballsoverhaul:deploying\/ball_bases\/",
    "createmonballsoverhaul:crafting/rubber_stamp_lid",
    "berrypouch:berry_pouch_30",
    "culturaldelights:corn_cob",
    "culturaldelights:corn_kernels",
    "actuallyadditions:rice",
    "starcatcher:rod",
    "starcatcher:rod_from_vanilla",
    "justhammers:netherite_hammer",
    "justhammers:netherite_impact_hammer",
    "justhammers:netherite_reinforced_hammer",
    "justhammers:netherite_reinforced_impact_hammer",
    "justhammers:netherite_destructor_hammer",
]

const removeByInput = [
    "create:dough",
    "minecraft:milk_bucket",
]

ServerEvents.recipes((event) => {

    removeById.forEach((recipe) => {
		event.remove({ id: recipe })
	})

    removeByOutput.forEach((recipe) => {
        event.remove({ output: recipe })
    })

    removeByInput.forEach((recipe) => {
        event.remove({ input: recipe })
    })

    global.removedItems.forEach((recipe) => {
        event.remove({ output: recipe })
    })

    event.remove({ type: "farm_and_charm:pot_cooking" })
    event.remove({ type: "meadow:cooking" })
    event.remove({ type: "meadow:woodcutting" })
})