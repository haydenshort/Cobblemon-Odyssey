# Changelog

# 0.6.0-beta

## General Changes

- Updated JustHammers recipes to better match vanilla netherite recipes.
- Reimplemented Milk and Milk Buckets *(subject to change)*.
- Replaced CCC Resource/Data Pack with Mod.
- **Cobbreeding Tweaks:**
  - Increased egg hatch time.
  - Increased Shiny odds (Masuda 2x, Crystal 4x, Always 8x).
  - Custom egg colors.
  - Decreased breeding pasture size.
  - Enabled the ability to view egg stats.
- Added SimpleTMs to Cobbleloot Loot Balls.
- Reduced SparseStructure Spread to 1.2 from 1.4.

---

## Mods, Shaders, Resource / Data Packs

### Removed (2)
- Complete Cobblemon Collection Resource/Data Pack (2.0)
- Extra Disks (4.0.14)

### Added (8)
- Cobblemon Pokerus (1.1.0)
- Cobblemon Size Variations (1.4.0)
- Cobbreeding (2.2.1)
- Complete Cobblemon Collection Mod Version (2.0)
- Create: Copycats+ (3.0.4)
- NeoAuth (1.0.0)
- Simple Backups (4.0.28)
- StructureOverlapless (1.2.0)

### Updated (36)
| Mod | Old | New |
|-----|-----|-----|
| Advanced Loot Info | 1.7.3 | 1.8.0 |
| AllTheLeaks | 1.1.6 | 1.1.7 |
| Better Combat | 2.3.1 | 2.3.2 |
| Bosses Rise | 2.0.4 | 2.0.6 |
| CarryOn | 2.2.4.4 | 2.2.2.11 |
| Certain Questing Additions | 1.1.3 | 1.1.5 |
| Cobbleloots: Loot Balls and More! | 2.1.0 | 2.2.2 |
| Cobblemon Firework Capsules | 2.1.0 | 2.1.1 |
| Cobblemon Mega Showdown | 1.6.12 | 1.7.1 |
| Cobblemon Party Extras | 1.6.11 | 1.6.12 |
| Cobblemon PlayerXP | 1.0.6 | 1.0.8 |
| Cobblemon Raid Dens | 0.7.6 | 0.8.2 |
| Crash Assistant | 1.10.30 | 1.11.0 |
| Create: Central Kitchen | 2.2.6 | 2.3.0 |
| Create: Integrated Farming | 1.2.0c | 1.2.1 |
| CreativeCore | 2.13.34 | 2.13.35 |
| Ender's Delight | 1.1.0 | 1.2.0 |
| Exposure | 1.9.13 | 1.9.14 |
| Extreme Sound Mufflers | 3.54 | 3.55 |
| FamiliarsLib | 1.5 | 1.6 |
| FTB XMod Compat | 21.1.7 | 21.1.7 |
| GeckoLib | 4.8.3 | 4.8.4 |
| Immersive Optimizations | 0.1.1 | 0.1.4 |
| Iron's Spells and Spellbooks | 3.15.3 | 3.15.4 |
| Lithostiched | 1.5.7 | 1.6.0 |
| Moonlight Lib | 2.29.18 | 2.29.20 |
| Mowzie's Mobs | 1.7.5 | 1.8.1 |
| OctoLib | 0.6.0.4 | 0.6.1 |
| Oh The Trees You'll Grow | 5.2.0 | 5.2.1 |
| SeasonsHUD | 1.13.17 | 2.0.1 |
| Shoulder Surfing Reloaded | 4.21.0 | 4.22.1 |
| Simply Swords | 1.62.0 | 1.63.0 |
| Sophisticated Backpacks | 3.25.30.1537 | 3.25.31.1560 |
| Sophisticated Core | 1.4.5.1499 | 1.4.6.1506 |
| Structurify | 2.0.18 | 2.0.19 |
| Supplementaries | 3.25.25 | 3.25.28 |

