import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css'],
})
export class AddShowComponent {
  @Output() addShow: EventEmitter<any> = new EventEmitter();

  title!: string;
  score!: number; // 0 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  status!: 'Plan to Watch' | 'Watching' | 'Completed';
  warningTitle = false;
  warningStatus = false;

  onSubmit() {
    const show = {
      title: this.title,
      score: this.score,
      status: this.status,
    };

    this.warningTitle =
      show.title === '' || show.title === undefined ? true : false;
    this.warningStatus = show.status === undefined ? true : false;

    // console.log(show);
    if (this.warningTitle === false && this.warningStatus === false) {
      this.addShow.emit(show);
    }
  }
}
