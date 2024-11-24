ServerEvents.recipes(event =>{
    //Who tf directly uses cocoa beans for oreos
    event.replaceInput({output:"createcafe:oreo_dough"},'cocoa_beans','ratatouille:cocoa_powder')

    //Missing milk teas
    event.recipes.create.mixing(Fluid.of('createcafe:coconut_tea',500),['#forge:coconut',Fluid.of('milk',250),Fluid.of('createcafe:melted_sugar',250)],200,'heated')
    //event.recipes.create.mixing(Fluid.of('createcafe:cherry_tea',500),['#forge:fruits/cherry',Fluid.of('milk',250),Fluid.of('createcafe:melted_sugar',250)],200,'heated')
    
    //Missing syrups
    event.recipes.create.mixing(Fluid.of('createcafe:coconut_syrup',1000),['#forge:coconut',Fluid.of('water',250),Fluid.of('createcafe:melted_sugar',750)],200,'heated')

    //Coffee integration
    event.replaceInput({output:'createcafe:roasted_coffee_beans'},'createcafe:coffee_beans','#kubejs:coffee_beans')
    //event.replaceInput({type:'herbalbrews:kettle_brewing'},'herbalbrews:coffee_beans','createcafe:coffee_grounds')
})
