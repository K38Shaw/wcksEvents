//
//  MenuItemView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/7/23.
//

import SwiftUI
 
struct MenuItemView: View {
    var menuItem: MenuItem
    var body: some View {
        VStack {
            HStack{
                Image(menuItem.image)
                Text(menuItem.name).padding(20).foregroundColor(Color("DBAmericana"))
                Spacer()
            }
            Divider().overlay(Color.black).frame(width: 350)
        }
    }
}

struct MenuItemView_Previews: PreviewProvider {
    static var previews: some View {
        MenuItemView(menuItem: MenuItem(image: "attractionsIcon", name: "Yo Mama"))
    }
}
