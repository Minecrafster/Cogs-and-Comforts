ServerEvents.tags('item', event => {
    //Curios
    event.add('curios:ring', 'candlelight:gold_ring')
    event.add('curios:necklace', 'createaddition:electrum_amulet')

    //Drill head mats
    event.add('forge:drill_head_materials','simpletungsten:tungsten_carbide_ingot')
    event.add('forge:drill_head_materials','minecraft:diamond')
    event.add('forge:drill_head_materials','simpleores:onyx_gem')
    event.add('forge:drill_head_materials','simpletungsten:prasinos_ingot')
    event.add('forge:drill_head_materials','fusion:thyrium_ingot')
    event.add('forge:drill_head_materials','simplecobalt:blue_celadon_ingot')
    event.add('forge:drill_head_materials','simplecobalt:green_celadon_ingot')

    //Supplementaries hourglass
    event.add('forge:dusts','kubejs:onyx_powder')
    event.add('forge:dusts','kubejs:lapis_powder')
    event.add('forge:dusts','kubejs:emerald_powder')
    event.add('forge:dusts','kubejs:tungsten_carbide_powder')
    event.add('supplementaries:hourglass_dusts','ratatouille:cocoa_powder')

    //Tom's storage modification
    event.add('kubejs:hopper_like','minecraft:hopper')
    event.add('kubejs:hopper_like','create:chute')
    event.add('kubejs:hopper_like','create:smart_chute')
    event.add('kubejs:hopper_like','create:andesite_funnel')
    event.add('kubejs:hopper_like','create:brass_funnel')

    //Cooking & Delights
    event.add('forge:salad_ingredients','candlelight:lettuce')

    //Tags for createcafe, for better further integration
    event.add('forge:fruits/strawberry','bakery:strawberry')

    event.add('forge:coconut','beachparty:coconut_open')

    event.add('forge:fruits/cherry','vinery:cherry')

    event.add('kubejs:coffee_beans','herbalbrews:coffee_beans')
    event.add('kubejs:coffee_beans','createcafe:coffee_beans')

    //event.add('forge:tools/knives','tetracelium:dummy_knife_blade')
    //event.remove('forge:chocolate','neapolitan:chocolate_bar')
    })