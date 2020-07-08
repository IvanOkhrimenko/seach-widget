import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { EventEmitter } from '@angular/core';

export interface EventModel {
  [eventsIds: string]: any;
  name: string;
  event: EventEmitter<any>;
}

export interface EventsState extends EntityState<EventModel> {
  [eventsIds: string]: any;
}

export const adapter: EntityAdapter<EventModel> = createEntityAdapter<EventModel>({
  selectId: (event: EventModel) => event.name
});

export const initialState: EventsState = adapter.getInitialState({
  eventsIds: {}
});
