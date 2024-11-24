var INGOT_MELT_AMOUNT = 112

ServerEvents.recipes(event => {
    function cast_ingot(materialName){
        event.recipes.create.filling(materialName + '_ingot', [Fluid.of('kubejs:molten_' + materialName.split(':')[1],INGOT_MELT_AMOUNT), 'tfmg:ingot_mold'])
        event.custom(//Basic ingots can also be cast advanced to conserve the mold
            {
                "type": "tfmg:casting",
                "ingredients": [
                  {
                    "fluid": 'kubejs:molten_' + materialName.split(':')[1],
                    "amount": 1
                  }
                ],
                "processingTime": 10,
                "results": [
                  {
                    "count": 1,
                    "item": materialName + '_ingot'
                  }
                ,
                  {
                    "count": 1,
                    "item": materialName + '_block'//I don't think this does anything
                  }
              
                ]
            }
        )
        
    }
    function cast_ingot_advanced(materialName){
        event.custom(
            {
                "type": "tfmg:casting",
                "ingredients": [
                  {
                    "fluid": 'kubejs:molten_' + materialName.split(':')[1],
                    "amount": 1
                  }
                ],
                "processingTime": 300,
                "results": [
                  {
                    "count": 1,
                    "item": materialName + '_ingot'
                  }
                ,
                  {
                    "count": 1,
                    "item": materialName + '_block'//I don't think this does anything
                  }
              
                ]
            }
        )
    }
    
    cast_ingot('minecraft:iron')
    cast_ingot('minecraft:gold')
    cast_ingot('minecraft:copper')
    cast_ingot('create:brass')
    cast_ingot('create:zinc')
    cast_ingot('createaddition:electrum')
    cast_ingot('tfmg:cast_iron')
    cast_ingot('fusion:bronze')
    cast_ingot('simpleores:mythril')
    cast_ingot('tfmg:aluminum')
    cast_ingot('onlysilver:silver')
    cast_ingot('goldenglitter:rose_gold')
    cast_ingot('goldenglitter:erubescent_gold')
    cast_ingot('goldenglitter:scarlatite_gold')
    cast_ingot('goldenglitter:hephaestan_gold')
    cast_ingot('sterlingblack:sterling_steel')
    cast_ingot('sterlingblack:black_silver')
    cast_ingot_advanced('minecraft:netherite')
    cast_ingot_advanced('fusion:thyrium')
    cast_ingot_advanced('fusion:sinisite')
    cast_ingot_advanced('simpletungsten:prasinos')
    cast_ingot_advanced('simpletungsten:valfram')
    cast_ingot_advanced('simpletungsten:tungsten_steel')
    cast_ingot_advanced('simpletungsten:tungsten')
    cast_ingot_advanced('simpleores:tin')
    cast_ingot_advanced('simpleores:adamantium')
    cast_ingot_advanced('simplecobalt:cobalt')
    cast_ingot_advanced('simplecobalt:blue_drift_steel')
    cast_ingot_advanced('simplecobalt:blue_celadon')
    cast_ingot_advanced('simplecobalt:green_celadon')

    event.remove({type:'stonecutting',output:'tfmg:ingot_mold'})
    event.stonecutting(Item.of('tfmg:ingot_mold',8),'minecraft:clay')
})