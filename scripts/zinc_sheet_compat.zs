//Change all recipes to use the create deco zinc sheets instead(bc it looks better)
//Remove recipes in question
recipes.remove(<item:createaddition:capacitor>);
//recipes.remove(<item:createaddition:zinc_sheet>); Removed Elsewhere
//Readd recipes that use zinc sheet and changed it to shapeless
craftingTable.addShapeless("capacitor_compat", <item:createaddition:capacitor>, [<item:minecraft:redstone_torch>, <item:create:copper_sheet>, <item:createdeco:zinc_sheet>]);

//Also add some create deco and tfmg plates to the forge:plates tag
<tag:items:forge:plates>.add(<item:tfmg:plastic_sheet>);
<tag:items:forge:plates>.add(<item:tfmg:heavy_plate>);
<tag:items:forge:plates>.add(<item:createdeco:andesite_sheet>);
<tag:items:forge:plates>.add(<item:createdeco:zinc_sheet>);
<tag:items:forge:plates>.add(<item:createdeco:netherite_sheet>);
<tag:items:forge:plates>.add(<item:createdeco:industrial_iron_sheet>);