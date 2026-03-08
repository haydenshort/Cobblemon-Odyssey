console.info("[BAB] AddCobblemonBallRecipes.js loaded")

ServerEvents.recipes(event => {
    const stampedLidRecipes = [
        // [output, targetItem, count]
        ["createmonballsoverhaul:brass_lid", {tag: "c:nuggets/brass"}, 1],
        ["createmonballsoverhaul:copper_lid", {tag: "c:nuggets/copper"}, 1],
        ["createmonballsoverhaul:iron_lid", {tag: "c:nuggets/iron"}, 1],
        ["createmonballsoverhaul:sturdy_lid", {item: "create:sturdy_sheet"}, 1],
        ["createmonballsoverhaul:apricorn_lid", {item: "cobblemon:stripped_apricorn_log"}, 1]
    ]
    
    stampedLidRecipes.forEach(([output, targetItem, count]) => {
        event.custom({
            type: "create:deploying",
            ingredients: [
                targetItem,
                {item: "createmonballsoverhaul:rubber_stamp_lid"}
            ],
            results: [{
                item: output,
                count: count
            }],
            keep_held_item: true
        })
    })
})