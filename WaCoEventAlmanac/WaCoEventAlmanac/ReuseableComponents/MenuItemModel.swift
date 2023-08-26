//
//  MenuItemModel.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/7/23.
//

import Foundation


struct MenuItem: Identifiable{
    var id = UUID()
    var image: String
    var name: String
}


var menuItems = [
    MenuItem(image: "calendar", name: "Schedule"),
    MenuItem(image: "pinDrop", name: "Maps"),
    MenuItem(image: "restaurant", name: "Vendors"),
    MenuItem(image: "emergencyIcon", name: "Sponsors"),
    MenuItem(image: "firstAidIcon", name: "First Aid"),
    MenuItem(image: "juggleShapes", name: "Discover Wallace County")
    //MenuItem(image: "history", name: "History"),
   // MenuItem(image: "clipboardIcon", name: "Volunteer/Activity Sign Up"),
    //Items Commented out if no information available at present
]

struct MainNavItem: Identifiable{
    var id = UUID()
    var image: String
    var name: String
}

var mainMenuItems = [
    MainNavItem(image: "calendar", name: "Schedule"),
    MainNavItem(image: "pinDrop", name: "Maps"),
    MainNavItem(image: "menu", name: "Menu")
]
