export class Show {
  title!: string;
  score?: 0 | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  status!: 'Plan to Watch' | 'Watching' | 'Completed';
}
