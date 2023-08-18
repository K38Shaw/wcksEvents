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
    
}
