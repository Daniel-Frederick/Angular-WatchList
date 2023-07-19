import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: ['./watching.component.css'],
})
export class WatchingComponent implements OnInit {
  watchList!: Show[];

  deleteShow(show: Show) {
    show.title = '';
    this.watchList = this.watchList.filter((show: Show) => show.title !== '');
  }

  constructor(private showList: ShowService) {}

  ngOnInit(): void {
    this.showList.currentShow.subscribe(
      (watchList) => (this.watchList = watchList)
    );
    // this.watchList.filter((show: Show) => show.status !== 'Watching');
  }
}

//   if (show.status === 'Watching') {
//     this.watchList.push(show);
//   }
