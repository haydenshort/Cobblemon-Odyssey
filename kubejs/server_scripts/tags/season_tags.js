console.info("[CO] SeasonTags.js loaded")

const stripTags = [
    "minecraft:apple",
    "expandeddelight:peanut",
    "expandeddelight:peanut_crop",
    "brewery:hops",
    "brewery:hops_crop",
    "minecraft:potatoes",
    "minecraft:carrots",
    "minecraft:potato",
    "minecraft:carrot",
    "minecraft:wheat_seeds",
    "minecraft:wheat",
    "minecraft:beetroot_seeds",
    "minecraft:beetroots",
    "expandeddelight:sweet_potato_crop",
    "expandeddelight:sweet_potato",
    "culturaldelights:cucumber_seeds",
    "culturaldelights:cucumbers",
    "expandeddelight:asparagus_seeds",
    "expandeddelight:asparagus_crop",
    "rusticdelight:cotton",
    "rusticdelight:cotton_seeds",
    "supplementaries:flax_seeds",
    "supplementaries:flax",
    "farm_and_charm:lettuce_seeds",
    "farm_and_charm:strawberry_seeds",
    "farm_and_charm:lettuce_crop",
    "farm_and_charm:strawberry_crop",
    "cobblemon:vivichoke_seeds",
    "cobblemon:vivichoke",
    "cobblemon:red_mint_seeds",
    "cobblemon:blue_mint_seeds",
    "cobblemon:cyan_mint_seeds",
    "cobblemon:pink_mint_seeds",
    "cobblemon:green_mint_seeds",
    "cobblemon:white_mint_seeds",
    "cobblemon:red_mint_leaf",
    "cobblemon:blue_mint_leaf",
    "cobblemon:cyan_mint_leaf",
    "cobblemon:pink_mint_leaf",
    "cobblemon:green_mint_leaf",
    "cobblemon:white_mint_leaf",
    "cobblemon:red_mint",
    "cobblemon:blue_mint",
    "cobblemon:cyan_mint",
    "cobblemon:pink_mint",
    "cobblemon:green_mint",
    "cobblemon:white_mint",
    "culturaldelights:eggplant_seeds",
    "culturaldelights:eggplants",
    "expandeddelight:chili_pepper_crop",
    "expandeddelight:chili_pepper_seeds",
    "farmersdelight:cabbage_seeds",
    "farmersdelight:cabbages",
    "farmersdelight:tomato_seeds",
    "farmersdelight:tomatoes",
    "rusticdelight:bell_pepper_seeds",
    "rusticdelight:bell_peppers",
    "farmersdelight:rice",
    "farm_and_charm:oat_seeds",
    "farm_and_charm:oat_crop",
    "farm_and_charm:barley_seeds",
    "farm_and_charm:barley_crop",
    "farm_and_charm:onion",
    "farm_and_charm:onion_crop",
    "vinery:red_grape_seeds",
    "vinery:white_grape_seeds",
    "actuallyadditions:canola_seeds",
    "actuallyadditions:canola",
    "herbalbrews:coffee_beans",
    "herbalbrews:coffee_plant",
    "herbalbrews:tea_blossom",
    "herbalbrews:tea_plant",
    "herbalbrews:yerba_mate_leaf",
    "herbalbrews:yerba_mate_plant",
    "herbalbrews:rooibos_leaf",
    "herbalbrews:rooibos_plant",
    "vinery:apple_tree_sapling",
]

const stripSeasons = (event, item) => {
    event.remove("sereneseasons:spring_crops", item);
    event.remove("sereneseasons:summer_crops", item);
    event.remove("sereneseasons:autumn_crops", item);
    event.remove("sereneseasons:winter_crops", item);
}

ServerEvents.tags("item", (event) => {
    stripTags.forEach((item) => {
        stripSeasons(event, item);
    })
})

ServerEvents.tags("block", (event) => {
    stripTags.forEach((item) => {
        stripSeasons(event, item);
    })
})

const springCrops = [
    "minecraft:potatoes",
    "minecraft:potato",
    "minecraft:carrots",
    "minecraft:carrot",
    "culturaldelights:cucumber_seeds",
    "culturaldelights:cucumbers",
    "expandeddelight:asparagus_seeds",
    "expandeddelight:asparagus_crop",
    "farm_and_charm:strawberry_seeds",
    "farm_and_charm:strawberry_crop",
    "farmersdelight:rice",
    "farm_and_charm:onion",
    "farm_and_charm:onion_crop",
    "actuallyadditions:canola_seeds",
    "actuallyadditions:canola",
    "herbalbrews:coffee_beans",
    "herbalbrews:coffee_plant",
    "herbalbrews:tea_blossom",
    "herbalbrews:tea_plant",
    "herbalbrews:yerba_mate_leaf",
    "herbalbrews:yerba_mate_plant",
    "herbalbrews:rooibos_leaf",
    "herbalbrews:rooibos_plant",
]

