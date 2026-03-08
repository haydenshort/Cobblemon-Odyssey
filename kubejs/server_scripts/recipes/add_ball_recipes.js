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

    const assemblerRecipe = (output, inputItem, assemblyItem_1, assemblyItem_2, assemblyItem_3, count, timeAmount) => {
        event.custom({
            type: "oritech:assembler",
            fluidInput: {
                amount: 0,
                fluid: "minecraft:empty"
            },
            fluidOutputs: [],
            ingredients: [
                inputItem,
                assemeblyItem_1,
                assemblyItem_2,
                assemblyItem_3
            ],
            results: [{
                count: count,
                id: output
            }],
            time: timeAmount
        })
    }
    
    const recipesDeploy = [
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

    const recipesAssembler =[
        //Ball Base
        {
            output: "createmonballsoverhaul:brass_ball_mechanism",
            inputItem: {item: "createmonballsoverhaul:brass_ball_base"},
            assemblyItem_1: {tag: "c:nuggets/brass"},
            assemblyItem_2: {item: "create:shaft"},
            assemblyItem_3: {item: "createmonballsoverhaul:brass_ball_base"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "createmonballsoverhaul:brass_ancient_ball_mechanism",
            inputItem: {item: "createmonballsoverhaul:brass_ball_base"},
            assemblyItem_1: {item: "create:andesite_alloy"},
            assemblyItem_2: {item: "create:shaft"},
            assemblyItem_3: {item: "createmonballsoverhaul:brass_ball_base"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "createmonballsoverhaul:copper_ball_mechanism",
            inputItem: {item: "createmonballsoverhaul:copper_ball_base"},
            assemblyItem_1: {tag: "c:nuggets/copper"},
            assemblyItem_2: {item: "create:shaft"},
            assemblyItem_3: {item: "createmonballsoverhaul:copper_ball_base"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "createmonballsoverhaul:copper_ancient_ball_mechanism",
            inputItem: {item: "createmonballsoverhaul:copper_ball_base"},
            assemblyItem_1: {item: "create:andesite_alloy"},
            assemblyItem_2: {item: "create:shaft"},
            assemblyItem_3: {item: "createmonballsoverhaul:copper_ball_base"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "createmonballsoverhaul:iron_ball_mechanism",
            inputItem: {item: "createmonballsoverhaul:iron_ball_base"},
            assemblyItem_1: {tag: "c:nuggets/iron"},
            assemblyItem_2: {item: "create:shaft"},
            assemblyItem_3: {item: "createmonballsoverhaul:iron_ball_base"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "createmonballsoverhaul:iron_ancient_ball_mechanism",
            inputItem: {item: "createmonballsoverhaul:iron_ball_base"},
            assemblyItem_1: {item: "create:andesite_alloy"},
            assemblyItem_2: {item: "create:shaft"},
            assemblyItem_3: {item: "createmonballsoverhaul:iron_ball_base"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "createmonballsoverhaul:sturdy_ball_mechanism",
            inputItem: {item: "createmonballsoverhaul:sturdy_ball_base"},
            assemblyItem_1: {item: "create:andesite_alloy"},
            assemblyItem_2: {item: "create:shaft"},
            assemblyItem_3: {item: "createmonballsoverhaul:sturdy_ball_base"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "createmonballsoverhaul:sturdy_ancient_ball_mechanism",
            inputItem: {item: "createmonballsoverhaul:sturdy_ball_base"},
            assemblyItem_1: {item: "create:rose_quartz"},
            assemblyItem_2: {item: "create:shaft"},
            assemblyItem_3: {item: "createmonballsoverhaul:sturdy_ball_base"},
            count: 1,
            timeAmount: 120
        },

        //Tier 1 Ball
        {
            output: "cobblemon:azure_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:blue_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:blank_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:citrine_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:yellow_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:blank_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:poke_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:red_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:blank_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:premier_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:white_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:blank_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:roseate_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:pink_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:blank_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:slate_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:black_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:blank_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:verdant_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:green_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:blank_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },

        //Tier 1 Ancient
        {
            output: "cobblemon:ancient_azure_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ancient_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:coated_blue_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:apricorn_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:ancient_citrine_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ancient_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:coated_yellow_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:apricorn_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:ancient_poke_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ancient_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:coated_red_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:apricorn_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:ancient_premier_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ancient_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:coated_white_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:apricorn_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:ancient_roseate_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ancient_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:coated_pink_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:apricorn_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:ancient_slate_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ancient_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:coated_black_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:apricorn_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        },
        {
            output: "cobblemon:ancient_verdant_ball",
            inputItem: {item: "createmonballsoverhaul:copper_ancient_ball_mechanism"},
            assemblyItem_1: {item: "createmonballsoverhaul:coated_green_ball_lid"},
            assemblyItem_2: {item: "createmonballsoverhaul:apricorn_ball_lid"},
            assemblyItem_3: {tag: "c:rods/iron"},
            count: 1,
            timeAmount: 120
        }
    ]
    
    recipesDeploy.forEach(recipe => { 
        deployingRecipe(
            recipe.output, recipe.targetItem, recipe.deployedItem, recipe.keepHeld
        )
    })

    recipesAssembler.forEach(recipe => {
        assemblerRecipe(
            recipe.output, recipe.inputItem, recipe.assemblyItem_1, recipe.assemblyItem_2, recipe.assemblyItem_3, recipe.count, recipe.timeAmount
        )
    })
})