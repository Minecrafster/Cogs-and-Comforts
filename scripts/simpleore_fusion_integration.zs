import crafttweaker.api.recipe.MirrorAxis;
import mods.jeitweaker.Jei;
#Jei.hideCategory(<resource:fusion:alloying>);
//remove fusion furnace recipe. All alloying done in create mixer instead
recipes.remove(<item:fusion:fusion_furnace>);

//Fusion Alloying integration
//Greater production efficiency also takes more time
//Obsolete. Use Fluid Mixing Mechanic Instead.

//Valfram
/*
<recipetype:create:mixing>.addRecipe("valfram_from_mixing",<constant:create:heat_condition:heated>,[<item:simpletungsten:large_valfram_chunk>],[<item:simpletungsten:tungsten_ingot>,<item:minecraft:nether_brick>],[<fluid:minecraft:lava> * 1000],150);

<recipetype:create:mixing>.addRecipe("medium_valfram_chunk_from_mixing",<constant:create:heat_condition:heated>,[<item:simpletungsten:valfram_nugget>],[<item:simpletungsten:tungsten_ingot>,<item:minecraft:nether_brick>,<item:minecraft:glowstone_dust>],[],125);

<recipetype:create:mixing>.addRecipe("valfram_nugget_from_mixing",<constant:create:heat_condition:heated>,[<item:simpletungsten:valfram_nugget>],[<item:simpletungsten:tungsten_ingot>,<item:minecraft:nether_brick>,<item:minecraft:gunpowder>],[],100);

//Tungsten Carbide(WC)
<recipetype:create:mixing>.addRecipe("wc_from_mixing",<constant:create:heat_condition:heated>,[<item:simpletungsten:large_tungsten_carbide_chunk>],[<item:simpletungsten:tungsten_ingot>,<item:minecraft:brick>,<item:minecraft:gunpowder>],[],150);

<recipetype:create:mixing>.addRecipe("medium_wc_chunk_from_mixing",<constant:create:heat_condition:heated>,[<item:simpletungsten:medium_tungsten_carbide_chunk>],[<item:simpletungsten:tungsten_ingot>,<item:minecraft:brick>,<tag:items:minecraft:coals>],[],125);

<recipetype:create:mixing>.addRecipe("wc_nugget_from_mixing",<constant:create:heat_condition:heated>,[<item:simpletungsten:tungsten_carbide_nugget>],[<item:simpletungsten:tungsten_ingot>,<item:minecraft:brick>,<item:minecraft:bone_meal>],[],100);

//Tungsten Steel
<recipetype:create:mixing>.addRecipe("tungsten_steel_from_mixing",<constant:create:heat_condition:heated>,[<item:simpletungsten:large_tungsten_steel_chunk> * 2],[<item:simpletungsten:tungsten_ingot>, <item:minecraft:iron_ingot>, <item:simpleores:tin_ingot>],[],150);

//Prasinos
<recipetype:create:mixing>.addRecipe("prasinos_nugget_from_mixing",<constant:create:heat_condition:heated>,[<item:simpletungsten:prasinos_nugget>],[<item:simpletungsten:tungsten_ingot>,<item:simpleores:adamantium_ingot>,<item:minecraft:glowstone_dust>],[],100);

<recipetype:create:mixing>.addRecipe("medium_prasinos_chunk_from_mixing",<constant:create:heat_condition:heated>,[<item:simpletungsten:medium_prasinos_chunk>],[<item:simpletungsten:tungsten_ingot>,<item:simpleores:adamantium_ingot>,<item:minecraft:magma_cream>],[],125);

<recipetype:create:mixing>.addRecipe("prasinos_from_mixing",<constant:create:heat_condition:heated>,[<item:simpletungsten:large_prasinos_chunk>],[<item:simpletungsten:tungsten_ingot>,<item:simpleores:adamantium_ingot>,<item:minecraft:blaze_powder>],[],150);

//Thyrium
<recipetype:create:mixing>.addRecipe("thyrium_nugget_from_mixing",<constant:create:heat_condition:heated>,[<item:fusion:thyrium_nugget>],[<item:minecraft:redstone>,<item:simpleores:adamantium_ingot>,<item:simpleores:mythril_ingot>],[],100);

<recipetype:create:mixing>.addRecipe("medium_thyrium_chunk_from_mixing",<constant:create:heat_condition:heated>,[<item:fusion:medium_thyrium_chunk>],[<item:minecraft:lapis_lazuli>,<item:simpleores:adamantium_ingot>,<item:simpleores:mythril_ingot>],[],125);

<recipetype:create:mixing>.addRecipe("thyrium_from_mixing",<constant:create:heat_condition:heated>,[<item:fusion:large_thyrium_chunk>],[<item:minecraft:glowstone_dust>,<item:simpleores:adamantium_ingot>,<item:simpleores:mythril_ingot>],[],150);

//Sinisite
<recipetype:create:mixing>.addRecipe("sinisite_nugget_from_mixing",<constant:create:heat_condition:heated>,[<item:fusion:sinisite_nugget>],[<item:simpleores:mythril_ingot>,<item:simpleores:onyx_gem>,<item:minecraft:glowstone_dust>],[],100);

<recipetype:create:mixing>.addRecipe("medium_sinisite_chunk_from_mixing",<constant:create:heat_condition:heated>,[<item:fusion:medium_sinisite_chunk>],[<item:simpleores:mythril_ingot>,<item:simpleores:onyx_gem>,<item:minecraft:blaze_powder>],[],125);

<recipetype:create:mixing>.addRecipe("sinisite_from_mixing",<constant:create:heat_condition:heated>,[<item:fusion:large_sinisite_chunk>],[<item:simpleores:mythril_ingot>,<item:simpleores:onyx_gem>,<item:minecraft:ghast_tear>],[],150);

//Bronze
//Decided to simplify this
<recipetype:create:mixing>.addRecipe("bronze_from_mixing",<constant:create:heat_condition:heated>,[<item:fusion:bronze_ingot>],[<item:simpleores:tin_ingot>,<item:minecraft:copper_ingot>],[],100);
*/

