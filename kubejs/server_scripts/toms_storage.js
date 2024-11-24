ServerEvents.recipes(event =>{
    event.remove({output:'toms_storage:ts.storage_terminal'})
    event.shaped(Item.of('toms_storage:ts.storage_terminal'),[
        'PHP',
        'WDG',
        'PCP'
    ],{
        P:'#minecraft:planks',
        D:'create:display_board',
        W:'#forge:chests/wooden',
        H:'create_connected:control_chip',
        G:'#forge:glass',
        C:'minecraft:comparator'
    })

    event.replaceInput({output:'toms_storage:ts.inventory_hopper_basic'},'minecraft:hopper','#kubejs:hopper_like')

    event.replaceInput({output:'toms_storage:ts.inventory_cable'},'#minecraft:planks','tfmg:brass_pipe')
    event.replaceInput({output:'toms_storage:ts.inventory_cable'},'minecraft:stick','#minecraft:planks')

    event.replaceInput({output:'toms_storage:ts.inventory_cable'},'minecraft:stick','#minecraft:planks')
    event.replaceInput({output:'toms_storage:ts.wireless_terminal'},'minecraft:glowstone','create:display_board')

    event.replaceInput({mod:'toms_storage'},'minecraft:diamond','create:electron_tube')

})