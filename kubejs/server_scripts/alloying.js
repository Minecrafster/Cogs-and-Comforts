var INGOT_MELT_AMOUNT = 112

ServerEvents.recipes(event => {
    event.remove({output:'create:brass_ingot',type:'create:mixing'})
    event.remove({output:'tfmg:cast_iron_ingot',type:'create:mixing'})

    function mix_fluid(inputMaterials,resultMaterial,heat){
        //Applies for recipes without catalysts(such as non-fusion ones)
        //Material namespaces for molten fluids are not needed here as this is only for alloyinge
        //Checks the amount of input materials, although not useful as basin only handles 2 input fluids
        let fluidCount = inputMaterials.length;
        let ingredientList = inputMaterials.map(name =>{
            return { fluid: 'kubejs:molten_' + name, amount: INGOT_MELT_AMOUNT/2 }
        })
        event.custom({
            type: 'create:mixing',
            ingredients: ingredientList,
            results: [
              {
                fluid:'kubejs:molten_' + resultMaterial,
                amount:INGOT_MELT_AMOUNT/2 * fluidCount
              }
            ],
            heatRequirement: heat, // Optional: 'heated', 'superheated' or omit for no heat requirement
            processingTime: 100
        });
    }
    function mix_fluid_with_catalyst(inputMaterials,resultMaterial,catalystItem,heat){
        //Applies for recipes with catalysts(such as fusion ones)
        //Material namespaces for molten fluids are not needed here as this is only for alloying
        //Checks the amount of input materials
        //Catalysts don't count towards input materials count
        let fluidCount = inputMaterials.filter(Ingredient => typeof(Ingredient) == 'string').length;
        
        let ingredientList = inputMaterials.map(name =>{
            if (typeof name == 'string'){
                return { fluid: 'kubejs:molten_' + name, amount: INGOT_MELT_AMOUNT }
            }
            else{
                return name//Such that there can be custom ones, like 1000mb of lava
            }
        })

        ingredientList.push({ item:catalystItem })
        event.custom({
            type: 'create:mixing',
            ingredients: ingredientList,
            results: [
              {
                fluid:'kubejs:molten_' + resultMaterial,
                amount:fluidCount * INGOT_MELT_AMOUNT
              }
            ],
            heatRequirement: heat, // Optional: 'heated', 'superheated' or omit for no heat requirement
            processingTime: 300
        });
    }

    //Manual recipes here
    event.custom({//Netherite is just special
        type: 'create:mixing',
        ingredients: [
            {
                fluid:'kubejs:molten_raw_netherite',
                amount:448
            },
            {
                fluid:'kubejs:molten_gold',
                amount:448
            },
        ],
        results: [
          {
            fluid:'kubejs:molten_netherite',
            amount:112
          }
        ],
        heatRequirement: 'superheated',
        processingTime: 300
    });

    event.custom({//Cast iron is also special
        type: 'create:mixing',
        ingredients: [
            {
                fluid:'kubejs:molten_iron',
                amount:112
            },
            {
                item:'create_high_pressure:graphite_powder',
                count:3
            }
        ],
        results: [
          {
            fluid:'kubejs:molten_cast_iron',
            amount:112
          }
        ],
        heatRequirement: 'heated',
        processingTime: 300
    });

    event.custom({//Yes.
        type: 'create:mixing',
        ingredients: [
            {
                fluid:'kubejs:molten_mythril',
                amount:112
            },
            {
                item:'kubejs:onyx_powder',
                count:1
            },
            {
                item:'minecraft:ghast_tear',
                count:1
            }
        ],
        results: [
          {
            fluid:'kubejs:molten_sinisite',
            amount:112
          }
        ],
        heatRequirement: 'superheated',
        processingTime: 300
    });

    event.custom({//Yes.
        type: 'create:mixing',
        ingredients: [
            {
                fluid:'kubejs:molten_gold',
                amount:112
            },
            {
                item:'minecraft:redstone',
                count:2
            }
        ],
        results: [
          {
            fluid:'kubejs:molten_erubescent_gold',
            amount:112
          }
        ],
        heatRequirement: 'heated',
        processingTime: 100
    });

    event.custom({//Yes.
        type: 'create:mixing',
        ingredients: [
            {
                fluid:'kubejs:molten_erubescent_gold',
                amount:112
            },
            {
                item:'minecraft:redstone',
                count:2
            }
        ],
        results: [
          {
            fluid:'kubejs:molten_scarlatite_gold',
            amount:112
          }
        ],
        heatRequirement: 'heated',
        processingTime: 100
    });

    event.custom({//Yes.
        type: 'create:mixing',
        ingredients: [
            {
                fluid:'kubejs:molten_copper',
                amount:112
            },
            {
                fluid:'kubejs:molten_gold',
                amount:12
            }
        ],
        results: [
          {
            fluid:'kubejs:molten_rose_gold',
            amount:112
          }
        ],
        heatRequirement: 'heated',
        processingTime: 100
    });

    
    //ones that use function here
    mix_fluid(['zinc','copper'],'brass','heated')
    mix_fluid(['tin','copper'],'bronze','heated')
    mix_fluid(['gold','silver'],'electrum','heated')
    
    mix_fluid_with_catalyst(['iron','silver'],'sterling_steel','minecraft:glowstone_dust','heated')
    mix_fluid_with_catalyst(['sterling_steel','silver'],'black_silver','kubejs:onyx_powder','heated')
    mix_fluid_with_catalyst(['iron','tungsten'],'tungsten_steel','simpleores:tin_nugget','superheated')
    mix_fluid_with_catalyst(['adamantium','mythril'],'thyrium','minecraft:glowstone_dust','superheated')
    mix_fluid_with_catalyst(['adamantium','tungsten'],'prasinos','minecraft:blaze_powder','superheated')
    mix_fluid_with_catalyst(['adamantium','cobalt'],'green_celadon','kubejs:emerald_powder','superheated')
    mix_fluid_with_catalyst(['mythril','cobalt'],'blue_celadon','minecraft:glowstone_dust','superheated')
    mix_fluid_with_catalyst(['iron','cobalt'],'blue_drift_steel','kubejs:lapis_powder','superheated')
    mix_fluid_with_catalyst(['tungsten',{fluid:'minecraft:lava',amount:1000}],'valfram','create:cinder_flour','superheated')
    mix_fluid_with_catalyst(['scarlatite_gold',{fluid:'minecraft:lava',amount:1000}],'hephaestan_gold','minecraft:blaze_powder','heated')
})