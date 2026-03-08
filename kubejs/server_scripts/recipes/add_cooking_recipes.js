console.info("[BAB] AddCookingRecipes.js loaded")

ServerEvents.recipes(event => {

    const cookingRecipe = (output, inputs, count, container, time, experience) => {
        event.custom({
            type: "farmersdelight:cooking",
            container: container,
            cooktime: time,
            experience: experience,
            ingredients: inputs,
            recipe_book_tab: "misc",
            result: {
                id: output,
                count: count
            }
        })
    }

    const recipesSoup = [
        {
            output: "mushroomquest:miso_soup_block",
            container: { id: "minecraft:bowl" },
            inputs: [
                {item : "minecraft:dried_kelp"},
                {tag : "mushroomquest:mushrooms"},
                {item : "minecraft:carrot"}
            ],
            time: 200,
            count: 1,
            experience: 1,
        }
    ]

    recipesSoup.forEach(recipe => { 
        cookingRecipe (
            recipe.output, recipe.inputs, recipe.count, recipe.container, recipe.time, recipe.experience
        )
    })

    //Recipes that don't fit go here

    event.replaceInput( 
        {input : "actuallyadditions:rice"},
        "actuallyadditions:rice",
        "farmersdelight:rice"
    )
    event.replaceOutput( 
        {output : "actuallyadditions:rice"},
        "actuallyadditions:rice",
        "farmersdelight:rice"
    )
    event.replaceInput( 
        {input : "culturaldelights:corn_kernels"},
        "culturaldelights:corn_kernels",
        "farm_and_charm:kernels"
    )
    event.replaceOutput( 
        {output : "culturaldelights:corn_kernels"},
        "culturaldelights:corn_kernels",
        "farm_and_charm:kernels"
    )
    event.replaceInput( 
        {input : "culturaldelights:corn_cob"},
        "culturaldelights:corn_cob",
        "farm_and_charm:corn"
    )
    event.replaceOutput( 
        {output : "culturaldelights:corn_cob"},
        "culturaldelights:corn_cob",
        "farm_and_charm:corn"
    )
})
