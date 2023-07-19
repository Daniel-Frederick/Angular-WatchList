import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';
import { Show } from 'src/app/models/show';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css'],
})
export class ShowItemComponent implements OnInit {
  @Input() watch!: Show;
  @Output() deleteShow: EventEmitter<Show> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(watch: Show) {
    this.deleteShow.emit(watch);
  }

  setClasses() {
    const classes = {
      watching: this.watch.status === 'Watching',
      completed: this.watch.status === 'Completed',
    };

    return classes;
  }
}
