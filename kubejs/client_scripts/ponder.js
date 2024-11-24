

const SPOUT_SPLASH_PARTICLE_DELTA = [0.1,0.1,0.1]
const SPOUT_SPLASH_PARTICLE_DENSITY = 3

Ponder.tags((event) => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:tconstruct_at_home", "tfmg:ingot_mold", "Melting, Casting and Alloying", "Components related to melting, casting, and combining metals.", [
        // some default items
        "tfmg:ingot_mold",
        "tfmg:casting_basin",
        "tfmg:casting_spout",
        "create:spout",
        "create:blaze_burner",
        "create:mechanical_mixer",
        "create:basin"
    ]);
    //console.log(event.getTags())
});


Ponder.registry((event) => {
    /**
     * scene with custom structure
     */
    event
        .create("minecraft:paper")
        .scene(
            "our_first_scene",
            "Example scene for paper with structure",
            "kubejs:test",
            (scene, util) => {
                // your scene code here
            }
        );
});

Ponder.registry((event) => {//Test Ponder
    function smooth_entry(scene,start,end,sequence,difference,wait){
        //WARNING: This Function may cause an endless loop if difference is set incorrectly.
        //If the game tick freezes after a reload and disk space suddenly starts evaporating,
        //This is porbably why.
        for (let v1 = start[sequence[0]];;v1 += difference){
            for (let v2 = start[sequence[1]];;v2 += difference){
                for (let v3 = start[sequence[2]];;v3 += difference){
                    var vArray = [v1,v2,v3]
                    console.log(vArray)
                    var location = [v1,v2,v3]
                    for (let i = 0;i<=3;i++){
                        
                        location[i] = vArray[sequence.indexOf(i)]
                    }
                    location.splice(3)//Because theres somehow a null at location[3]
                    //I don't know js very well so yeah
                    console.log('Trying to show section at',location.concat(location))
                    scene.world.showSection(location.concat(location),Facing.DOWN)
                    scene.idle(wait)
                    if (v3 == end[sequence[2]]){
                        break
                    }
                }
                if (v2 == end[sequence[1]]){
                    break
                }
            }
            if (v1 == end[sequence[0]]){
                break
            }
        }
    }

    function showNewSectionWithOffset(scene,selection,offset,direction){
        let link = scene.world.showIndependentSection(selection, direction);
        scene.world.moveSection(link,offset, 0); // 0 to instantly move
        return link//Returns link so it can be manipulated later
    }

    function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
        let link = scene.world.showIndependentSection(selection, direction);
        scene.world.moveSection(link, movingOffset, 0); // 0 to instantly move
        scene.idle(idleTicks);
        scene.world.hideIndependentSection(link, direction);
        scene.idle(idleTicks);
    }//Only for showing different applicable blocks
    

    event.create("kubejs:crushed_raw_tungsten").scene("melting_metals", "Melting Metals", (scene, util) => {
        scene.configureBasePlate(0,0,6)
        scene.showBasePlate()
        //scene.world.showSection([0,0,0,5,0,5],Facing.DOWN)
        
        
        

        /**
         * The last argument is for spawning particles.
         * true if yes, false if no
         */

        //create melting machine
        scene.world.setBlock([2,1,2],Block.id('create:blaze_burner').with("blaze","kindled"),true)
        scene.world.setBlock([2,2,2],"create:basin",true)
        scene.world.setBlock([2,4,2],"create:mechanical_mixer",true)
        scene.world.setBlocks([2,4,3,2,4,5],Block.id("create:cogwheel").with("axis",'y'),true)
        //scene.world.setBlock([2,1,1],"create:basin",true)
        //set rotation speeds
        scene.world.setKineticSpeed([2,4,2],64)
        scene.world.setKineticSpeed([2,4,3],-64)
        scene.world.setKineticSpeed([2,4,4],64)
        scene.world.setKineticSpeed([2,4,5],-64)
        
        //pump system
        scene.world.setBlock([2,2,1],Block.id("create:fluid_pipe").with("north","false").with("west","false").with("up","false").with("down","false"),true)
        scene.world.setBlock([3,2,1],Block.id("create:mechanical_pump").with("facing","east"),true)
        scene.world.setBlock([4,1,1],Block.id("create:fluid_tank").with("top","false").with("shape","window"),true)
        scene.world.setBlock([4,3,1],Block.id("create:fluid_tank").with("bottom","false").with("shape","window"),true)
        scene.world.setBlock([4,2,1],Block.id("create:fluid_tank").with("shape","window").with("bottom","false").with("top","false"),true)

        scene.world.showSection([2,1,2,2,4,5],Facing.DOWN)

        scene.idle(10)

        scene.world.createItemEntity([2.5,3,2.5],[0,-0.1,0],Item.of('copper_ingot',1))
        scene.idle(5)
        scene.world.createItemEntity([2.5,3,2.5],[0,-0.1,0],Item.of('raw_copper',1))
        scene.idle(5)
        scene.world.createItemEntity([2.5,3,2.5],[0,-0.1,0],Item.of('create:crushed_raw_copper',1))
        scene.idle(5)
        scene.world.createItemEntity([2.5,3,2.5],[0,-0.1,0],Item.of('copper_block',1))
        scene.idle(5)
        

        scene.world.modifyBlockEntityNBT([2,2,2],false,(nbt) =>{
            nbt.merge({InputItems:{Size:9,Items:[{Slot:0,id:"minecraft:raw_copper",Count:1}]}})
        })

        scene.world.hideSection([2,1,2],Facing.EAST)
        scene.idle(15)
        scene.world.setBlock([2,1,2],Block.id('create:blaze_burner').with("blaze","seething"),false)
        scene.idle(3)
        scene.world.showSection([2,1,2],Facing.EAST)

        scene.world.modifyBlockEntityNBT([2,4,2],true,(nbt) => {
            nbt.Running = 1
        })//And That's how you make a mixer run, took me long enough to find out.
        
        
        //scene.effects.emitParticles()
        scene.idle(80)
        scene.world.modifyBlockEntityNBT([2,2,2],false,(nbt) =>{
            nbt.merge({OutputTanks:[{TankContent:{Amount:1000,FluidName:"kubejs:molten_copper"},Level:{Target:1,Value:0,Speed:0.25}}],InputItems:{Size:9,Items:[]}})
        })
        scene.idle(12)
        scene.addKeyframe()

        scene.idle(10)
        scene.world.showSection([5,1,0,2,3,1],Facing.DOWN)
        scene.idle(10)
        
    });
    event.create("tfmg:ingot_mold").scene('melting_and_pouring','Melting and Pouring Metals','kubejs:melting_and_pouring',(scene,util)=>{
        //initialization
        scene.configureBasePlate(0,0,6)
        scene.showBasePlate()
        scene.world.showSection([1,1,5,1,4,5],Facing.DOWN)
        scene.idle(10)
        
        //Part1 - Basin and Burner
        smooth_entry(scene,[1,1,2],[1,2,2],[0,1,2],1,5)
        
        scene.text(40,'You can melt metals in basins.',[1.5,3,2.5])
        scene.world.createItemEntity([1.5,4,2.5],[0,-0.1,0],Item.of('copper_ingot',1))
        scene.idle(7)
        scene.world.createItemEntity([1.5,4,2.5],[0,-0.1,0],Item.of('raw_copper',1))
        scene.idle(7)
        scene.world.createItemEntity([1.5,4,2.5],[0,-0.1,0],Item.of('create:crushed_raw_copper',1))
        scene.idle(7)
        scene.world.createItemEntity([1.5,4,2.5],[0,-0.1,0],Item.of('copper_block',1))
        scene.world.modifyBlockEntityNBT([1,2,2],false,(nbt) =>{
            nbt.merge({InputItems:{Size:9,Items:[{Slot:0,id:"minecraft:raw_copper",Count:1}]}})
        })
        scene.idle(19)
        
        //Part2 - Using the mixer
        smooth_entry(scene,[1,4,2],[1,4,4],[0,1,2],1,3)


        scene.addKeyframe()
        scene.text(40,'To melt them, use a mixer and a blaze burner.',[1.5,3,2.5])
        scene.idle(10)
        //Activate Machine Kinetics
        scene.world.setKineticSpeed([1,4,2],64)
        scene.world.setKineticSpeed([1,4,3],-64)
        scene.world.setKineticSpeed([1,4,4],64)
        scene.world.setKineticSpeed([1,4,5],-64)
        scene.world.setKineticSpeed([1,3,5],-64)
        scene.world.setKineticSpeed([1,2,5],-64)
        scene.world.setKineticSpeed([1,1,5],-64)
        scene.world.setKineticSpeed([1,0,5],-64)
        //Start Mixer
        scene.idle(10)
        scene.world.modifyBlockEntityNBT([1,4,2],true,(nbt) => {
            nbt.Running = 1
        })
        scene.idle(80)
        scene.world.modifyBlockEntityNBT([1,2,2],false,(nbt) =>{
            nbt.merge({OutputTanks:[{TankContent:{Amount:1000,FluidName:"kubejs:molten_copper"},Level:{Target:1,Value:0,Speed:0.25}}],InputItems:{Size:9,Items:[]}})
        })
        scene.idle(10)

        scene.addKeyframe()
        
        //Part3 - Pouring
        scene.world.setKineticSpeed([2,3,2],64)
        scene.world.setKineticSpeed([3,3,2],64)
        scene.world.setKineticSpeed([4,3,2],64)
        scene.world.setKineticSpeed([5,3,2],64)
        scene.world.setKineticSpeed([2,3,1],-64)
        scene.text(40,'Molten metal can pe poured back into ingots.',[1.5,3,2.5])
        scene.idle(25)
        scene.world.showSection([2,3,2,5,3,2],Facing.DOWN)
        smooth_entry(scene,[1,1,1],[3,3,1],[1,0,2],1,3)
        scene.idle(15)
        scene.world.createItemOnBeltLike([3,1,1],Facing.UP,Item.of('tfmg:ingot_mold',1))
        scene.text(40,'A spout and an ingot mold is needed for this.',[3.5,4,1.5])
        //Transfer Liquid
        scene.world.modifyBlockEntityNBT([1,2,2],false,(nbt) =>{
            nbt.merge({OutputTanks:[{TankContent:{Amount:0,FluidName:"kubejs:molten_copper"},Level:{Target:0,Value:1,Speed:0.0625}}],InputItems:{Size:9,Items:[]}})
        })
        scene.world.modifyBlockEntityNBT([3,3,1],false,(nbt) =>{
            nbt.merge({Tanks:[{TankContent:{Amount:1000,FluidName:"kubejs:molten_copper"},Level:{Target:1,Value:0,Speed:0.0625}}]})
        })
        scene.idle(40)
        //Activate Spout
        scene.world.modifyBlockEntityNBT([3,3,1],false,(nbt) =>{
            nbt.merge({ProcessingTicks:30})
        })
        scene.world.modifyBlockEntityNBT([3,3,1],false,(nbt) =>{
            nbt.merge({Tanks:[{TankContent:{Amount:0.888,FluidName:"kubejs:molten_copper"},Level:{Target:1,Value:0.888,Speed:0.0625}}]})
        })
        scene.idle(25)
        scene.world.modifyBlockEntityNBT([3,1,1],false,(nbt) =>{
            nbt.merge({HeldItem:{Item:{id:"minecraft:copper_ingot",Count:1}}})
        })

        scene.particles
            .drip(5, "kubejs:molten_copper", [3.5,2,1.5])
            .delta(SPOUT_SPLASH_PARTICLE_DELTA)
            .density(SPOUT_SPLASH_PARTICLE_DENSITY);

        scene.idle(10)
        scene.text(40,'The mold will be consumed when using this method',[3.5,2,1.5]).colored(PonderPalette.RED).placeNearTarget()
        
        //scene.showStructure()
        //scene.world.showSection([])
    })
    event.create("tfmg:ingot_mold").scene('advanced_melting_and_casting','Advanced Melting and Casting','kubejs:melting_and_pouring',(scene,util)=>{
        //initialization
        scene.configureBasePlate(0,0,6)
        scene.showBasePlate()
        scene.world.setBlock([5,1,5],Block.id('create:blaze_burner').with("blaze","seething"),false)
        scene.world.setBlock([5,1,4],Block.id('tfmg:casting_basin'),false)
        scene.world.setBlock([5,3,4],Block.id('tfmg:casting_spout'),false)
        scene.world.modifyBlockEntityNBT([5,1,4],true,(nbt) => {
            nbt.merge({CurrentMold:{Size:1,Items:[{Slot:0,id:"tfmg:ingot_mold",Count:1}]}})
        })
        //scene.world.showSection([5,1,4,5,3,4],Facing.DOWN)
        scene.world.showSection([1,1,5,1,4,5],Facing.DOWN)
        scene.idle(10)

        //Part1 - Basin and Burner
        smooth_entry(scene,[1,1,2],[1,2,2],[0,1,2],1,5)

        scene.text(40,'Some metals\' melting point is too high for normal blazes',[1.5,3,2.5])
        scene.world.createItemEntity([1.5,4,2.5],[0,-0.1,0],Item.of('simpletungsten:tungsten_ingot',1))
        scene.idle(7)
        scene.world.createItemEntity([1.5,4,2.5],[0,-0.1,0],Item.of('simpletungsten:raw_tungsten',1))
        scene.idle(7)
        scene.world.createItemEntity([1.5,4,2.5],[0,-0.1,0],Item.of('create:crushed_raw_lead',1))
        scene.idle(7)
        scene.world.createItemEntity([1.5,4,2.5],[0,-0.1,0],Item.of('simpletungsten:tungsten_block',1))
        scene.world.modifyBlockEntityNBT([1,2,2],false,(nbt) =>{
            nbt.merge({InputItems:{Size:9,Items:[{Slot:0,id:"simpletungsten:raw_tungsten",Count:1}]}})
        })
        
        scene.idle(19)
        scene.addKeyframe()
        

        

        //Part2 - Using the superheated basin and mixer
        scene.idle(10)
        smooth_entry(scene,[1,4,2],[1,4,4],[0,1,2],1,3)
        scene.text(40,'To melt them, a seething blaze burner is required.',[1.5,1.5,2.5])

        //Replace regular blaze with blue blaze
        scene.world.hideSection([1,1,2],Facing.EAST)
        scene.idle(15)
        let blueblaze = showNewSectionWithOffset(scene,[5,1,5],[-4,0,-3],Facing.EAST,15)
        scene.idle(15)

        //Activate Machine Kinetics
        scene.world.setKineticSpeed([1,4,2],64)
        scene.world.setKineticSpeed([1,4,3],-64)
        scene.world.setKineticSpeed([1,4,4],64)
        scene.world.setKineticSpeed([1,4,5],-64)
        scene.world.setKineticSpeed([1,3,5],-64)
        scene.world.setKineticSpeed([1,2,5],-64)
        scene.world.setKineticSpeed([1,1,5],-64)
        scene.world.setKineticSpeed([1,0,5],-64)
        //Start Mixer
        scene.idle(10)
        scene.world.modifyBlockEntityNBT([1,4,2],true,(nbt) => {
            nbt.Running = 1
        })
        scene.idle(80)
        scene.world.modifyBlockEntityNBT([1,2,2],false,(nbt) =>{
            nbt.merge({OutputTanks:[{TankContent:{Amount:1000,FluidName:"kubejs:molten_tungsten"},Level:{Target:1,Value:0,Speed:0.25}}],InputItems:{Size:9,Items:[]}})
        })
        scene.idle(10)

        scene.addKeyframe()
        
        //Part3 - Pouring
        scene.world.setKineticSpeed([2,3,2],64)
        scene.world.setKineticSpeed([3,3,2],64)
        scene.world.setKineticSpeed([4,3,2],64)
        scene.world.setKineticSpeed([5,3,2],64)
        scene.world.setKineticSpeed([2,3,1],-64)
        scene.text(40,'Metals that require superheating to melt can not be poured regularly',[1.5,3,2.5])
        scene.idle(25)
        scene.world.showSection([2,3,2,5,3,2],Facing.DOWN)
        smooth_entry(scene,[1,2,1],[2,3,1],[1,0,2],1,3)
        let spoutAndBasin = showNewSectionWithOffset(scene,[5,1,4,5,3,4],[-2,0,-3],Facing.WEST)
        
        scene.idle(15)
        scene.world.modifyBlockEntityNBT([3,1,1],true,(nbt) => {
            nbt.merge({CurrentMold:{Size:1,Items:[{Slot:0,id:"tfmg:ingot_mold",Count:1}]}})
        })
        scene.text(40,'A casting spout and casting basin is needed.',[3.5,4,1.5])
        //Transfer Liquid
        scene.world.modifyBlockEntityNBT([1,2,2],false,(nbt) =>{
            nbt.merge({OutputTanks:[{TankContent:{Amount:0,FluidName:"kubejs:molten_tungsten"},Level:{Target:0,Value:1,Speed:0.0625}}],InputItems:{Size:9,Items:[]}})
        })
        scene.world.modifyBlockEntityNBT([3,3,1],false,(nbt) =>{
            nbt.merge({InputTanks:[{TankContent:{Amount:1000,FluidName:"kubejs:molten_tungsten"},Level:{Target:1,Value:0,Speed:0.0625}}]})
        })//This also doesn't seem to work?
        scene.idle(40)
        //Spout can't be activated becuase tfmg is unfinished.


        scene.idle(10)
        scene.text(40,'The mold will be kept unless the casting basin is broken',[3.5,2,1.5]).colored(PonderPalette.GREEN).placeNearTarget()
        scene.idle(50)
        scene.text(40,'Ingots that can be poured using a spout cool down faster',[3.5,2,1.5]).placeNearTarget()
        scene.addKeyframe()
        //scene.showStructure()
        //scene.world.showSection([])
    })
});