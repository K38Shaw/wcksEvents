//
//  VendorsMainView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/4/23.
//

import SwiftUI

struct VendorsMainView: View {
    var vendor: Vendor
    var body: some View {
        ScrollView{
            ForEach(vendors){
                vendor in
                NavigationLink{
                    VendorItemDetailView(vendor: vendor)
                } label : {
                    VendorItemView(vendor: vendor)
                }
            }
        }
    }
}

struct VendorsMainView_Previews: PreviewProvider {
    static var previews: some View {
        VendorsMainView(vendor: Vendor(name: "business", hours: "Eventually", location: "Somewhere", description: "We sell Stuff", image: "foodDefault"))
    }
}
