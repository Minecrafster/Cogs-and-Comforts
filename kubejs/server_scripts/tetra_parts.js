ServerEvents.recipes(event => {
    //Amethyst lens from cutting twigs cut_amethyst blocks, may be subject to change
    event.recipes.create.cutting(Item.of("kubejs:amethyst_lens",4),"twigs:cut_amethyst",1200)

    //lens from mechanical crafting
    event.recipes.create.mechanical_crafting('kubejs:scope', [
        ' WWC ',
        'LSVPL'
    ], {
        C: 'create:cogwheel',
        P: 'create:precision_mechanism',
        V: 'tfmg:plastic_fluid_valve',
        S: 'tfmg:steel_mechanism',
        L: 'kubejs:amethyst_lens',
        W: 'tfmg:screw'
    })
})