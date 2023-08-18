//
//  ScheduleItemDetailView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/10/23.
//

import SwiftUI

struct ScheduleItemDetailView: View {
    var scheduleItem: ScheduleItem
    var body: some View {
        VStack(alignment: .leading){
            HStack{
                Image("juggleShapes").resizable().frame(width: 100, height: 100)
                VStack {
                    HStack{
                        Text(scheduleItem.day)
                            .font(.title2)
                        Text(scheduleItem.time).font(.title2)
                    }
                    Text(scheduleItem.location).font(.title2)
                }.frame(width: 270)
                
            }.frame(width: 300)
            Text(scheduleItem.name).font(.largeTitle)
            Text(scheduleItem.description)
               
            
        }.frame(width: 340, height: 400).padding().border(Color.black, width: 3)
    }
}

struct ScheduleItemDetailView_Previews: PreviewProvider {
    static var previews: some View {
        ScheduleItemDetailView(scheduleItem: ScheduleItem(day: "Today", time: "Now", location: "Here", isFavorite: false, name: "Activity", description: "This is my activity"))
    }
}
