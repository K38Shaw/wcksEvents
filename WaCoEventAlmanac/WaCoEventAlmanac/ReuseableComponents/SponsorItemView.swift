//
//  SponsorItemView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/25/23.
//

import SwiftUI

struct SponsorItemView: View {
    var sponsor: Sponsor
    var body: some View {
        HStack{
            Image(sponsor.imageName).resizable().frame(width: 150, height: 150)
            Text(sponsor.name).font(.title)
            
        }
    }
}

struct SponsorItemView_Previews: PreviewProvider {
    static var previews: some View {
        SponsorItemView(sponsor: Sponsor(name: "Business", tier: 1, message: "Thanks Bro", imageName: "sponsorDefault"))
    }
}
