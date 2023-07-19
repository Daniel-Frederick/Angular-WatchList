import { Component } from '@angular/core';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-plan-to-watch',
  templateUrl: './plan-to-watch.component.html',
  styleUrls: ['./plan-to-watch.component.css'],
})
export class PlanToWatchComponent {
  watchList!: Show[];
  constructor(private showList: ShowService) {}
  ngOnInit(): void {
    this.showList.currentShow.subscribe(
      (watchList) => (this.watchList = watchList)
    );
    // this.watchList.filter((show: Show) => show.status !== 'Watching');
  }
}
