# Changelog

# 0.6.0-beta

## General changes and notes

Summary of changes here:

<details open>
<summary>Github Commits</summary>
<blockquote>
  
- Updated JustHammers Recipes to better match vanilla netherite recipes.
- Reimplemented Milk and Milk Buckets (subject to change in future).

</details>

---

## Mods

<details open>
<summary>Added (1)</summary>

- NeoAuth (1.0.0)
- Simple Backups (4.0.28)

</details>

<details>
<summary>Updated (14)</summary>

<details open>
<summary>Mods</summary>

- Bosses Rise (2.0.4) -> (2.0.5)
- CarryOn (2.2.4.4) -> (2.2.2.11)
- Cobbleloots: Loot Balls and More! (2.1.0) -> (2.2.2)
- Cobblemon Firework Capsules (2.1.0) -> (2.1.1)
- Cobblemon Raid Dens (0.7.6) -> (0.8.1)
- Extreme Sound Mufflers (3.54) -> (3.55)
- FamiliarsLib (1.5) -> (1.6)
- Immersive Optimizations (0.1.1) -> (0.1.4)
- Iron's Spells and Spellbooks (3.15.3) -> (3.15.4)
- Moonlight Lib (2.29.18) -> (2.29.20)
- SeasonsHUD (1.13.17) -> (2.0.0)
- Shoulder Surfing (4.21.0) -> (4.22.0)
- Sophisticated Backpacks (3.25.30.1537) -> (3.25.30.1547)
- Supplementaries (3.25.5) -> (3.25.6)

</details>

<details open>
<summary>Resource Packs </summary>

</details>

<details open>
<summary>Shader Packs</summary>

- MakeUp Ultra Fast

</details>

</details>

<details open>
<summary>Removed ()</summary>

</details>

## Recipes

<details>
<summary>Removed (0)</summary>
<blockquote>

</details>

<details>
<summary>Added (5)</summary>
<blockquote>

<details>
<summary>justhammers/kjs/netherite_hammer</summary>
  
```diff
+{
+  "type": "minecraft:smithing_transform",
+  "template": {
+    "item": "minecraft:netherite_upgrade_smithing_template"
+  },
+  "base": {
+    "item": "justhammers:diamond_hammer"
+  },
+  "addition": {
+    "item": "minecraft:netherite_ingot"
+  },
+  "result": {
+    "item": "justhammers:netherite_hammer"
+  }
+}
+ kubejs_changed_marker: {
+    source: "server_scripts:recipes/add_misc_recipes.js"
+    line: 24
```
</details>

<details>
<summary>justhammers/kjs/netherite_impact_hammer</summary>
  
```diff
+{
+  "type": "minecraft:smithing_transform",
+  "template": {
+    "item": "justhammers:impact_core"
+  },
+  "base": {
+    "item": "justhammers:diamond_impact_hammer"
+  },
+  "addition": {
+    "item": "minecraft:netherite_block"
+  },
+  "result": {
+    "item": "justhammers:netherite_impact_hammer"
+  }
+}
+ kubejs_changed_marker: {
+    source: "server_scripts:recipes/add_misc_recipes.js"
+    line: 30
```
</details>

<details>
<summary>justhammers/kjs/netherite_reinforced_hammer</summary>

```diff
+{
+  "type": "minecraft:smithing_transform",
+  "template": {
+    "item": "justhammers:reinforced_core"
+  },
+  "base": {
+    "item": "justhammers:diamond_reinforced_hammer"
+  },
+  "addition": {
+    "item": "minecraft:netherite_block"
+  },
+  "result": {
+    "item": "justhammers:netherite_reinforced_hammer"
+  }
+}
+ kubejs_changed_marker: {
+    source: "server_scripts:recipes/add_misc_recipes.js"
+    line: 36
```
</details>

<details>
<summary>justhammers/kjs/netherite_reinforced_impact_hammer</summary>

```diff
+{
+  "type": "minecraft:smithing_transform",
+  "template": {
+    "item": "justhammers:reinforced_impact_core"
+  },
+  "base": {
+    "item": "justhammers:diamond_reinforced_impact_hammer"
+  },
+  "addition": {
+    "item": "minecraft:netherite_block"
+  },
+  "result": {
+    "item": "justhammers:netherite_reinforced_impact_hammer"
+  }
+}
+ kubejs_changed_marker: {
+    source: "server_scripts:recipes/add_misc_recipes.js"
+    line: 24
```
</details>

<details>
<summary>justhammers/kjs/netherite_destructor_hammer</summary>

```diff
+{
+  "type": "minecraft:smithing_transform",
+  "template": {
+    "item": "justhammers:destructor_core"
+  },
+  "base": {
+    "item": "justhammers:diamond_destructor_hammer"
+  },
+  "addition": {
+    "item": "minecraft:netherite_block"
+  },
+  "result": {
+    "item": "justhammers:netherite_destructor_hammer"
+  }
+}
+ kubejs_changed_marker: {
+    source: "server_scripts:recipes/add_misc_recipes.js"
+    line: 48
```
</details>

</details>

<details>
<summary>Changed (0)</summary>
<blockquote>

</details>

## Tags

<details>
<summary>Removed (0)</summary>
<blockquote>

</details>

<details>
<summary>Added (0)</summary>
<blockquote>

</details>

<details>
<summary>Changed (0)</summary>
<blockquote>

</details>

</details>

## Registries

<details>
<summary>Removed (0)</summary>
<blockquote>

</details>

<details>
<summary>Added (0)</summary>
<blockquote>

</details>

<details>
<summary>Changed (0)</summary>
<blockquote>

</details>

</details>

## Loot Tables

<details>
<summary>Removed (0)</summary>
<blockquote>

</details>

<details>
<summary>Added (0)</summary>
<blockquote>

</details>

<details>
<summary>Changed (0)</summary>
<blockquote>

</details>

</details>
