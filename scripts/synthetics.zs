<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_make_carbon_fiber")
 .transitionTo(<item:kubejs:crushed_raw_tungsten>)
 .loops(5)
 .require(<item:create_high_pressure:graphite_powder>)
 .addOutput(<item:kubejs:carbon_fiber> , 90)
 .addOutput(<item:create_high_pressure:graphite_powder> * 2, 5)
 .addOutput(<item:tfmg:plastic_sheet>, 5)
 .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:create_high_pressure:graphite_powder>))
 .addStep<mods.createtweaker.FillingRecipe>((rb) => rb.require(<fluid:tfmg:propylene> * 40))
 .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.duration(50)));


#noload