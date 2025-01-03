ServerEvents.recipes(event => {
    //replace drill recipe
    event.remove({'type':'crafting_shaped','output':'create:mechanical_drill'})
    event.shaped(Item.of('create:mechanical_drill'),[
        ' H ',
        'AIA',
        ' C '
    ],{
        H:'#forge:drill_head_materials',
        I:'minecraft:iron_ingot',
        C:'create:andesite_casing',
        A:'create:andesite_alloy'
    })

    //Tungsten Carrot
    event.recipes.create.filling('kubejs:tungsten_carrot',[Fluid.of('kubejs:molten_tungsten',56),'minecraft:golden_carrot'])
    event.recipes.create.filling('kubejs:tungsten_carrot',[Fluid.of('kubejs:molten_tungsten_steel',56),'minecraft:golden_carrot'])

    //Blackstone from Haunting
    event.replaceOutput({'type':'create:haunting'},'minecraft:blackstone','infested_cobblestone')
    event.recipes.create.haunting('blackstone','diorite',200)

    //Red sand washing
    event.remove({'type':'create:splashing','input':'minecraft:red_sand'})
    event.recipes.create.splashing([Item.of('gold_nugget',3).withChance(.125),Item.of('redstone',5).withChance(.2)],'minecraft:red_sand',200)

    //Why is it shaped?
    event.remove({'type':'minecraft:crafting_shaped','output':'minecraft:diorite'})
    event.shapeless('diorite',['cobblestone','quartz'])

    //Bucket from Iron sheet mold pressing
    event.recipes.create.compacting('minecraft:bucket','create:iron_sheet')

    //Cheaper create connected fan catalysts
    event.remove({'type':'crafting_shaped','output':'create_connected:empty_fan_catalyst'})
    event.shaped(Item.of('create_connected:empty_fan_catalyst',4),[
        'IBI',
        'B B',
        'IBI'
    ],{
        I:'create:brass_ingot',
        B:'minecraft:iron_bars'
    })
})