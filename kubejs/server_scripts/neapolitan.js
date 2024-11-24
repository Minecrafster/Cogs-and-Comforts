ServerEvents.recipes(event =>{
    //Use create chocolate instead
    event.replaceInput({input:'neapolitan:chocolate_bar'},'neapolitan:chocolate_bar','create:bar_of_chocolate')
    event.remove({'output':'neapolitan:chocolate_bar'})
})