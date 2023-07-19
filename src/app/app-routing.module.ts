import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { WatchingComponent } from './components/watching/watching.component';
import { CompletedComponent } from './components/completed/completed.component';
import { PlanToWatchComponent } from './components/plan-to-watch/plan-to-watch.component';

const routes: Routes = [
  // Shows only the shows that have the status 'completed'
  { path: 'completed', component: CompletedComponent },
  // Shows only the shows that have the status 'watching'
  { path: 'watching', component: WatchingComponent },
  // Shows only the shows that have the status 'Plan to Watch'
  { path: 'planToWatch', component: PlanToWatchComponent },
  // Shows all the shows in the list
  { path: '', component: WatchListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