---

## Recipes

### Added (32)

#### JustHammers Netherite Upgrades (5)
- Netherite Hammer
- Netherite Impact Hammer
- Netherite Reinforced Hammer
- Netherite Reinforced Impact Hammer
- Netherite Destructor Hammer

<details>
<summary>View Recipe Details</summary>

<details>
<summary>justhammers/kjs/netherite_hammer</summary>
  
```diff
+{
+  "type": "minecraft:smithing_transform",
+  "template": { "item": "minecraft:netherite_upgrade_smithing_template" },
+  "base": { "item": "justhammers:diamond_hammer" },
+  "addition": { "item": "minecraft:netherite_ingot" },
+  "result": { "item": "justhammers:netherite_hammer" }
+}
```
</details>

<details>
<summary>justhammers/kjs/netherite_impact_hammer</summary>
  
```diff
+{
+  "type": "minecraft:smithing_transform",
+  "template": { "item": "justhammers:impact_core" },
+  "base": { "item": "justhammers:diamond_impact_hammer" },
+  "addition": { "item": "minecraft:netherite_block" },
+  "result": { "item": "justhammers:netherite_impact_hammer" }
+}
```
</details>

<details>
<summary>justhammers/kjs/netherite_reinforced_hammer</summary>
  
```diff
+{
+  "type": "minecraft:smithing_transform",
+  "template": { "item": "justhammers:reinforced_core" },
+  "base": { "item": "justhammers:diamond_reinforced_hammer" },
+  "addition": { "item": "minecraft:netherite_block" },
+  "result": { "item": "justhammers:netherite_reinforced_hammer" }
+}
```
</details>

<details>
<summary>justhammers/kjs/netherite_reinforced_impact_hammer</summary>
  
```diff
+{
+  "type": "minecraft:smithing_transform",
+  "template": { "item": "justhammers:reinforced_impact_core" },
+  "base": { "item": "justhammers:diamond_reinforced_impact_hammer" },
+  "addition": { "item": "minecraft:netherite_block" },
+  "result": { "item": "justhammers:netherite_reinforced_impact_hammer" }
+}
```
</details>

<details>
<summary>justhammers/kjs/netherite_destructor_hammer</summary>
  
```diff
+{
+  "type": "minecraft:smithing_transform",
+  "template": { "item": "justhammers:destructor_core" },
+  "base": { "item": "justhammers:diamond_destructor_hammer" },
+  "addition": { "item": "minecraft:netherite_block" },
+  "result": { "item": "justhammers:netherite_destructor_hammer" }
+}
```
</details>

</details>

#### Create Deploying: Stamped Ball Lids (5)
- Stamped Brass Nugget Lid
- Stamped Copper Nugget Lid
- Stamped Iron Nugget Lid
- Stamped Sturdy Sheet Lid
- Stamped Stripped Apricorn Log Lid

<details>
<summary>View Recipe Details</summary>

<details>
<summary>createmonballsoverhaul/stamped_brass_nugget_lid</summary>
  
```diff
+{
+  "type": "create:deploying",
+  "ingredients": [
+    { "tag": "c:nuggets/brass" },
+    { "item": "createmonballsoverhaul:rubber_stamp_lid" }
+  ],
+  "results": [
+    { "id": "createmonballsoverhaul:stamped_brass_nugget_lid" }
+  ],
+  "keep_held_item": true
+}
```
</details>

<details>
<summary>createmonballsoverhaul/stamped_copper_nugget_lid</summary>
  
```diff
+{
+  "type": "create:deploying",
+  "ingredients": [
+    { "tag": "c:nuggets/copper" },
+    { "item": "createmonballsoverhaul:rubber_stamp_lid" }
+  ],
+  "results": [
+    { "id": "createmonballsoverhaul:stamped_copper_nugget_lid" }
+  ],
+  "keep_held_item": true
+}
```
</details>

