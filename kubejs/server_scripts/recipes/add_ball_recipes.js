console.info("[BAB] AddCobblemonBallRecipes.js loaded")

ServerEvents.recipes(event => {
    const deployingRecipe = (output, targetItem, deployedItem, keepHeld) => {
        event.custom({
            type: "create:deploying",
            ingredients: [
                targetItem,
                {item: deployedItem}
            ],
            results: [{
                id: output
            }],
            keep_held_item: keepHeld
        })
    }
    
    const recipesStampedLid = [
        {
            output: "createmonballsoverhaul:stamped_brass_nugget_lid",
            targetItem: {tag: "c:nuggets/brass"},
            deployedItem: "createmonballsoverhaul:rubber_stamp_lid",
            keepHeld: true
        },
        {
            output: "createmonballsoverhaul:stamped_copper_nugget_lid",
            targetItem: {tag: "c:nuggets/copper"},
            deployedItem: "createmonballsoverhaul:rubber_stamp_lid",
            keepHeld: true
        },
        {
            output: "createmonballsoverhaul:stamped_iron_nugget_lid",
            targetItem: {tag: "c:nuggets/iron"},
            deployedItem: "createmonballsoverhaul:rubber_stamp_lid",
            keepHeld: true
        },
        {
            output: "createmonballsoverhaul:stamped_sturdy_sheet_lid",
            targetItem: {item: "create:sturdy_sheet"},
            deployedItem: "createmonballsoverhaul:rubber_stamp_lid",
            keepHeld: true
        },
        {
            output: "createmonballsoverhaul:stamped_stripped_apricorn_log_lid",
            targetItem: {item: "cobblemon:stripped_apricorn_log"},
            deployedItem: "createmonballsoverhaul:rubber_stamp_lid",
            keepHeld: true
        }
    ]
    
    recipesStampedLid.forEach(recipe => { 
        deployingRecipe(
            recipe.output, recipe.targetItem, recipe.deployedItem, recipe.keepHeld
        )
    })
})