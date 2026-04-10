console.info("[CO] EntityTags.js loaded")

ServerEvents.tags("entity_type", event => {
    event.add("c:bosses", [
        "cataclysm:amethyst_crab",
        "cataclysm:ancient_remnant",
        "cataclysm:coralssus",
        "cataclysm:ender_golem",
        "cataclysm:ender_guardian",
        "cataclysm:ignis",
        "cataclysm:ignited_revenant",
        "cataclysm:kobolediator",
        "cataclysm:maledictus",
        "cataclysm:modern_remnant",
        "cataclysm:netherite_monstrosity",
        "cataclysm:the_baby_leviathan",
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:the_prowler",
        "cataclysm:wadjet",
        "block_factorys_bosses:infernal_dragon",
        "block_factorys_bosses:yeti",
        "block_factorys_bosses:sandworm",
        "block_factorys_bosses:underworld_knight",
        "#neoforge:bosses"
    ])

    event.add("bab:entity_blacklist", [
        "artifacts:mimic",
        "create:package",
        "#c:bosses",
        "@cobblemon"
    ])

    event.add("justdirethings:paradox_deny", "#bab:entity_blacklist")
    event.add("oritech:spawner_blacklist", "#bab:entity_blacklist")

    event.add("ftbchunks:entity_interact_whitelist",["rctmod:trainer","rctmod:trainer_association"])
})


ServerEvents.tags("mob_effect", event => {
    event.add("irons_spellbooks:cleanse_immune", [
        "cataclysm:ghost_sickness"
    ])
})