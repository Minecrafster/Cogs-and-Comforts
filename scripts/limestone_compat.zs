//Imports
//import mods.create.CrushingManager;


//Adds items to the tag
<tag:items:crafttweaker:limestone>.add(<item:create:limestone>);
<tag:items:crafttweaker:limestone>.add(<item:meadow:limestone>);
<tag:items:crafttweaker:limestone>.add(<item:quark:limestone>);

//recipes.remove(<item:garnished:crushed_salt>);
recipes.remove(<item:tfmg:limesand>);

<recipetype:create:crushing>.addRecipe("integrated_limestone_crushing", [<item:tfmg:limesand>,<item:meadow:alpine_salt> % 24,<item:create:zinc_nugget> % 10,<item:create:copper_nugget> % 10], <tag:items:crafttweaker:limestone>, 100);

//penalty for only using mill
<recipetype:create:milling>.addRecipe("integrated_limestone_milling", [<item:tfmg:limesand> % 75, <item:meadow:alpine_salt> % 12, <item:create:zinc_nugget> % 5, <item:create:copper_nugget> % 5], <tag:items:crafttweaker:limestone>, 100);



//<recipetype:create:crushing>.getAllRecipes();