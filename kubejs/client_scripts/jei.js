JEIEvents.removeCategories(event => {
    console.log(event.categoryIds) //log a list of all category ids to logs/kubejs/client.txt
    event.remove('fusion:fusion_furnace_fuel')
    //Doesn't work because JEI ≠ EMI apparently
    //I wonder when there will be KubeJS EMI Integration
  })