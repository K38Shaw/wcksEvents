//
//  VendorItemDetailView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/18/23.
//

import SwiftUI

struct VendorItemDetailView: View {
    var vendor: Vendor
    var body: some View {
        VStack{
            Image(vendor.image).resizable().frame(width: 250, height: 150).aspectRatio(contentMode: .fit)
            Text(vendor.name).font(.largeTitle)
            Text(vendor.hours)
            Text(vendor.location)
            Text(vendor.description)
        }
    }
}

struct VendorItemDetailView_Previews: PreviewProvider {
    static var previews: some View {
        VendorItemDetailView(vendor: Vendor(name: "default", hours: "my hours", location: "in the middle of our street", description: "They sell something.", image: "foodDefault"))
    }
}