//Simpleores crushing integration
//Some are already added by create
//Raw Silver
<recipetype:create:mixing>.addRecipe("melting/crushed_raw_tungsten",<constant:create:heat_condition:superheated>,[<fluid:kubejs:molten_tungsten> * 168],[<item:create:crushed_raw_lead>.withTag({display: {Name: '{"text":"Crushed Raw Tungsten","italic":false}'}})],[],540);

<recipetype:create:crushing>.addRecipe("crushing/raw_silver", [<item:create:crushed_raw_silver>,<item:create:experience_nugget> % 75], <item:onlysilver:raw_silver>, 400);
<recipetype:create:crushing>.addRecipe("crushing/raw_silver_block", [<item:create:crushed_raw_silver> * 9,(<item:create:experience_nugget> * 9) % 75], <item:onlysilver:raw_silver_block>, 400);
<recipetype:minecraft:blasting>.addRecipe("blasting/silver_from_crushed",<item:onlysilver:silver_ingot>,<item:create:crushed_raw_silver>,0.1,100);
<recipetype:minecraft:smelting>.addRecipe("smelting/silver_from_crushed",<item:onlysilver:silver_ingot>,<item:create:crushed_raw_silver>,0.1,200);
//Admantium
<recipetype:create:crushing>.addRecipe("crushing/adamantium_ores", [<item:simpleores:crushed_adamantium_ore>,<item:simpleores:crushed_adamantium_ore> % 75,<item:create:experience_nugget> % 75], <tag:items:forge:ores/adamantium>, 250);
<recipetype:create:crushing>.addRecipe("crushing/raw_adamantium", [<item:simpleores:crushed_adamantium_ore>,<item:create:experience_nugget> % 75], <item:simpleores:raw_adamantium>, 400);
<recipetype:create:crushing>.addRecipe("crushing/raw_adamantium_block", [<item:simpleores:crushed_adamantium_ore> * 9,(<item:create:experience_nugget> * 9) % 75], <item:simpleores:raw_adamantium_block>, 400);
//Mythril
<recipetype:create:crushing>.addRecipe("crushing/mythril_ores", [<item:simpleores:crushed_mythril_ore>,<item:simpleores:crushed_mythril_ore> % 75,<item:create:experience_nugget> % 75], <tag:items:forge:ores/mithril>, 250);
<recipetype:create:crushing>.addRecipe("crushing/raw_mythril", [<item:simpleores:crushed_mythril_ore>,<item:create:experience_nugget> % 75], <item:simpleores:raw_mythril>, 400);
<recipetype:create:crushing>.addRecipe("crushing/raw_mythril_block", [<item:simpleores:crushed_mythril_ore> * 9,(<item:create:experience_nugget> * 9) % 75], <item:simpleores:raw_mythril_block>, 400);
//Tin
<recipetype:create:crushing>.addRecipe("crushing/raw_tin", [<item:create:crushed_raw_tin>,<item:create:experience_nugget> % 75], <item:simpleores:raw_tin>, 400);
<recipetype:minecraft:blasting>.addRecipe("blasting/tin_from_crushed",<item:simpleores:tin_ingot>,<item:create:crushed_raw_tin>,0.1,100);
<recipetype:minecraft:smelting>.addRecipe("smelting/tin_from_crushed",<item:simpleores:tin_ingot>,<item:create:crushed_raw_tin>,0.1,200);
//Tungsten
//Since no mod adds crushed tungsten I'll use create:crushed_raw_lead instead
//Because I say so
<recipetype:create:crushing>.addRecipe("crushing/tungsten_ores", [<item:create:crushed_raw_lead>.withTag({display: {Name: '{"text":"Crushed Raw Tungsten","italic":false}'}}),<item:create:crushed_raw_lead>.withTag({display: {Name: '{"text":"Crushed Raw Tungsten","italic":false}'}}) % 75,<item:create:experience_nugget> % 75], <tag:items:forge:ores/tungsten>, 250);
<recipetype:create:crushing>.addRecipe("crushing/raw_tungsten", [<item:create:crushed_raw_lead>.withTag({display: {Name: '{"text":"Crushed Raw Tungsten","italic":false}'}}),<item:create:experience_nugget> % 75], <item:simpletungsten:raw_tungsten>, 250);
<recipetype:minecraft:blasting>.addRecipe("blasting/w_from_crushed",<item:simpletungsten:tungsten_ingot>,<item:create:crushed_raw_lead>.withTag({display: {Name: '{"text":"Crushed Raw Tungsten","italic":false}'}}),0.1,100);
<recipetype:minecraft:smelting>.addRecipe("smelting/w_from_crushed",<item:simpletungsten:tungsten_ingot>,<item:create:crushed_raw_lead>.withTag({display: {Name: '{"text":"Crushed Raw Tungsten","italic":false}'}}),0.1,200);

