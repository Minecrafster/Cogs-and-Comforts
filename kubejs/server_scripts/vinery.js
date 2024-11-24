ServerEvents.recipes(event => {
    event.remove({'type':'create:mixing','output':'#vinery:grapejuice'})
    event.remove({'type':'create:mixing','input':'#vinery:grapejuice_red'})
    event.remove({'type':'create:mixing','input':'#vinery:grapejuice_white'})
    event.remove({'type':'create:mixing','input':'#vinery:grapejuice'})
    event.remove({'type':'doapi:conditional'})
    event.remove({'type':'vinery:wine_fermentation','output':'vinery:cristel_wine'})
    //Cristel wine is yeeted, since it's OP.
    //Remove mixer recipe for vinery, since it's a bit buggy and feels unnatural.
})