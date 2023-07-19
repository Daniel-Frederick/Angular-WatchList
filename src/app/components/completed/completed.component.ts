import { Component } from '@angular/core';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  watchList!: Show[];

  constructor(private showList: ShowService) {}

  ngOnInit(): void {
    this.showList.currentShow.subscribe(
      (watchList) => (this.watchList = watchList)
    );
    // this.watchList.filter((show: Show) => show.status !== 'Watching');
  }
}
