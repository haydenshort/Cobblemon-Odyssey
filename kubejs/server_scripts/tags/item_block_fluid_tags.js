console.info("[BAB] ItemBlockFluidTags.js loaded")

ServerEvents.tags("items", event => {

    const stripTags = [
    ]
    
    stripTags.forEach((item) => {
        event.removeAllTagsFrom(item)
    })
    global.removedItems.forEach((item) => {
        event.removeAllTagsFrom(item);
        event.add("c:hidden_from_recipe_viewers", item);
    })
})

ServerEvents.tags("item", event => {
    
    event.remove("c:ingots/steel", "oritech:biosteel_ingot")

    event.add("minecraft:bookshelf_books", "powah:book")
    event.add("minecraft:bookshelf_books", "actuallyadditions:booklet")
    event.add("minecraft:bookshelf_books", "patchouli:guide_book")

    event.remove("minecraft:head_armor",["pkgbadges:alians_scraf_helmet"])
    event.add("minecraft:head_armor",["pkgbadges:alians_scraf"])

    event.add("curious:head", "#simplehats:all_hats")
})

ServerEvents.tags("block", event => {
    event.add("ftbchunks:interact_whitelist", ["@waystones"])
    event.add("justdirethings:lawnmowerable", "#c:grass")
})

ServerEvents.tags("fluid", event => {
  event.add("c:experience", "create_enchantment_industry:experience")
})