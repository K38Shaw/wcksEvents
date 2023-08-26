//
//  SponsorsMainView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/4/23.
//

import SwiftUI

struct SponsorsMainView: View {
    var sponsor: Sponsor
    var body: some View {
        ScrollView{
            ForEach(sponsors){
                sponsor in
                NavigationLink{
                    SponsorItemDetailView(sponsor: sponsor)
                } label : {
                    SponsorItemView(sponsor: sponsor)
                }
            }
        }
    }
}

struct SponsorsMainView_Previews: PreviewProvider {
    static var previews: some View {
        SponsorsMainView(sponsor: Sponsor(name: "business", tier: 3, message: "thanks bro", imageName: "sponsorDefault"))
    }
}
