import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  constructor() { }

  private _events: EventsHashTable<Subject<any>> = {};

  public Action(eventName: string, payload: any): void {
    debugger;
    let event: Subject<any> = this._events[eventName];
    if (event !== null && typeof event !== 'undefined') {
      event.next(payload);
    }
  }

  public Event(eventName: string): Observable<any> {
    debugger;
    let event: Subject<any> = this._events[eventName];
    if (event === null || typeof event === 'undefined') {
      event = new Subject<any>();
      this._events[eventName] = event;
    }
    return event.asObservable();
  }

  public ClearEvent(eventName: string): void {
    delete this._events[eventName];
  }
}

interface EventsHashTable<T> {
  [key: string]: T;
}


