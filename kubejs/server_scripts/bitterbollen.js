ServerEvents.recipes(event => {
    //Replace mayo recipe
    event.remove({output:Fluid.of('create_bic_bit:mayonnaise')})
    event.recipes.create.mixing(Fluid.of('create_bic_bit:mayonnaise',1000),[Fluid.of('ratatouille:egg_yolk',750),Fluid.of('milk',250)],200)

    //Use tags instead
    event.replaceInput({output:Fluid.of('create_bic_bit:ketchup')},'farmersdelight:tomato','#forge:crops/tomato')
    
    event.remove({output:Fluid.of('create_bic_bit:frying_oil')})
    event.recipes.create.compacting([Fluid.of('create_bic_bit:frying_oil',250)],['create_bic_bit:crushed_sunflower_seeds'],100,'heated')

    event.remove({output:"create_bic_bit:oliebollen"})
    event.custom({
        'type':'create_bic_bit:deep_frying',
        "heatRequirement": "heated",
        'ingredients':[
            {
                'tag':'forge:dough'
            },
            {
                'fluid':'create_bic_bit:frying_oil',
                "amount":125
            }
        ],
        "results":[
            {
                'item':'create_bic_bit:oliebollen',
            }
        ]
    })

    event.remove({output:'create_bic_bit:raw_fries'})
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
          {
            "item": "minecraft:potato"
          }
        ],
        "result": [
          {
            "count": 2,
            "item": 'create_bic_bit:raw_fries'
          }
        ],
        "tool": {
          "tag": "forge:tools/knives"
        }
    })
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
          {
            "item": "minecraft:potato"
          }
        ],
        "result": [
          {
            "count": 2,
            "item": 'create_bic_bit:raw_fries'
          }
        ],
        "tool": {"type":"farmersdelight:tool_action","action":"blade_cut"}
    })
    
    //DO YOU HAVE ANY IDEA HOW BAD OF AN IDEA FRYING ICE IS
    event.remove({type:"create_bic_bit:deep_frying",input:'ice'})
    event.custom({
        'type':'create_bic_bit:deep_frying',
        "heatRequirement": "heated",
        'ingredients':[
            {
                'item':'ice'
            },
            {
                'fluid':'create_bic_bit:frying_oil',
                "amount":9999
            }
        ],
        "results":[
            {
                'item':'tnt',
                'nbt':{
                    display:{
                        Name:'{"text":"Don\'t fry ice kids! It will explode!","italic":false,"color":"red"}'
                    }
                }
            }
        ]
    })



    
})