//
//  FooterMenuView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/4/23.
//

import SwiftUI

struct FooterMenuView: View {
    var menuItem: MainNavItem
    var body: some View {
       
           HStack{
                ForEach(mainMenuItems){
                    menuItem in
                    NavigationLink{
                        if(menuItem.name == "Schedule"){
                            ScheduleMainView(scheduleItem: ScheduleItem(day: "Today", time: "Now", location: "Here", isFavorite: false, name: "Activity", description: "This is all about the activity"))
                        }
                        if(menuItem.name == "Maps"){
                            MapsMainView()
                        }
                        if(menuItem.name == "Menu"){
                            MainMenuView()
                        }
                    } label:{
                        if(menuItem.name == "Schedule"){
                            FooterMenuItemView(menuItem: menuItem)
                            Divider().frame(height: 75).overlay(Color("DBAmericana"))
                        }
                        if(menuItem.name == "Maps"){
                            FooterMenuItemView(menuItem: menuItem)
                            Divider().frame(height: 75).overlay(Color("DBAmericana"))
                        }
                        if(menuItem.name == "Menu"){
                            FooterMenuItemView(menuItem: menuItem)}
                    }
                }
           }.frame(height: 100)
        }
    }

struct FooterMenuView_Previews: PreviewProvider {
    static var previews: some View {
        FooterMenuView(menuItem: MainNavItem(image: "juggleShapes", name: "Lets Go"))
    }
}
