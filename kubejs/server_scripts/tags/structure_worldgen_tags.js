console.info("[CO] StructureTags.js loaded")

ServerEvents.tags("worldgen/structure", event => {
  event.add("cataclysm:berserker_spawn", "betterfortresses:fortress")
})