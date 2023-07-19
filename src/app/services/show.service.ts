import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../models/show';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private showSource = new BehaviorSubject<Show[]>([
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
  ]);
  currentShow = this.showSource.asObservable();

  changeShow(show: Show[]) {
    this.showSource.next(show);
  }

  constructor(private http: HttpClient) {}

  // deleteShow(show: Show): Observable<Show> {
  //   return this.http.delete<Show>('', show);
  // }

  // Add Show
  // addShow(show: Show): Observable<Show> {
  //   return this.http.post<Show>(show, );
  // }
}
