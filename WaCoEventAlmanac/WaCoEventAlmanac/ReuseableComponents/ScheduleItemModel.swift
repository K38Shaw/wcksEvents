//
//  ScheduleItemModel.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/10/23.
//

import Foundation

struct ScheduleItem: Identifiable{
    var id = UUID()
    var day: String
    var time: String
    var location: String
    var isFavorite: Bool
    var name: String
    var description: String
}


var scheduleItems = [
    ScheduleItem(day: "May 14th", time: "8:00 a.m.", location: "Parish Hall", isFavorite: false, name: "Registration", description: "Register for Mutton Busting"),
    ScheduleItem(day: "May 15th", time: "4:00 p.m.", location: "Ft. Wallace Rodeo Grounds", isFavorite: false, name: "Mutton Busting", description: "Little kids + Helmets + Sheep = Funny")
]
