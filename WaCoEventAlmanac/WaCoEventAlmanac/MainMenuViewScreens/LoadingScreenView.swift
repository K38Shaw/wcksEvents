//
//  LoadingScreenView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/4/23.
//

import SwiftUI

struct LoadingScreenView: View {
    var body: some View {
        ZStack {
            
            VStack{
                Image("travelWaCoInTheDust").resizable().padding(.bottom, -10.0).frame(height: 375).aspectRatio(contentMode: .fit).padding(.bottom, 100)
                
                Image("travelWaCoBucking").resizable().frame(height: 375).aspectRatio(contentMode: .fit)
            }
            VStack{
                Text("Welcome to")
                    .font(.title2).foregroundColor(Color("YellowAmericana"))
                Text("The 75th Annual").font(.title).foregroundColor(Color("OffWhite"))
                Text("Ft. Wallace Memorial Rodeo").font(.title).foregroundColor(Color("OffWhite"))
                Text("2023").font(.title2).foregroundColor(Color("YellowAmericana"))
            }.frame(width: 400).padding(25).background(Color.black)
        }
    }
}

struct LoadingScreenView_Previews: PreviewProvider {
    static var previews: some View {
        LoadingScreenView()
    }
}
