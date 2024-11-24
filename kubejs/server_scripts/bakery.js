ServerEvents.recipes(event => {
    event.replaceInput({'type':'bakery:pot_cooking'},'cocoa_beans','ratatouille:cocoa_powder')

    event.remove({'type':'create:mixing','output':'bakery:cake_dough'})
    //event.replaceInput({'type':'bakery:crafting_bowl'},'#c:wheat','create:wheat_flour')
    event.recipes.create.mixing('bakery:cake_dough',['milk_bucket','create:wheat_flour','sugar',Fluid.of('ratatouille:egg_yolk',250)],200)
})