ServerEvents.recipes(event => {
    //event.replaceInput({type:'beachparty:mini_fridge_mixing'},'minecraft:ice','neapolitan:ice_cubes')
    //event.replaceInput({type:'beachparty:tiki_bar_mixing',input:'ice'},'minecraft:ice','neapolitan:ice_cubes')
    event.remove({type:'beachparty:tiki_bar_mixing',input:'ice'})
    event.remove({type:'beachparty:mini_fridge_mixing',input:'ice'})
    function tiki_bar_freeze(ingredient,result){
        event.custom({
            "type": "beachparty:tiki_bar_mixing",
            "ingredients": [
                {
                "item": ingredient
                },
                {
                "item": "neapolitan:ice_cubes"
                }
            ],
            "result": {
                "item": result
            }
        })
    }

    function mini_fridge_freeze(ingredient,result){
        event.custom({
            "type": "beachparty:mini_fridge_mixing",
            "ingredients": [
                {
                "item": ingredient
                },
                {
                "item": "neapolitan:ice_cubes"
                }
            ],
            "result": {
                "item": result
            }
        })
    }

    tiki_bar_freeze('melon_slice','beachparty:melon_cocktail')
    tiki_bar_freeze('pumpkin','beachparty:pumpkin_cocktail')
    tiki_bar_freeze('beachparty:coconut_open','beachparty:coconut_cocktail')
    tiki_bar_freeze('honeycomb','beachparty:honey_cocktail')
    tiki_bar_freeze('create:bar_of_chocolate','beachparty:cocoa_cocktail')
    tiki_bar_freeze('sweet_berries','beachparty:sweetberries_cocktail')

    mini_fridge_freeze('cocoa_beans','beachparty:icecream_chocolate')
    mini_fridge_freeze('melon_slice','beachparty:icecream_melon')
    mini_fridge_freeze('beachparty:coconut_open','beachparty:icecream_coconut')
    mini_fridge_freeze('cactus','beachparty:icecream_cactus')
    mini_fridge_freeze('sweet_berries','beachparty:icecream_sweetberries')
    
})
