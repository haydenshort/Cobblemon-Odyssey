console.info("[CO] AddCookingRecipes.js loaded")

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

    //const recipesSoup = [

    //]

    //recipesSoup.forEach(recipe => {
        //cookingRecipe (
            //recipe.output, recipe.inputs, recipe.count, recipe.container, recipe.time, recipe.experience
        //)
   //})

    //Recipes that don't fit go here

})
