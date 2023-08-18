//
//  MapsMainView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/4/23.
//

import SwiftUI

struct MapsMainView: View {
    var body: some View {
        VStack{
            Text("")
            Image("CDaerailRodeoGroundsDay2").resizable().frame(width:380, height: 400).aspectRatio(contentMode: .fit)
            
        }
    }
}

struct MapsMainView_Previews: PreviewProvider {
    static var previews: some View {
        MapsMainView()
    }
}
