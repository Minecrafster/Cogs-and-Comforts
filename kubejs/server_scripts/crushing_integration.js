ServerEvents.recipes(event =>{
    //There was an attempt to automate this

    /*
    console.log('Testing event.findRecipes')
    console.log(event.findRecipes({'input':'#minecraft:flowers','output':'#forge:dyes','type':'crafting_shapeless'}))
    var dyeRecipes = event.findRecipes({'input':'#minecraft:flowers','output':'#forge:dyes','type':'crafting_shapeless'})
    var crushingRecipes = event.findRecipes({'input':'#minecraft:flowers','output':'#forge:dyes','type':'create:crushing'})
    var crushingInputs = []
    crushingRecipes.forEach((recipee) =>{
        crushingInputs.push(recipee.inputValues()[0])
    })
    
    dyeRecipes.forEach((recipee) =>{
        if (recipee.inputValues()[0] in crushingInputs){
            console.log('Recipe of',recipee.inputValues()[0],'has a crushing output')
            return
        }

        //Doubles the production
        var output = recipee.outputValues()[0].getValue().toString()
        if (output.charAt(2) == ' '){//If the recipe specifies amount
            var amount = Number(output[0])
            event.recipes.create.crushing([String(amount*2) + 'x ' + output.substring(3).split('\'')[0]], 'simpleores:onyx_gem').processingTime(200)
        }
        else{//Then it;s just one
            event.recipes.create.crushing(['2x ' + output], 'simpleores:onyx_gem').processingTime(200)
        }

        

        console.log('Input:',recipee.inputValues()[0])
        console.log('Output:',recipee.outputValues()[0].getValue().toString())
    })
    //event.getRecipes() returned all the recipe types.
    */

    //Small Flowers Crushing
    event.recipes.create.crushing(['2x minecraft:orange_dye',Item.of('minecraft:green_dye').withChance(0.05)],'minecraft:torchflower').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:orange_dye',Item.of('minecraft:green_dye').withChance(0.05)],'meadow:fire_lily').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:orange_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:bird_of_paradise').processingTime(200)

    event.recipes.create.crushing(['2x minecraft:purple_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:hyssop').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:purple_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:lupine_purple').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:purple_dye',Item.of('minecraft:green_dye').withChance(0.05)],'herbalbrews:lavender').processingTime(200)

    event.recipes.create.crushing(['2x minecraft:pink_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:joe_pye').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:pink_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:daphne').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:pink_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:freesia_pink').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:pink_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:foxglove_pink').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:pink_dye',Item.of('minecraft:green_dye').withChance(0.05)],'meadow:saxifrage').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:pink_dye',Item.of('minecraft:green_dye').withChance(0.05)],'meadow:delphinium').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:pink_dye'],'minecraft:pink_petals').processingTime(200)

    event.recipes.create.crushing(['2x minecraft:white_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:mountain_laurel').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:white_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:white_orchid').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:white_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:foxglove_white').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:white_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:mountain_snowbell').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:white_dye',Item.of('minecraft:green_dye').withChance(0.05)],'meadow:eriophorum').processingTime(200)

    event.recipes.create.crushing(['2x minecraft:gray_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:goatsbeard').processingTime(200)

    event.recipes.create.crushing(['2x minecraft:yellow_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:genisteae').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:yellow_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:freesia_yellow').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:yellow_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:golden_rod').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:yellow_dye',Item.of('minecraft:green_dye').withChance(0.05)],'meadow:alpine_poppy').processingTime(200)

    event.recipes.create.crushing(['2x minecraft:blue_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:lupine_blue').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:blue_dye',Item.of('minecraft:green_dye').withChance(0.05)],'meadow:enzian').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:blue_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:bluebell').processingTime(200)

    event.recipes.create.crushing(['2x minecraft:red_dye',Item.of('minecraft:green_dye').withChance(0.05)],'bloomingnature:bottlebrushes').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:red_dye',Item.of('minecraft:green_dye').withChance(0.05)],'herbalbrews:hibiscus').processingTime(200)
    event.recipes.create.crushing(['3x minecraft:red_dye',Item.of('minecraft:green_dye').withChance(0.05)],'candlelight:rose').processingTime(200)

    event.recipes.create.crushing(['2x minecraft:green_dye',Item.of('minecraft:red_dye').withChance(0.05)],'bloomingnature:begonie').processingTime(200)

    //Large Flowers crushing
    event.recipes.create.crushing(['3x minecraft:blue_dye',Item.of('minecraft:green_dye',2).withChance(0.05),Item.of('minecraft:blue_dye',2).withChance(0.25)],'bloomingnature:tall_lupine_blue').processingTime(200)
    event.recipes.create.crushing(['3x minecraft:purple_dye',Item.of('minecraft:green_dye',2).withChance(0.05),Item.of('minecraft:purple_dye',2).withChance(0.25)],'bloomingnature:tall_lupine_purple').processingTime(200)
    event.recipes.create.crushing(['3x minecraft:red_dye',Item.of('minecraft:green_dye',2).withChance(0.05),Item.of('minecraft:red_dye',2).withChance(0.25)],'bloomingnature:cardinal').processingTime(200)
    event.recipes.create.crushing(['3x minecraft:white_dye',Item.of('minecraft:green_dye',2).withChance(0.05),Item.of('minecraft:white_dye',2).withChance(0.25)],'bloomingnature:tall_mountain_laurel').processingTime(200)
    event.recipes.create.crushing(['3x minecraft:cyan_dye',Item.of('minecraft:purple_dye',2).withChance(0.05),Item.of('minecraft:cyan_dye',2).withChance(0.25)],'minecraft:pitcher_plant').processingTime(200)
    event.recipes.create.crushing(['3x minecraft:yellow_dye',Item.of('minecraft:orange_dye',1).withChance(0.25),Item.of('minecraft:yellow_dye',1).withChance(0.25)],'bloomingnature:wild_sunflower').processingTime(200)
    event.recipes.create.crushing(['3x minecraft:cyan_dye',Item.of('minecraft:purple_dye',2).withChance(0.05),Item.of('minecraft:cyan_dye',2).withChance(0.25)],'minecraft:pitcher_plant').processingTime(200)
    event.recipes.create.crushing(['2x minecraft:blue_dye',Item.of('minecraft:white_dye',1).withChance(0.25),Item.of('minecraft:light_blue_dye',1).withChance(0.25)],'meadow:eriophorum_tall').processingTime(200)

    event.recipes.create.crushing(['minecraft:bone_meal'],'ratatouille:egg_shell').processingTime(50)

    
})