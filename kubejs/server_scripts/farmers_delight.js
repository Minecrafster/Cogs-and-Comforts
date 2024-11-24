ServerEvents.recipes(event =>{
    event.remove({type:'create:mixing',output:'farmersdelight:cabbage_rolls'})

    //Delightful Green Tea Leaf
    event.recipes.create.milling(['delightful:matcha',Item.of('delightful:matcha').withChance(0.5)],'delightful:green_tea_leaf',100)
    event.recipes.create.crushing(['delightful:matcha',Item.of('delightful:matcha').withChance(0.5)],'delightful:green_tea_leaf',100)

    function tetra_cut(ingredient,result){
        event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [
              ingredient
            ],
            "result": result,
            "tool": {"type":"farmersdelight:tool_action","action":"blade_cut"}
        })
    }

    event.replaceInput({'output':'meadow:piece_of_warped_cheese'},'meadow:grain_cheese_block','meadow:warped_cheese_block')

    tetra_cut({'item':'minecraft:nether_wart'},[{'item':'create_bic_bit:crushed_nether_wart'}])
    tetra_cut({'item':'minecraft:cactus'},[{'item':'delightful:cactus_flesh','count':2}])
    tetra_cut({'item':'minecraft:sugar_cane'},[{'item':'minecraft:sugar','count':1},{'item':'minecraft:sugar','chance':0.5}])

    tetra_cut({'item':'quarck:cactus_block'},[{'item':'delightful:cactus_flesh','count':18}])

    tetra_cut({'item':'bakery:glowberry_tart'},[{'item':'bakery:glowberry_pie_slice','count':4}])
    tetra_cut({'item':'bakery:linzer_tart'},[{'item':'bakery:linzer_tart_slice','count':4}])
    tetra_cut({'item':'bakery:chocolate_tart'},[{'item':'bakery:chocolate_tart_slice','count':4}])
    tetra_cut({'item':'bakery:sweetberry_cake'},[{'item':'bakery:sweetberry_cake_slice','count':4}])
    tetra_cut({'item':'bakery:strawberry_cake'},[{'item':'bakery:sweetberry_cake_slice','count':4}])
    tetra_cut({'item':'bakery:chocolate_cake'},[{'item':'bakery:chocolate_cake_slice','count':4}])
    tetra_cut({'item':'bakery:bundt_cake'},[{'item':'bakery:bundt_cake_slice','count':4}])
    tetra_cut({'item':'bakery:apple_pie'},[{'item':'bakery:apple_pie_slice','count':4}])


    tetra_cut({'item':'delightful:salmonberry_pie'},[{'item':'delightful:salmonberry_pie_slice','count':4}])
    tetra_cut({'item':'delightful:pumpkin_pie'},[{'item':'create_central_kitchen:pumpkin_pie_slice','count':4}])
    tetra_cut({'item':'delightful:cantaloupe'},[{'item':'delightful:cantaloupe_slice','count':6}])
    tetra_cut({'item':'delightful:mini_melon'},[{'item':'minecraft:melon_slice','count':6}])
    tetra_cut({'item':'delightful:wild_salmonberries'},[{'item':'delightful:salmonberries'},{'item':'minecraft:orange_dye'}])

    tetra_cut({'item':'meadow:cheese_tart'},[{'item':'meadow:cheese_tart_slice','count':4}])
    tetra_cut({'item':'meadow:buffalo_cheese_block'},[{'item':'meadow:piece_of_buffalo_cheese','count':4}])
    tetra_cut({'item':'meadow:grain_cheese_block'},[{'item':'meadow:piece_of_grain_cheese','count':4}])
    tetra_cut({'item':'meadow:warped_cheese_block'},[{'item':'meadow:piece_of_warped_cheese','count':4}])
    tetra_cut({'item':'meadow:amethyst_cheese_block'},[{'item':'meadow:piece_of_amethyst_cheese','count':4}])
    tetra_cut({'item':'meadow:goat_cheese_block'},[{'item':'meadow:piece_of_goat_cheese','count':4}])
    tetra_cut({'item':'meadow:sheep_cheese_block'},[{'item':'meadow:piece_of_sheep_cheese','count':4}])
    tetra_cut({'item':'meadow:cheese_block'},[{'item':'meadow:piece_of_cheese','count':4}])
    tetra_cut({'item':'meadow:cheesecake'},[{'item':'meadow:cheesecake_slice','count':4}])

    tetra_cut({'item':'create_bic_bit:aged_cheese'},[{'item':'create_bic_bit:aged_cheese_wedge','count':4}])
    tetra_cut({'item':'create_bic_bit:waxed_aged_cheese'},[{'item':'create_bic_bit:aged_cheese_wedge','count':4}])
    tetra_cut({'item':'create_bic_bit:waxed_young_cheese'},[{'item':'create_bic_bit:young_cheese_wedge','count':4}])
    tetra_cut({'item':'create_bic_bit:young_cheese'},[{'item':'create_bic_bit:young_cheese_wedge','count':4}])
    tetra_cut({'item':'create_bic_bit:waxed_unripe_cheese'},[{'item':'create_bic_bit:unripe_cheese_wedge','count':4}])
    tetra_cut({'item':'create_bic_bit:unripe_cheese'},[{'item':'create_bic_bit:unripe_cheese_wedge','count':4}])

    tetra_cut({'item':'createaddition:chocolate_cake'},[{'item':'create_central_kitchen:chocolate_cake_slice','count':7}])
    tetra_cut({'item':'createaddition:honey_cake'},[{'item':'create_central_kitchen:honey_cake_slice','count':7}])
})  
