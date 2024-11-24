var INGOT_MELT_AMOUNT = 112
var BLOCK_MELT_AMOUNT = 1000
var RAW_ORE_MELT_AMOUNT = 168
var NUGGET_MELT_AMOUNT = 12

ServerEvents.recipes(event => {
    event.remove({'output':'minecraft:netherite_ingot','type':'minecraft:crafting_shapeless'})
    
    function melt_ingot_timed(meltedInput,time,heat){
      event.custom({
          type: 'create:mixing',
          ingredients: [
            {
              item: meltedInput + '_ingot'
            },
          ],
          results: [
            {
              fluid:'kubejs:molten_' + meltedInput.split(':')[1],
              amount:INGOT_MELT_AMOUNT
            }
          ],
          heatRequirement: heat, // Optional: 'heated', 'superheated' or omit for no heat requirement
          processingTime: time // Time in ticks (1 second = 20 ticks)
      })

      event.custom({
        type: 'create:mixing',
        ingredients: [
          {
            item: meltedInput + '_block'
          },
        ],
        results: [
          {
            fluid:'kubejs:molten_' + meltedInput.split(':')[1],
            amount:BLOCK_MELT_AMOUNT
          }
        ],
        heatRequirement: heat, // Optional: 'heated', 'superheated' or omit for no heat requirement
        processingTime: time*9 // Time in ticks (1 second = 20 ticks)
      })

      event.custom({
        type: 'create:mixing',
        ingredients: [
          {
            item: meltedInput + '_nugget'
          },
        ],
        results: [
          {
            fluid:'kubejs:molten_' + meltedInput.split(':')[1],
            amount:NUGGET_MELT_AMOUNT
          }
        ],
        heatRequirement: heat, // Optional: 'heated', 'superheated' or omit for no heat requirement
        processingTime: time/9 // Time in ticks (1 second = 20 ticks)
      })
    }

    function melt_ore_timed(meltedInput,time,heat){
        event.custom({
            type: 'create:mixing',
            ingredients: [
              {
                item: meltedInput.split(':')[0] + ':raw_' + meltedInput.split(':')[1]
              },
            ],
            results: [
              {
                fluid:'kubejs:molten_' + meltedInput.split(':')[1],
                amount:RAW_ORE_MELT_AMOUNT
              }
            ],
            heatRequirement: heat, // Optional: 'heated', 'superheated' or omit for no heat requirement
            processingTime: time // Time in ticks (1 second = 20 ticks)
        });

        melt_ingot_timed(meltedInput,time,heat);
    }

    function melt_raw_crushed_ore_timed(meltedInput,time,heat){
        event.custom({
            type: 'create:mixing',
            ingredients: [
              {
                item: 'create:crushed_raw_' + meltedInput.split(':')[1]
              },
            ],
            results: [
              {
                fluid:'kubejs:molten_' + meltedInput.split(':')[1],
                amount:RAW_ORE_MELT_AMOUNT
              }
            ],
            heatRequirement: heat, // Optional: 'heated', 'superheated' or omit for no heat requirement
            processingTime: time // Time in ticks (1 second = 20 ticks)
        });
    }

    function melt_crushed_ore_timed(meltedInput,time,heat){
        //Exists because simpleores ones are named differently
        event.custom({
            type: 'create:mixing',
            ingredients: [
              {
                item: meltedInput.split(':')[0] + ':crushed_' + meltedInput.split(':')[1] + '_ore'
              },
            ],
            results: [
              {
                fluid:'kubejs:molten_' + meltedInput.split(':')[1],
                amount:RAW_ORE_MELT_AMOUNT
              }
            ],
            heatRequirement: heat, // Optional: 'heated', 'superheated' or omit for no heat requirement
            processingTime: time // Time in ticks (1 second = 20 ticks)
        });
    }

    event.custom({//This one can not be generated
        type: 'create:mixing',
        ingredients: [
            {
            item: 'minecraft:ancient_debris'
          },
        ],
        results: [
          {
            fluid:'kubejs:molten_raw_netherite',
            amount:168
          }
        ],
        heatRequirement: 'superheated',
        processingTime: 600
    })

    event.custom({//This one can not be generated
        type: 'create:mixing',
        ingredients: [
            {
            item: 'minecraft:netherite_scrap'
          },
        ],
        results: [
          {
            fluid:'kubejs:molten_raw_netherite',
            amount:112
          }
        ],
        heatRequirement: 'superheated',
        processingTime: 600
    })
    /*
    event.custom({//Test, implemented in CraftTweaker instead
        type: 'create:mixing',
        ingredients: [
            {
            item: 'create:crushed_raw_lead'
            },
        ],
        results: [
          {
            fluid:'kubejs:molten_tungsten',
            amount:168
          }
        ],
        heatRequirement: 'superheated',
        processingTime: 600
    })
    */
    melt_ore_timed('minecraft:copper',300,'heated')
    melt_ore_timed('minecraft:iron',400,'heated')
    melt_ore_timed('minecraft:gold',300,'heated')
    melt_ore_timed('create:zinc',300,'heated')
    melt_ore_timed('onlysilver:silver',300,'heated')
    melt_ore_timed('simpleores:tin',200,'heated')
    melt_ore_timed('simpleores:mythril',600,'heated')
    melt_ore_timed('simpleores:adamantium',600,'superheated')
    melt_ore_timed('simpletungsten:tungsten',600,'superheated')
    melt_ore_timed('simplecobalt:cobalt',600,'superheated')

    melt_raw_crushed_ore_timed('minecraft:copper',270,'heated')
    melt_raw_crushed_ore_timed('minecraft:iron',360,'heated')
    melt_raw_crushed_ore_timed('minecraft:gold',270,'heated')
    melt_raw_crushed_ore_timed('create:zinc',270,'heated')
    melt_raw_crushed_ore_timed('onlysilver:silver',270,'heated')
    melt_raw_crushed_ore_timed('tfmg:aluminum',270,'heated')
    melt_crushed_ore_timed('onlysilver:silver',270,'heated')
    melt_crushed_ore_timed('simpleores:tin',180,'heated')
    melt_crushed_ore_timed('simpleores:mythril',540,'heated')
    melt_crushed_ore_timed('simpleores:adamantium',540,'superheated')

    melt_ingot_timed('tfmg:aluminum',300,'heated')
    melt_ingot_timed('tfmg:cast_iron',400,'heated')
    melt_ingot_timed('sterlingblack:black_silver',400,'heated')
    melt_ingot_timed('sterlingblack:sterling_steel',400,'heated')
    melt_ingot_timed('create:brass',400,'heated')
    melt_ingot_timed('fusion:bronze',400,'heated')
    melt_ingot_timed('createaddition:electrum',400,'heated')
    melt_ingot_timed('goldenglitter:rose_gold',400,'heated')
    melt_ingot_timed('goldenglitter:scarlatite_gold',400,'heated')
    melt_ingot_timed('goldenglitter:erubescent_gold',400,'heated')
    melt_ingot_timed('goldenglitter:hephaestan_gold',400,'heated')
    melt_ingot_timed('fusion:thyrium',600,'superheated')
    melt_ingot_timed('fusion:sinisite',600,'superheated')
    melt_ingot_timed('simpletungsten:prasinos',600,'superheated')
    melt_ingot_timed('simpletungsten:valfram',600,'superheated')
    melt_ingot_timed('simpletungsten:tungsten_steel',600,'superheated')
    melt_ingot_timed('simplecobalt:blue_drift_steel',600,'superheated')
    melt_ingot_timed('simplecobalt:blue_celadon',600,'superheated')
    melt_ingot_timed('simplecobalt:green_celadon',600,'superheated')
    event.custom({//This one can not be generated
        type: 'create:mixing',
        ingredients: [
            {
            item: 'minecraft:netherite_ingot'
          },
        ],
        results: [
          {
            fluid:'kubejs:molten_netherite',
            amount:112
          }
        ],
        heatRequirement: 'superheated',
        processingTime: 600
    })
    event.custom({//This one can not be generated
      type: 'create:mixing',
      ingredients: [
          {
          item: 'minecraft:netherite_block'
        },
      ],
      results: [
        {
          fluid:'kubejs:molten_netherite',
          amount:1000
        }
      ],
      heatRequirement: 'superheated',
      processingTime: 5400
  })
  event.custom({//This one can not be generated
    type: 'create:mixing',
    ingredients: [
        {
        item: 'createdeco:netherite_nugget'
      },
    ],
    results: [
      {
        fluid:'kubejs:molten_netherite',
        amount:12
      }
    ],
    heatRequirement: 'superheated',
    processingTime: 66
})
    event.custom({//This one can not be generated
        type: 'create:mixing',
        ingredients: [
            {
            item: 'tfmg:steel_ingot'
          },
        ],
        results: [
          {
            fluid:'tfmg:molten_steel',
            amount:112
          }
        ],
        heatRequirement: 'superheated',
        processingTime: 400
    })

    
})