const summerCrops =[
    "minecraft:apple",
    "vinery:apple_tree_sapling",
    "brewery:hops",
    "brewery:hops_crop",
    "minecraft:wheat_seeds",
    "minecraft:wheat",
    "rusticdelight:cotton",
    "rusticdelight:cotton_seeds",
    "farm_and_charm:lettuce_seeds",
    "farm_and_charm:lettuce_crop",
    "expandeddelight:chili_pepper_crop",
    "expandeddelight:chili_pepper_seeds",
    "farmersdelight:cabbage_seeds",
    "farmersdelight:cabbages",
    "farmersdelight:tomato_seeds",
    "farmersdelight:tomatoes",
    "rusticdelight:bell_pepper_seeds",
    "rusticdelight:bell_peppers",
    "vinery:red_grape_seeds",
    "vinery:white_grape_seeds",
    "actuallyadditions:canola_seeds",
    "actuallyadditions:canola",
    "herbalbrews:coffee_beans",
    "herbalbrews:coffee_plant",
    "herbalbrews:tea_blossom",
    "herbalbrews:tea_plant",
    "herbalbrews:yerba_mate_leaf",
    "herbalbrews:yerba_mate_plant",
    "herbalbrews:rooibos_leaf",
    "herbalbrews:rooibos_plant",
]

const autumnCrops =[
    "minecraft:apple",
    "vinery:apple_tree_sapling",
    "expandeddelight:peanut",
    "expandeddelight:peanut_crop",
    "minecraft:wheat_seeds",
    "minecraft:wheat",
    "minecraft:beetroot_seeds",
    "minecraft:beetroots",
    "expandeddelight:sweet_potato_crop",
    "expandeddelight:sweet_potato",
    "rusticdelight:cotton",
    "rusticdelight:cotton_seeds",
    "cobblemon:vivichoke_seeds",
    "culturaldelights:eggplant_seeds",
    "culturaldelights:eggplants",
    "farm_and_charm:oat_seeds",
    "farm_and_charm:oat_crop",
    "farm_and_charm:barley_seeds",
    "farm_and_charm:barley_crop",
    "herbalbrews:tea_blossom",
    "herbalbrews:tea_plant",
]

const winterCrops = [
    "cobblemon:red_mint_seeds",
    "cobblemon:blue_mint_seeds",
    "cobblemon:cyan_mint_seeds",
    "cobblemon:pink_mint_seeds",
    "cobblemon:green_mint_seeds",
    "cobblemon:white_mint_seeds",
    "cobblemon:red_mint_leaf",
    "cobblemon:blue_mint_leaf",
    "cobblemon:cyan_mint_leaf",
    "cobblemon:pink_mint_leaf",
    "cobblemon:green_mint_leaf",
    "cobblemon:white_mint_leaf",
    "cobblemon:red_mint",
    "cobblemon:blue_mint",
    "cobblemon:cyan_mint",
    "cobblemon:pink_mint",
    "cobblemon:green_mint",
    "cobblemon:white_mint",
]

const allSeasonCrops = [
    "supplementaries:flax_seeds",
    "supplementaries:flax",
]

ServerEvents.tags("item", (event) => {
    springCrops.forEach((crop) => {
        event.add("sereneseasons:spring_crops", crop);
    })

    summerCrops.forEach((crop) => {
        event.add("sereneseasons:summer_crops", crop);
    })

    autumnCrops.forEach((crop) => {
        event.add("sereneseasons:autumn_crops", crop);
    })

    winterCrops.forEach((crop) => {
        event.add("sereneseasons:winter_crops", crop);
    })

    allSeasonCrops.forEach((crop) => {
        event.add("sereneseasons:spring_crops", crop);
        event.add("sereneseasons:autumn_crops", crop);
        event.add("sereneseasons:summer_crops", crop);
        event.add("sereneseasons:winter_crops", crop);
    })
})

ServerEvents.tags("block", (event) => {
    springCrops.forEach((crop) => {
        event.add("sereneseasons:spring_crops", crop);
    })

    summerCrops.forEach((crop) => {
        event.add("sereneseasons:summer_crops", crop);
    })

    autumnCrops.forEach((crop) => {
        event.add("sereneseasons:autumn_crops", crop);
    })

    winterCrops.forEach((crop) => {
        event.add("sereneseasons:winter_crops", crop);
    })
    
    allSeasonCrops.forEach((crop) => {
        event.add("sereneseasons:spring_crops", crop);
        event.add("sereneseasons:autumn_crops", crop);
        event.add("sereneseasons:summer_crops", crop);
        event.add("sereneseasons:winter_crops", crop);
    })
})