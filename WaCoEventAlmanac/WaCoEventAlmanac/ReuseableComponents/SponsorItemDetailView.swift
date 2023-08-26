//
//  SponsorItemDetailView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/25/23.
//

import SwiftUI

struct SponsorItemDetailView: View {
    var sponsor: Sponsor
    var body: some View {
        VStack{
            Image(sponsor.imageName).resizable().frame(width: 350, height: 300).aspectRatio(contentMode: .fit)
            Text(sponsor.name).font(.title)
            Text(sponsor.message)
        }
        }
}

struct SponsorItemDetailView_Previews: PreviewProvider {
    static var previews: some View {
        SponsorItemDetailView(sponsor: Sponsor(name: "Business", tier: 3, message: "Thanks bro", imageName: "sponsorDefault"))
    }
}
