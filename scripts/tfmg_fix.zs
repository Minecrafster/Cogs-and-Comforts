import mods.jeitweaker.Jei;

recipes.remove(<item:tfmg:liquid_asphalt_bucket>);
recipes.remove(<item:tfmg:liquid_concrete_bucket>);
<recipetype:create:emptying>.remove(<fluid:tfmg:liquid_asphalt>);

Jei.hideRecipe(<resource:create:draining>, <resource:create:empty_tfmg_liquid_asphalt_bucket_of_tfmg_liquid_asphalt>);

<recipetype:create:emptying>.addRecipe("emptying/tfmg_liquid_asphalt_bucket", <item:minecraft:bucket>, <fluid:tfmg:liquid_asphalt> * 200,<item:tfmg:liquid_asphalt_bucket> , 200);
<recipetype:create:emptying>.addRecipe("emptying/simpleores_copper_bucket_of_tfmg_liquid_asphalt",<item:simpleores:copper_bucket>, <fluid:tfmg:liquid_asphalt> * 200, <item:simpleores:copper_bucket>.withTag({Fluid: {Amount: 1000, FluidName: "tfmg:liquid_asphalt"}}), 200);
<recipetype:create:filling>.addRecipe("filling/simpleores_copper_bucket_of_tfmg_liquid_asphalt", <item:simpleores:copper_bucket>.withTag({Fluid: {Amount: 1000, FluidName: "tfmg:liquid_asphalt"}}), <item:simpleores:copper_bucket>.withTag({Fluid: {Amount: 0, FluidName: "minecraft:empty"}}), <fluid:tfmg:liquid_asphalt> * 200, 200);
<recipetype:create:filling>.addRecipe("filling/bucket_of_tfmg_liquid_asphalt", <item:tfmg:liquid_asphalt_bucket>, <item:minecraft:bucket>, <fluid:tfmg:liquid_asphalt> * 200, 200);
//<recipetype:create:filling>.addRecipe("filling/bucket_of_tfmg_liquid_concrete", <item:tfmg:liquid_concrete_bucket>, <item:minecraft:bucket>, <fluid:tfmg:liquid_concrete> * 1000, 200);

//<recipetype:create:item_application>.addRecipe("deploying/steel_casing", [<item:tfmg:steel_casing>], <item:tfmg:hardened_planks>, <item:tfmg:steel_ingot>, false);
stoneCutter.addRecipe("cutting/aluminum_scaffolding", <item:tfmg:aluminum_scaffolding> * 2, <item:tfmg:aluminum_ingot>);
/*
stoneCutter.addRecipe("cutting/steel_scaffolding", <item:tfmg:steel_scaffolding> * 2, <item:tfmg:steel_ingot>);
stoneCutter.addRecipe("cutting/steel_bars", <item:tfmg:steel_bars> * 4, <item:tfmg:steel_ingot>);
stoneCutter.addRecipe("cutting/steel_frame", <item:tfmg:steel_frame> * 4, <item:tfmg:steel_ingot>);
stoneCutter.addRecipe("cutting/steel_truss", <item:tfmg:steel_truss> * 2, <item:tfmg:steel_ingot>);
stoneCutter.addRecipe("cutting/industrial_pipe", <item:tfmg:industrial_pipe> * 4, <item:tfmg:steel_ingot>);
stoneCutter.addRecipe("cutting/steel_ladder", <item:tfmg:steel_ladder> * 2, <item:tfmg:steel_ingot>);
craftingTable.addShaped("crafting/steel_pipe_1",<item:tfmg:steel_pipe> * 4,
	[[<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>]]);
craftingTable.addShaped("crafting/steel_pipe_2",<item:tfmg:steel_pipe> * 4,
	[[<item:tfmg:steel_ingot>], [<item:tfmg:steel_ingot>], [<item:tfmg:steel_ingot>]]);
craftingTable.addShaped("crafting/steel_flywheel",<item:tfmg:steel_flywheel>,
	[[<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>], 
	[<item:tfmg:steel_ingot>, <item:create:shaft>, <item:tfmg:steel_ingot>],
	[<item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>, <item:tfmg:steel_ingot>]]);
*/