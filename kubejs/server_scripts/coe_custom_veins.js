ServerEvents.recipes(event => {
    function create_ore_vein(ID,textComponent,iconID,spacing,separation,salt,biomeWhitelist){
        biomeWhitelist = typeof biomeWhitelist !== 'undefined' ? biomeWhitelist : 'minecraft:is_overworld';
        event.recipes.createoreexcavation.vein(textComponent, iconID)
		.placement(spacing, separation, salt)
		.id(ID).biomeWhitelist(biomeWhitelist)
    }

    function create_ore_vein_drilling(recipeID,veinID,outputItemID,ticks,drillID,fluidID,stressRequirement){
        stressRequirement = typeof stressRequirement !== 'undefined' ? stressRequirement : 256; //Defaults to 256
        drillID = typeof drillID !== 'undefined' ? drillID : '#createoreexcavation:drills';
        fluidID = typeof fluidID !== 'undefined' ? fluidID : 'minecraft:air';
        if (fluidID == 'minecraft:air'){
            event.recipes.createoreexcavation.drilling(outputItemID,veinID,ticks).stress(stressRequirement).drill(drillID).id(recipeID)
        }else{
            event.recipes.createoreexcavation.drilling(outputItemID,veinID,ticks).stress(stressRequirement).drill(drillID).fluid(fluidID).id(recipeID)
        }
    }

    //Creating overworld veins
    create_ore_vein('kubejs:silver_vein','{"text":"Silver Vein"}','onlysilver:raw_silver',128,8,114514);
    create_ore_vein_drilling('kubejs:drill_silver','kubejs:silver_vein','onlysilver:raw_silver',600);

    create_ore_vein('kubejs:tin_vein','{"text":"Tin Vein"}','simpleores:raw_tin',128,8,114515);
    create_ore_vein_drilling('kubejs:drill_tin','kubejs:tin_vein','simpleores:raw_tin',600);

    create_ore_vein('kubejs:mythril_vein','{"text":"Mythril Vein"}','simpleores:raw_mythril',128,12,114516);
    create_ore_vein_drilling('kubejs:drill_mythril','kubejs:mythril_vein','simpleores:raw_mythril',900);

    create_ore_vein('kubejs:adamantium_vein','{"text":"Adamantium Vein"}','simpleores:raw_adamantium',128,16,114517);
    create_ore_vein_drilling('kubejs:drill_adamantium','kubejs:adamantium_vein','simpleores:raw_adamantium',1200);

    create_ore_vein('kubejs:cobalt_vein','{"text":"Cobalt Vein"}','simplecobalt:raw_cobalt',128,16,114518);
    create_ore_vein_drilling('kubejs:drill_cobalt','kubejs:cobalt_vein','simplecobalt:raw_cobalt',1200);

    create_ore_vein('kubejs:tungsten_vein','{"text":"Tungsten Vein"}','simpletungsten:raw_tungsten',128,18,114519);
    create_ore_vein_drilling('kubejs:drill_tungsten','kubejs:tungsten_vein','simpletungsten:raw_tungsten',2000,'createoreexcavation:diamond_drill','minecraft:water');

    create_ore_vein('kubejs:onyx_vein','{"text":"Onyx Deposit"}','simpleores:onyx_gem',256,32,114520,'minecraft:is_nether');
    create_ore_vein_drilling('kubejs:drill_onyx','kubejs:onyx_vein',[Item.of('minecraft:netherrack',1).withChance(0.8),Item.of('simpleores:onyx_gem',1).withChance(0.1)],2000,'createoreexcavation:diamond_drill','minecraft:lava');
})