//Fusion Steel Set integration
//All steel objects instead crafted with tfmg steel

/*
recipes.remove(<item:fusion:steel_helmet>);
recipes.remove(<item:fusion:steel_leggings>);
recipes.remove(<item:fusion:steel_chestplate>);
recipes.remove(<item:fusion:steel_boots>);
recipes.remove(<item:fusion:steel_door>);
recipes.remove(<item:fusion:steel_bricks>);
recipes.remove(<item:fusion:steel_sword>);
recipes.remove(<item:fusion:steel_axe>);
recipes.remove(<item:fusion:steel_pickaxe>);
recipes.remove(<item:fusion:steel_hoe>);
recipes.remove(<item:fusion:steel_shovel>);
recipes.remove(<item:fusion:steel_shears>);
recipes.remove(<item:fusion:steel_bars>);
recipes.remove(<item:fusion:steel_nugget>);
//recipes.removeByInput(<item:fusion:steel_bricks>);

<tag:items:forge:ingots/steel>.remove(<item:fusion:steel_ingot>);
//recipes.removeByInput(<item:fusion:steel_ingot>);
recipes.remove(<item:fusion:steel_ingot>);
recipes.remove(<item:fusion:steel_block>);

craftingTable.addShaped("crafting/steel_helmet",<item:fusion:steel_helmet>,
	[[<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>],
	[<item:tfmg:steel_ingot>, <item:minecraft:air>, <item:tfmg:steel_ingot>]]);

craftingTable.addShaped("crafting/steel_chestplate",<item:fusion:steel_chestplate>,
	[[<item:tfmg:steel_ingot>, <item:minecraft:air>, <item:tfmg:steel_ingot>],
	[<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>],
	[<item:tfmg:steel_ingot>,<item:tfmg:steel_ingot>,<item:tfmg:steel_ingot>]]);

craftingTable.addShaped("crafting/steel_leggings",<item:fusion:steel_leggings>,
	[[<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>], 
	[<item:tfmg:steel_ingot>, <item:minecraft:air>, <item:tfmg:steel_ingot>],
	[<item:tfmg:steel_ingot>,<item:minecraft:air>,<item:tfmg:steel_ingot>]]);

craftingTable.addShaped("crafting/steel_boots",<item:fusion:steel_boots>,
	[[<item:tfmg:steel_ingot>, <item:minecraft:air>, <item:tfmg:steel_ingot>],
	 [<item:tfmg:steel_ingot>, <item:minecraft:air>, <item:tfmg:steel_ingot>]]);

craftingTable.addShaped("crafting/steel_pickaxe",<item:fusion:steel_pickaxe>,
	[[<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>], 
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]]);

craftingTable.addShaped("crafting/steel_sword",<item:fusion:steel_sword>,
	[[<item:tfmg:steel_ingot>], [<item:tfmg:steel_ingot>],[<item:minecraft:stick>]]);

craftingTable.addShaped("crafting/steel_shovel",<item:fusion:steel_shovel>,
	[[ <item:tfmg:steel_ingot>], [<item:minecraft:stick>],[<item:minecraft:stick>]]);

craftingTable.addShapedMirrored("crafting/steel_axe", <constant:minecraft:mirroraxis:horizontal>, <item:fusion:steel_axe>, [
    [<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:minecraft:air>], 
    [<item:tfmg:steel_ingot>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]]);

craftingTable.addShapedMirrored("crafting/steel_hoe", <constant:minecraft:mirroraxis:horizontal>, <item:fusion:steel_hoe>, [
    [<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]]);

craftingTable.addShapedMirrored("crafting/steel_door", <constant:minecraft:mirroraxis:horizontal>, <item:fusion:steel_door> * 3, [
    [<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:minecraft:air>],
	[<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:minecraft:air>],
	[<item:tfmg:steel_ingot>,<item:tfmg:steel_ingot>,<item:minecraft:air>]]);

craftingTable.addShapedMirrored("crafting/steel_bricks", <constant:minecraft:mirroraxis:all>, <item:fusion:steel_bricks>, [
    [<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:minecraft:air>],
	[<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:minecraft:air>],
	[<item:minecraft:air>,<item:minecraft:air>,<item:minecraft:air>]]);

craftingTable.addShapedMirrored("crafting/steel_bars", <constant:minecraft:mirroraxis:all>, <item:fusion:steel_bars> * 16, [
    [<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>],
	[<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>]]);

*/
