import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  watchList!: Show[];

  constructor(private showService: ShowService) {}

  deleteShow(show: Show) {
    show.title = '';
    this.watchList = this.watchList.filter((show: Show) => show.title !== '');
  }

  addShow(show: Show) {
    this.watchList.push(show);
  }

  ngOnInit(): void {
    // Sample starting data
    this.watchList = [
      {
        title: 'Naruto',
        status: 'Plan to Watch',
      },
      {
        title: 'Hunter x Hunter',
        score: 10,
        status: 'Completed',
      },
      {
        title: 'Re: Zero',
        score: 10,
        status: 'Completed',
      },
      {
        title: 'Made In Abyss',
        status: 'Watching',
      },
    ];
  }
}
