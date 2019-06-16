import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hiking } from './hiking';
import { HIKINGS } from './hikings-mock';

@Injectable({
  providedIn: 'root'
})
export class HinkingsService {

  constructor() { }

  getHikings(): Observable<Hiking[]> {
    return of(HIKINGS);
  }

  getHiking(x): Observable<Hiking> {
    return of(HIKINGS[x]);
  }
}
