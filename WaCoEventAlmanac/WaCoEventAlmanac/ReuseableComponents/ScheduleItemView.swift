//
//  ScheduleItemView.swift
//  WaCoEventAlmanac
//
//  Created by Kenli Shaw on 8/10/23.
//

import SwiftUI

struct ScheduleItemView: View {
    var scheduleItem: ScheduleItem
    var body: some View {
        VStack(alignment: .leading){
            HStack{
                Image("juggleShapes").resizable().frame(width:80, height: 80)
                
                VStack(alignment: .leading){
                    Text(scheduleItem.name).font(.title2).bold()
                    Text(scheduleItem.time)
                }.padding(.trailing, 90)
                
                Image("starIcon").resizable().frame(width: 40, height: 40)
            }
            
        }
    }
}

struct ScheduleItemView_Previews: PreviewProvider {
    static var previews: some View {
        ScheduleItemView(scheduleItem: ScheduleItem(day: "Today", time: "Now", location: "Here", isFavorite: false, name: "My event", description: "This is my event."))
    }
}
