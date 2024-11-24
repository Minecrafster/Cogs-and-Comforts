import mods.create.SequencedAssemblyManager;

recipes.remove(<item:netmusic:music_cd>);
recipes.remove(<item:netmusic:cd_burner>);
recipes.remove(<item:netmusic:computer>);
recipes.remove(<item:createaddition:zinc_sheet>);

#Aluminum sheet for making CDs
<recipetype:create:pressing>.addRecipe("pressing/aluminum_ingot", [<item:createaddition:zinc_sheet>.withTag({display: {Name: '{"text":"Aluminum Sheet","italic":false,"color":"white"}'},Enchantments:[{}]})], <item:tfmg:aluminum_ingot>);

//<recipetype:create:pressing>.addRecipe("pressing/aluminum_ingot", [<item:createaddition:zinc_sheet>], <item:tfmg:aluminum_ingot>);

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_make_cd")
 .transitionTo(<item:create:incomplete_precision_mechanism>.withTag({display: {Name: '{"text":"Incomplete CD","italic":false}'}}))
 .loops(1)
 .require(<item:tfmg:plastic_sheet>)
 .addOutput(<item:netmusic:music_cd> * 4, 100)
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:createaddition:zinc_sheet>.withTag({display: {Name: '{"text":"Aluminum Sheet","italic":false}'},Enchantments:[{}]})))
 .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.duration(50))
 .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:tfmg:liquid_plastic> * 50))
 .addStep<mods.createtweaker.CuttingRecipe>((rb) => rb.duration(50)));

//craftingTable.addShapeless("crafting/cd_burner", <item:netmusic:cd_burner>, [<item:minecraft:jukebox>, <item:minecraft:lightning_rod>, <item:createaddition:gold_rod>,<item:create_connected:sequenced_pulse_generator>,<item:create:turntable>,<item:mint
<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_make_cd_burner")
 .transitionTo(<item:railways:track_incomplete_acacia>.withTag({display: {Name: '{"text":"Incomplete CD Burner","italic":false}'}}))
 .loops(1)
 .require(<item:minecraft:jukebox>)
 .addOutput(<item:netmusic:cd_burner>, 100)
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:copper_sheet>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:turntable>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create:precision_mechanism>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:createaddition:gold_rod>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:minecraft:redstone>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create_connected:sequenced_pulse_generator>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:createaddition:copper_rod>))
 );

//craftingTable.addShapeless("crafting/cd_burner", <item:netmusic:cd_burner>, [<item:minecraft:jukebox>, <item:minecraft:lightning_rod>, <item:createaddition:gold_rod>,<item:create_connected:sequenced_pulse_generator>,<item:create:turntable>,<item:minecraft:redstone>]);

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_make_computer")
 .transitionTo(<item:railways:track_incomplete_ender>.withTag({display: {Name: '{"text":"Incomplete Computer","italic":false}'}}))
 .loops(1)
 .require(<item:tfmg:plastic_sheet>)
 .addOutput(<item:netmusic:computer>, 100)
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:netmusic:cd_burner>))
 .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.duration(50))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create_connected:control_chip>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:createaddition:copper_wire>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:createaddition:copper_rod>))
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:tfmg:plastic_sheet>))
 );