<details>
<summary>createmonballsoverhaul/stamped_iron_nugget_lid</summary>
  
```diff
+{
+  "type": "create:deploying",
+  "ingredients": [
+    { "tag": "c:nuggets/iron" },
+    { "item": "createmonballsoverhaul:rubber_stamp_lid" }
+  ],
+  "results": [
+    { "id": "createmonballsoverhaul:stamped_iron_nugget_lid" }
+  ],
+  "keep_held_item": true
+}
```
</details>

<details>
<summary>createmonballsoverhaul/stamped_sturdy_sheet_lid</summary>
  
```diff
+{
+  "type": "create:deploying",
+  "ingredients": [
+    { "item": "create:sturdy_sheet" },
+    { "item": "createmonballsoverhaul:rubber_stamp_lid" }
+  ],
+  "results": [
+    { "id": "createmonballsoverhaul:stamped_sturdy_sheet_lid" }
+  ],
+  "keep_held_item": true
+}
```
</details>

<details>
<summary>createmonballsoverhaul/stamped_stripped_apricorn_log_lid</summary>
  
```diff
+{
+  "type": "create:deploying",
+  "ingredients": [
+    { "item": "cobblemon:stripped_apricorn_log" },
+    { "item": "createmonballsoverhaul:rubber_stamp_lid" }
+  ],
+  "results": [
+    { "id": "createmonballsoverhaul:stamped_stripped_apricorn_log_lid" }
+  ],
+  "keep_held_item": true
+}
```
</details>

</details>

#### Oritech Assembler: Ball Mechanisms (8)
- Brass Ball Mechanism
- Brass Ancient Ball Mechanism
- Copper Ball Mechanism
- Copper Ancient Ball Mechanism
- Iron Ball Mechanism
- Iron Ancient Ball Mechanism
- Sturdy Ball Mechanism
- Sturdy Ancient Ball Mechanism

<details>
<summary>View Recipe Details</summary>

