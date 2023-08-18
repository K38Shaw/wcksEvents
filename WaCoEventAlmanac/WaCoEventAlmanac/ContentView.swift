//
//  ContentView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/4/23.
//

import SwiftUI

struct ContentView: View {
    var isLoadedState: Bool
    var body: some View {
        VStack {
            
            if(!isLoadedState){
                LoadingScreenView()
            }else{
                MainMenuView()
                FooterMenuView(menuItem: MainNavItem(image: "juggleShapes", name: "Discover WaCo"))
                
            }
           
           
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(isLoadedState: true)
    }
}
