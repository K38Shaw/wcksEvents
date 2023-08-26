//
//  SponsorItemModel.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/25/23.
//

import Foundation


struct Sponsor:Identifiable{
    var id = UUID()
    var name: String
    var tier: Int
    var message: String
    var imageName: String
}


var sponsors = [
    Sponsor(name: "Hennick Lumber", tier: 1, message: "Hennick Lumber is proud to sponsor this years boys baseball team. Thank you for supporting our small business.", imageName: "sponsorDefault"),
    Sponsor(name: "The Thirsty Store", tier: 1, message: "Come down and see Kansas's largest selection of Whiskey", imageName: "sponsorDefault")
]
