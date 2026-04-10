console.log(`[CO] Hiding ${global.removedItems.length} items from JEI`)

RecipeViewerEvents.removeEntriesCompletely("item", event => {
    event.remove(global.removedItems)
    event.remove(global.hiddenItems)
})