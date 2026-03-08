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

---

## Mods, Shaders, Resource / Data Packs

### Removed (1)
- Complete Cobblemon Collection Resource/Data Pack (2.0)
- Extra Disks (4.0.14)

### Added (7)
- Cobblemon Pokerus (1.1.0)
- Cobblemon: Size Variations (1.4.0)
- Cobbreeding (2.2.1)
- Create: Copycats+ (3.0.4)
- NeoAuth (1.0.0)
- Simple Backups (4.0.28)
- Complete Cobblemon Collection Mod Version (2.0)

### Updated (21)
| Mod | Old | New |
|-----|-----|-----|
| Bosses Rise | 2.0.4 | 2.0.6 |
| CarryOn | 2.2.4.4 | 2.2.2.11 |
| Cobbleloots: Loot Balls and More! | 2.1.0 | 2.2.2 |
| Cobblemon Firework Capsules | 2.1.0 | 2.1.1 |
| Cobblemon Party Extras | 1.6.11 | 1.6.12 |
| Cobblemon: PlayerXP | 1.0.6 | 1.0.7 |
| Cobblemon Raid Dens | 0.7.6 | 0.8.1 |
| Ender's Delight | 1.1.0 | 1.2.0 |
| Exposure | 1.9.13 | 1.9.14 |
| Extreme Sound Mufflers | 3.54 | 3.55 |
| FamiliarsLib | 1.5 | 1.6 |
| GeckoLib | 4.8.3 | 4.8.4 |
| Immersive Optimizations | 0.1.1 | 0.1.4 |
| Iron's Spells and Spellbooks | 3.15.3 | 3.15.4 |
| Moonlight Lib | 2.29.18 | 2.29.20 |
| SeasonsHUD | 1.13.17 | 2.0.0 |
| Shoulder Surfing | 4.21.0 | 4.22.0 |
| Simply Swords | 1.62.0 | 1.63.0 |
| Sophisticated Backpacks | 3.25.30.1537 | 3.25.30.1547 |
| Sophisticated Backpacks | 1.4.5.1499 | 1.4.6.1506 |
| Supplementaries | 3.25.5 | 3.25.6 |
| MakeUp Ultra Fast | 9.4b | 9.4c |

---

## Recipes

### Added (5)

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

---

## Loot Tables

### Changed (23)

<details>
<summary>cobbleloots/loot_table/loot_ball/azure</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 10,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 1,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/citrine</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 10,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 1,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/dive</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 15,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 2,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/dusk</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 25,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 6,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/great</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 15,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 2,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/heal</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 15,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 2,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/lure</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 15,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 2,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/luxury</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 25,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 6,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/master</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 35,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 8,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/nest</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 15,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 2,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/net</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 15,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 2,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/poke</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 10,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 1,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/premier</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 10,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 1,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/pumpkin</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 25,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 6,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/quick</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 25,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 6,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/rainbow</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 15,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 2,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/roseate</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 10,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 1,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/safari</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 15,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 2,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/slate</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 10,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 1,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/timer</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 15,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 2,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/ultra</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 25,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 6,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>

<details>
<summary>cobbleloots/loot_table/loot_ball/verdant</summary>

```diff
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tr_items",
+  "expand": true,
+  "weight": 10,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+},
+{
+  "type": "minecraft:tag",
+  "name": "simpletms:tm_items",
+  "expand": true,
+  "weight": 1,
+  "functions": [
+    {
+      "function": "minecraft:set_count",
+      "count": { "min": 1, "max": 1 }
+    }
+  ]
+}
```

</details>
