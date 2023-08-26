//
//  VendorItemView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/18/23.
//

import SwiftUI

struct VendorItemView: View {
    var vendor: Vendor
    var body: some View {
        VStack(alignment: .leading){
            HStack{
                Image(vendor.image).resizable().frame(width: 100, height: 100)
                VStack{
                    Text(vendor.name).font(.title)
                    Text(vendor.location)
                    Text(vendor.hours)
                }
                
            }
        }
    }
}

struct VendorItemView_Previews: PreviewProvider {
    static var previews: some View {
        VendorItemView(vendor: Vendor(name: "default name", hours: "My Hours", location: "in the middle of our street", description: "They sell something.",  image: "foodDefault"))
    }
}
