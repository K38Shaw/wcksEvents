import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { routing } from './app-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { CarnivalComponent } from './carnival/carnival.component';
import { MapsComponent } from './maps/maps.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { RideHistoryComponent } from './ride-history/ride-history.component';
import { RidesComponent } from './rides/rides.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './notes/notes.component';
import { InteractiveFairMapComponent } from './interactive-fair-map/interactive-fair-map.component';
import { FairHistoryComponent } from './fair-history/fair-history.component';
import { GrandMarshallsComponent } from './grand-marshalls/grand-marshalls.component';
import { MarshallCardComponent } from './marshall-card/marshall-card.component';
import { FirstAidComponent } from './first-aid/first-aid.component';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    CompetitionsComponent,
    GeneralInfoComponent,
    CarnivalComponent,
    MapsComponent,
    ContactComponent,
    HistoryComponent,
    VendorsComponent,
    VolunteerComponent,
    RideHistoryComponent,
    RidesComponent,
    NotesComponent,
    InteractiveFairMapComponent,
    FairHistoryComponent,
    GrandMarshallsComponent,
    MarshallCardComponent,
    FirstAidComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