<details>
<summary>oritech/assembler/brass_ball_mechanism</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:brass_ball_base" },
+    { "tag": "c:nuggets/brass" },
+    { "item": "create:shaft" },
+    { "item": "createmonballsoverhaul:brass_ball_base" }
+  ],
+  "results": [{ "count": 1, "id": "createmonballsoverhaul:brass_ball_mechanism" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/brass_ancient_ball_mechanism</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:brass_ball_base" },
+    { "item": "create:andesite_alloy" },
+    { "item": "create:shaft" },
+    { "item": "createmonballsoverhaul:brass_ball_base" }
+  ],
+  "results": [{ "count": 1, "id": "createmonballsoverhaul:brass_ancient_ball_mechanism" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/copper_ball_mechanism</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ball_base" },
+    { "tag": "c:nuggets/copper" },
+    { "item": "create:shaft" },
+    { "item": "createmonballsoverhaul:copper_ball_base" }
+  ],
+  "results": [{ "count": 1, "id": "createmonballsoverhaul:copper_ball_mechanism" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/copper_ancient_ball_mechanism</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ball_base" },
+    { "item": "create:andesite_alloy" },
+    { "item": "create:shaft" },
+    { "item": "createmonballsoverhaul:copper_ball_base" }
+  ],
+  "results": [{ "count": 1, "id": "createmonballsoverhaul:copper_ancient_ball_mechanism" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/iron_ball_mechanism</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:iron_ball_base" },
+    { "tag": "c:nuggets/iron" },
+    { "item": "create:shaft" },
+    { "item": "createmonballsoverhaul:iron_ball_base" }
+  ],
+  "results": [{ "count": 1, "id": "createmonballsoverhaul:iron_ball_mechanism" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/iron_ancient_ball_mechanism</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:iron_ball_base" },
+    { "item": "create:andesite_alloy" },
+    { "item": "create:shaft" },
+    { "item": "createmonballsoverhaul:iron_ball_base" }
+  ],
+  "results": [{ "count": 1, "id": "createmonballsoverhaul:iron_ancient_ball_mechanism" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/sturdy_ball_mechanism</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:sturdy_ball_base" },
+    { "item": "create:andesite_alloy" },
+    { "item": "create:shaft" },
+    { "item": "createmonballsoverhaul:sturdy_ball_base" }
+  ],
+  "results": [{ "count": 1, "id": "createmonballsoverhaul:sturdy_ball_mechanism" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/sturdy_ancient_ball_mechanism</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:sturdy_ball_base" },
+    { "item": "create:rose_quartz" },
+    { "item": "create:shaft" },
+    { "item": "createmonballsoverhaul:sturdy_ball_base" }
+  ],
+  "results": [{ "count": 1, "id": "createmonballsoverhaul:sturdy_ancient_ball_mechanism" }],
+  "time": 120
+}
```
</details>

</details>

#### Oritech Assembler: Pokéballs (14)
**Standard Balls (7):** Azure, Citrine, Poke, Premier, Roseate, Slate, Verdant  
**Ancient Balls (7):** Ancient Azure, Ancient Citrine, Ancient Poke, Ancient Premier, Ancient Roseate, Ancient Slate, Ancient Verdant

<details>
<summary>View All Pokéball Recipes</summary>

**Standard Pokéballs:**

<details>
<summary>oritech/assembler/azure_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ball_mechanism" },
+    { "item": "createmonballsoverhaul:blue_ball_lid" },
+    { "item": "createmonballsoverhaul:blank_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:azure_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/citrine_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ball_mechanism" },
+    { "item": "createmonballsoverhaul:yellow_ball_lid" },
+    { "item": "createmonballsoverhaul:blank_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:citrine_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/poke_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ball_mechanism" },
+    { "item": "createmonballsoverhaul:red_ball_lid" },
+    { "item": "createmonballsoverhaul:blank_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:poke_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/premier_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ball_mechanism" },
+    { "item": "createmonballsoverhaul:white_ball_lid" },
+    { "item": "createmonballsoverhaul:blank_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:premier_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/roseate_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ball_mechanism" },
+    { "item": "createmonballsoverhaul:pink_ball_lid" },
+    { "item": "createmonballsoverhaul:blank_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:roseate_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/slate_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ball_mechanism" },
+    { "item": "createmonballsoverhaul:black_ball_lid" },
+    { "item": "createmonballsoverhaul:blank_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:slate_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/verdant_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ball_mechanism" },
+    { "item": "createmonballsoverhaul:green_ball_lid" },
+    { "item": "createmonballsoverhaul:blank_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:verdant_ball" }],
+  "time": 120
+}
```
</details>

**Ancient Pokéballs:**

<details>
<summary>oritech/assembler/ancient_azure_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ancient_ball_mechanism" },
+    { "item": "createmonballsoverhaul:coated_blue_ball_lid" },
+    { "item": "createmonballsoverhaul:apricorn_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:ancient_azure_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/ancient_citrine_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ancient_ball_mechanism" },
+    { "item": "createmonballsoverhaul:coated_yellow_ball_lid" },
+    { "item": "createmonballsoverhaul:apricorn_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:ancient_citrine_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/ancient_poke_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ancient_ball_mechanism" },
+    { "item": "createmonballsoverhaul:coated_red_ball_lid" },
+    { "item": "createmonballsoverhaul:apricorn_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:ancient_poke_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/ancient_premier_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ancient_ball_mechanism" },
+    { "item": "createmonballsoverhaul:coated_white_ball_lid" },
+    { "item": "createmonballsoverhaul:apricorn_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:ancient_premier_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/ancient_roseate_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ancient_ball_mechanism" },
+    { "item": "createmonballsoverhaul:coated_pink_ball_lid" },
+    { "item": "createmonballsoverhaul:apricorn_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:ancient_roseate_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/ancient_slate_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ancient_ball_mechanism" },
+    { "item": "createmonballsoverhaul:coated_black_ball_lid" },
+    { "item": "createmonballsoverhaul:apricorn_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:ancient_slate_ball" }],
+  "time": 120
+}
```
</details>

<details>
<summary>oritech/assembler/ancient_verdant_ball</summary>
  
```diff
+{
+  "type": "oritech:assembler",
+  "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
+  "fluidOutputs": [],
+  "ingredients": [
+    { "item": "createmonballsoverhaul:copper_ancient_ball_mechanism" },
+    { "item": "createmonballsoverhaul:coated_green_ball_lid" },
+    { "item": "createmonballsoverhaul:apricorn_ball_lid" },
+    { "tag": "c:rods/iron" }
+  ],
+  "results": [{ "count": 1, "id": "cobblemon:ancient_verdant_ball" }],
+  "time": 120
+}
```
</details>

</details>

---

## Loot Tables

### Changed (23)

**Rebalanced Loot Ball drop weights and added SimpleTMs to all Loot Ball loot tables**

All loot balls have been rebalanced to improve drop rates and now include TMs and TRs from SimpleTMs.

<details>
<summary>Weight Rebalancing Summary</summary>

**Tier 1 Balls** (Azure, Citrine, Poke, Premier, Roseate, Slate, Verdant):
- Ball/Apricorn/Seed weights: 10 → 22
- Resource weights: 10 → 11 (Verdant emerald: 5 → 11)
- Candy weight: 1 → 2
- Added: TR items (weight 10), TM items (weight 1)

**Tier 2 Balls** (Dive, Great, Heal, Lure, Nest, Net, Rainbow, Safari, Timer):
- Ball weights: 10 → 18-20
- Resource/item weights increased proportionally
- Medicine weight: 8 → 11-14
- EV items weight: 2 → 4
- Candy weight: 1 → 2
- Tools weight: 1 → 2 (where applicable)
- Added: TR items (weight 15), TM items (weight 2)

**Tier 3 Balls** (Dusk, Luxury, Pumpkin, Quick, Ultra):
- Ball weights: 10 → 14-18
- Valuable item weights increased significantly
- Medicine/loot table weights increased proportionally
- Added: TR items (weight 25), TM items (weight 6)

**Tier 4 Balls** (Master):
- Ball weight: 10 → 14
- Netherite ingot: 8 → 11
- Nether star: 6 → 9
- Ability patch: 4 → 6
- Medicine ultra rare: 8 → 11
- EV ultra rare: 2 → 3
- Candy ultra rare: 1 → 2
- Added: TR items (weight 35), TM items (weight 8)

</details>

<details>
<summary>SimpleTMs Addition</summary>

All loot balls now include Technical Records (TR) and Technical Machines (TM) with weights scaled by tier:
```json
{
  "type": "minecraft:tag",
  "name": "simpletms:tr_items",
  "expand": true,
  "weight": [varies by ball tier: 10/15/25/35]
},
{
  "type": "minecraft:tag",
  "name": "simpletms:tm_items",
  "expand": true,
  "weight": [varies by ball tier: 1/2/6/8]
}
```

**SimpleTMs Weight Distribution by Ball Tier:**
- **Tier 1**: TR weight 10, TM weight 1
- **Tier 2**: TR weight 15, TM weight 2
- **Tier 3**: TR weight 25, TM weight 6
- **Tier 4**: TR weight 35, TM weight 8

</details>

**Affected Loot Balls (23):**
- **Tier 1 (7)**: Azure, Citrine, Poke, Premier, Roseate, Slate, Verdant
- **Tier 2 (9)**: Dive, Great, Heal, Lure, Nest, Net, Rainbow, Safari, Timer
- **Tier 3 (6)**: Dusk, Luxury, Pumpkin, Quick, Ultra
- **Tier 4 (1)**: Master
