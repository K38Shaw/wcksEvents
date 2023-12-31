//
//  MainMenuView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/7/23.
//

import SwiftUI

struct MainMenuView: View {
    var body: some View {
        NavigationView{
            VStack{
                ScrollView{
                    Divider().overlay(Color(.black)).frame(width:350)
                    ForEach(menuItems){
                        menuItem in
                        NavigationLink{
                            
                            if(menuItem.name == "Schedule"){
                                ScheduleMainView(scheduleItem: ScheduleItem(day: "Today", time: "Now", location: "Here", isFavorite: false, name: "Activity", description: "This is all about the activity"))
                            }
                            if(menuItem.name == "Maps"){
                                MapsMainView()
                            }
                            if(menuItem.name == "Vendors"){
                                VendorsMainView(vendor: Vendor(name: "business", hours: "eventually", location: "somewhere", description: "We Sell Stuff", image: "foodDefault"))
                            }
                            if(menuItem.name == "Sponsors"){
                                SponsorsMainView(sponsor: Sponsor(name: "sponsie", tier: 4, message: "Go Away", imageName: "sponsorDefault"))
                            }
                            if(menuItem.name == "First Aid"){
                                FirstAidMainView()
                            }
                            if(menuItem.name == "History"){
                                HistoryMainView()
                            }
                            if(menuItem.name == "Volunteer/Activity Sign Up"){
                                RegistrationMainView()
                            }
                            if(menuItem.name == "Discover Wallace County"){
                                DiscoverWaCoView()
                            }
                        } label:{
                            MenuItemView(menuItem: menuItem)
                            
                        }
                        
                      
                    }
                 
                    FooterMenuView(menuItem: MainNavItem(image: "juggleShapes", name: "Discover WaCo")).frame(height: 50).padding(.top, 150)
                }
                
            }
            
        }
        
    }
}

struct MainMenuView_Previews: PreviewProvider {
    static var previews: some View {
        MainMenuView()
    }
}
