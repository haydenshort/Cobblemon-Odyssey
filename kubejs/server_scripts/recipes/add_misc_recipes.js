console.info("[BAB] AddMiscRecipes.js loaded")

ServerEvents.recipes((event) => {

    event.shaped(
        Item.of("functionalstorage:iron_downgrade", 1),
        ["aaa", "aba", "aaa"],
        {a: "create:iron_sheet", b: "functionalstorage:copper_upgrade"}
    )
    event.shaped(
        Item.of("createmonballsoverhaul:rubber_stamp_lid", 1),
        ["aaa", "aba", "ccc"],
        {a: "minecraft:stick", b: "#createmonballsoverhaul:spherical_shaped_items_for_lids", c: "#c:silicon"}
    )

    event.smithing(
        "starcatcher:starcatcher_rod",
        "starcatcher:hook",
        "minecraft:fishing_rod",
        "starcatcher:bobber"
    )

    //Just Hammers
    event.smithing(
        "justhammers:netherite_hammer",
        "minecraft:netherite_upgrade_smithing_template",
        "justhammers:diamond_hammer",
        "minecraft:netherite_ingot"
    )
    event.smithing(
        "justhammers:netherite_impact_hammer",
        "justhammers:impact_core",
        "justhammers:diamond_impact_hammer",
        "minecraft:netherite_block"
    )
    event.smithing(
        "justhammers:netherite_reinforced_hammer",
        "justhammers:reinforced_core",
        "justhammers:diamond_reinforced_hammer",
        "minecraft:netherite_block"
    )
    event.smithing(
        "justhammers:netherite_reinforced_impact_hammer",
        "justhammers:reinforced_impact_core",
        "justhammers:diamond_reinforced_impact_hammer",
        "minecraft:netherite_block"
    )
    event.smithing(
        "justhammers:netherite_destructor_hammer",
        "justhammers:destructor_core",
        "justhammers:diamond_destructor_hammer",
        "minecraft:netherite_block"
    )
})