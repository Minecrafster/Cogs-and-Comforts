console.log('beginning synthetics...')
ServerEvents.recipes(e => {
    var transitionItem = { "item": "kubejs:incomplete_carbon_fiber" }
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create_high_pressure:graphite_powder"
        },
        "loops": 5,
        "results": [
            {
                "chance": 90,
                "item": "kubejs:carbon_fiber"
            },
            {
                "chance": 5,
                "item": "create_high_pressure:graphite_powder",
                "count": 3
            },
            {
                "chance": 5,
                "item": "tfmg:plastic_sheet"
            },
        ],
        "sequence": [
            {
                "type": "create:filling",
                "ingredients": [
                    transitionItem,
                    {
                        "amount": 40,
                        "fluid": "tfmg:propylene"
                    }
                ],
                "results": [
                    transitionItem
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    transitionItem,
                    {
                        "item": "create_high_pressure:graphite_powder"
                    }
                ],
                "results": [
                    transitionItem
                ]
            }, {
                "type": "create:pressing",
                "ingredients": [
                    transitionItem
                ],
                "results": [
                    transitionItem
                ]
            }, {
                "type": "create:pressing",
                "ingredients": [
                    transitionItem
                ],
                "results": [
                    transitionItem
                ]
            }, {
                "type": "create:pressing",
                "ingredients": [
                    transitionItem
                ],
                "results": [
                    transitionItem
                ]
            }

        ],
        "transitionalItem": transitionItem
    })

    transitionItem = { "item": "kubejs:incomplete_synthetic_fabric" }
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ratatouille:chocolate_mold"
        },
        "loops": 1,
        "results": [
            {
                "chance": 100,
                "item": "kubejs:synthetic_fabric"
            },
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    transitionItem,
                    {
                        "item": "create:filter"
                    }
                ],
                "results": [
                    transitionItem
                ]
            },{
                "type": "create:filling",
                "ingredients": [
                    transitionItem,
                    {
                        "amount": 200,
                        "fluid": "tfmg:liquid_plastic"
                    }
                ],
                "results": [
                    transitionItem
                ]
            },{
                "type": "ratatouille:demolding",
                "ingredients": [
                    transitionItem
                ],
                "results": [
                    transitionItem,
                    {
                        "item": "create:filter"
                    }
                ]
            },{
                "type": "ratatouille:demolding",
                "ingredients": [
                    transitionItem
                ],
                "results": [
                    transitionItem,
                    {
                        "item": "ratatouille:chocolate_mold"
                    }
                ]
            },{
                "type": "create:pressing",
                "ingredients": [
                    transitionItem
                ],
                "results": [
                    transitionItem
                ]
            }

        ],
        "transitionalItem": transitionItem
    })

    e.custom({
        "type": "createaddition:rolling",
        "input": {
            "item": "tfmg:plastic_sheet"
        },
        "result": {
            "item": "kubejs:plastic_string",
            "count": 2
        }
    })

})