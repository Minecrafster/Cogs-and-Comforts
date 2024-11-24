ServerEvents.recipes(event =>{
    //Fudge fusion:steel, embrace tfmg:steel
    event.replaceInput(
        { input: 'fusion:steel_ingot' }, // Arg 1: the filter
        'fusion:steel_ingot',            // Arg 2: the item to replace
        'tfmg:steel_ingot'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )
    event.replaceInput(
        { input: 'fusion:steel_ingot' }, // Arg 1: the filter
        '#forge:inots/steel',            // Arg 2: the item to replace
        'tfmg:steel_ingot'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )
    //Disables such items
    event.remove({output:'fusion:steel_ingot'})
    event.remove({output:'fusion:medium_steel_chunk'})
    event.remove({output:'fusion:large_steel_chunk'})
    event.remove({output:'simpletungsten:large_tungsten_carbide_chunk'})
    event.remove({output:'simpletungsten:large_tungsten_steel_chunk'})
    event.remove({output:'fusion:large_bronze_chunk'})
    event.remove({output:'simpletungsten:large_valfram_chunk'})
    event.remove({output:'simpletungsten:large_prasinos_chunk'})
    event.remove({output:'simplecobalt:large_cobalt_chunk'})
    event.remove({output:'simplecobalt:large_blue_drift_steel_chunk'})
    event.remove({output:'simplecobalt:large_blue_celadon_chunk'})
    event.remove({output:'simplecobalt:large_green_celadon_chunk'})
    event.remove({output:'fusion:large_thyrium_chunk'})
    event.remove({output:'fusion:large_sinisite_chunk'})
    event.remove({output:'sterlingblack:large_sterling_steel_chunk'})
    event.remove({output:'sterlingblack:large_black_silver_chunk'})
    event.remove({output:'goldenglitter:large_rose_gold_chunk'})
    event.remove({output:'goldenglitter:large_erubescent_gold_chunk'})
    event.remove({output:'goldenglitter:large_scarlatite_gold_chunk'})
    event.remove({output:'goldenglitter:large_hephaestan_gold_chunk'})
    

    event.remove({input:'simpletungsten:large_tungsten_carbide_chunk'})
    event.remove({input:'simpletungsten:large_tungsten_steel_chunk'})
    event.remove({input:'fusion:large_bronze_chunk'})
    event.remove({input:'simpletungsten:large_valfram_chunk'})
    event.remove({input:'simpletungsten:large_prasinos_chunk'})
    event.remove({input:'simplecobalt:large_cobalt_chunk'})
    event.remove({input:'simplecobalt:large_blue_drift_steel_chunk'})
    event.remove({input:'simplecobalt:large_blue_celadon_chunk'})
    event.remove({input:'simplecobalt:large_green_celadon_chunk'})
    event.remove({input:'fusion:large_thyrium_chunk'})
    event.remove({input:'fusion:large_sinisite_chunk'})
    event.remove({input:'sterlingblack:large_sterling_steel_chunk'})
    event.remove({input:'sterlingblack:large_black_silver_chunk'})
    event.remove({input:'goldenglitter:large_rose_gold_chunk'})
    event.remove({input:'goldenglitter:large_erubescent_gold_chunk'})
    event.remove({input:'goldenglitter:large_scarlatite_gold_chunk'})
    event.remove({input:'goldenglitter:large_hephaestan_gold_chunk'})

    event.remove({type:'fusion:alloying'})
    //event.remove({type:'fusion:fusion_furnace_fuel'})
    
    event.shapeless(Item.of('tfmg:steel_ingot',1),['fusion:steel_ingot'])
    
    event.remove({ output: 'simpleores:adamantium_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'simpletungsten:tungsten_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'fusion:thyrium_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'fusion:sinisite_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'simpletungsten:valfram_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'simpletungsten:prasinos_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'simpletungsten:tungsten_steel_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'simpletungsten:tungsten_carbide_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'simpletungsten:tungsten_carbide_ingot', type: 'minecraft:blasting' })

    //Tungsten Carbide Is made somewhat like this IRL
    event.recipes.create.mixing('kubejs:tungsten_carbide_powder', [Fluid.of('kubejs:molten_tungsten',112),'create_high_pressure:graphite_powder']).heated()
    event.recipes.create.compacting('simpletungsten:tungsten_carbide_ingot','kubejs:tungsten_carbide_powder').superheated()
    
    //
    event.recipes.create.crushing('kubejs:onyx_powder', 'simpleores:onyx_gem').processingTime(500)
    event.recipes.create.crushing('kubejs:emerald_powder', 'minecraft:emerald').processingTime(200)

    event.remove({input:'minecraft:lapis_lazuli',type:'create:crushing'})
    event.remove({input:'minecraft:lapis_lazuli',type:'create:milling'})
    event.recipes.create.crushing([Item.of('kubejs:lapis_powder',2),Item.of('kubejs:lapis_powder').withChance(0.1)], 'minecraft:lapis_lazuli').processingTime(200)
    event.recipes.create.milling([Item.of('kubejs:lapis_powder',2),Item.of('kubejs:lapis_powder').withChance(0.1)], 'minecraft:lapis_lazuli').processingTime(200)

    event.shapeless(Item.of('minecraft:blue_dye',1),['kubejs:lapis_powder'])
})

ServerEvents.tags('item', event => {
    event.remove('forge:ingots/steel', 'fusion:steel_ingot')
  })