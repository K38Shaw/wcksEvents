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
            Image("juggleShapes").resizable().frame(width: 200, height: 200).aspectRatio(contentMode: .fit)
            VStack(alignment: .leading){
                Text(scheduleItem.name).font(.largeTitle)
                HStack{
                    Text(scheduleItem.day)
                        .font(.title2)
                    Text(scheduleItem.time).font(.title2)
                }
                Text(scheduleItem.location).font(.title2)
                Text(scheduleItem.description).font(.title2)
            }
        }
    }
}

struct ScheduleItemDetailView_Previews: PreviewProvider {
    static var previews: some View {
        ScheduleItemDetailView(scheduleItem: ScheduleItem(day: "Today", time: "Now", location: "Here", isFavorite: false, name: "Activity", description: "This is my activity"))
    }
}
