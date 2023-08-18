//
//  FooterMenuItemView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/10/23.
//

import SwiftUI

struct FooterMenuItemView: View {
    var menuItem: MainNavItem
    var body: some View {
      
            VStack{
                Image(menuItem.image)
                Text(menuItem.name)
                
                
            }.frame(width: 100, height: 500)
            
  
    }
}

struct FooterMenuItemView_Previews: PreviewProvider {
    static var previews: some View {
        FooterMenuItemView(menuItem: MainNavItem(image: "juggleShapes", name: "Where to?"))
    }
}
