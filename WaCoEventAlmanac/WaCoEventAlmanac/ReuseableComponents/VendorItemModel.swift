//
//  VendorItemModel.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/18/23.
//

import Foundation


struct Vendor:Identifiable{
    var id = UUID()
    var name: String
    var hours: String
    var location: String
    var description: String
    var image: String
}


var vendors = [
    Vendor(name: "Smoky Hill BBQ", hours: "Mon-Thurs 11:00 am - 2:00 pm" , location: "Corner of Main and 7th", description: "They sell BBQ", image: "foodDefault"),
    Vendor(name: "Towns End Tavern", hours: "Sat & Sun 5:00 pm -  11:00pm", location: "117 N Main SS Ks  ", description: "They sell misc. Food.", image: "foodDefault")
]
