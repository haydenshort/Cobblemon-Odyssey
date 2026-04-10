console.info("[CO] DisableLootTables.js loaded")

ServerEvents.generateData('after_mods', event => {
    let ids = JsonIO.read("kubejs/server_scripts/tweaks/disable_loot_tables.json").ids
    
    for (let id of ids) {
        event.json(`${id}.json`, {"neoforge:conditions": [{"type": "neoforge:false"}]})
    }
})