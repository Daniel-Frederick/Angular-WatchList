import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { WatchItemComponent } from './watch-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { ShowItemComponent } from './components/show-item/show-item.component';
import { HeaderComponent } from './components/header/header.component';
import { AddShowComponent } from './components/add-show/add-show.component';
import { PlanToWatchComponent } from './components/plan-to-watch/plan-to-watch.component';
import { WatchingComponent } from './components/watching/watching.component';
import { CompletedComponent } from './components/completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchListComponent,
    ShowItemComponent,
    HeaderComponent,
    AddShowComponent,
    PlanToWatchComponent,
    WatchingComponent,
    CompletedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
