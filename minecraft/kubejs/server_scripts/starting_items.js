PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_inventory'))
    {
        event.player.stages.add('starting_inventory')
        event.getEntity().getServer().runCommandSilent("/tellraw " + event.player.getName().getString() + " {\"text\":\"Welcome to Creosote!\",\"color\":\"orange\"}")
        event.player.give(Item.of('akashictome:tome', '{"akashictome:data":{bloodmagic:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bloodmagic:guide"}},botania:{Count:1b,id:"botania:lexicon",tag:{"botania:elven_unlock":1b}},forestry:{Count:1b,id:"forestry:foresters_manual"},hexcasting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"hexcasting:thehexbook"}},immersiveengineering:{Count:1b,id:"immersiveengineering:manual"},occultism:{Count:1b,id:"occultism:dictionary_of_spirits",tag:{"modonomicon:book_id":"occultism:dictionary_of_spirits"}},psi:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"psi:encyclopaedia_psionica"}},tconstruct:{Count:1b,id:"tconstruct:materials_and_you"},tconstruct_0:{Count:1b,id:"tconstruct:puny_smelting",tag:{"akashictome:definedMod":"tconstruct_0"}},tconstruct_1:{Count:1b,id:"tconstruct:mighty_smelting",tag:{"akashictome:definedMod":"tconstruct_1"}},tconstruct_2:{Count:1b,id:"tconstruct:tinkers_gadgetry",tag:{"akashictome:definedMod":"tconstruct_2"}},tconstruct_3:{Count:1b,id:"tconstruct:encyclopedia",tag:{"akashictome:definedMod":"tconstruct_3"}}}}'))
    }
})
