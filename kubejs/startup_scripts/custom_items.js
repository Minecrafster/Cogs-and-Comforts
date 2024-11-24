StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    
    //Simpleores&Fusion integration
    event.create('tungsten_carbide_powder')
    event.create('crushed_raw_tungsten')
    event.create('onyx_powder')
    event.create('emerald_powder')
    event.create('lapis_powder')

    //Synthetics
    event.create('carbon_fiber')
    event.create('plastic_string')
    event.create('synthetic_fabric')
    //Synthetic transition items
    event.create('incomplete_synthetic_fabric')
    event.create('incomplete_carbon_fiber')

    //APFSDS at home
    event.create('tungsten_carrot').food(food =>{
      food
        .hunger(1)
        .saturation(1)
        .effect('minecraft:wither',80,1,1)//Acute Heavy Metal Poisoning
    })
    
  })

  ItemEvents.modification(event =>{
    event.modify('tfmg:ingot_mold',item => {
      item.maxStackSize = 64
    })
    event.modify('tfmg:block_mold',item => {
      item.maxStackSize = 64
    })
  })