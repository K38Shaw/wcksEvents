//
//  ScheduleMainView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/4/23.
//

import SwiftUI

struct ScheduleMainView: View {
    var scheduleItem: ScheduleItem
    var body: some View {
        
            ScrollView{
                ForEach(scheduleItems){
                    scheduleItem in
                    NavigationLink{
                        ScheduleItemDetailView(scheduleItem: scheduleItem)
                    } label : {
                        ScheduleItemView(scheduleItem: scheduleItem)
                    }
                }
            
        }
    }
}

struct ScheduleMainView_Previews: PreviewProvider {
    static var previews: some View {
        ScheduleMainView(scheduleItem: ScheduleItem(day: "Today", time: "Now", location: "Here", isFavorite: false, name: "Activity", description: "This is all about the activity"))
    }
}
