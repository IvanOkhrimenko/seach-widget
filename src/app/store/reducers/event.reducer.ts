import { adapter, initialState, EventsState } from '../states/events.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Action, ADD_EVENT, EMIT_ACTION, OPEN_CALENDLY, OPEN_VIDEO } from '../actions/events.actions';
import isEmpty from 'lodash-es/isEmpty';
import values from 'lodash-es/values';

export function eventsReducer(state: EventsState = initialState, action: Action): EventsState {
  switch (action.type) {

    case ADD_EVENT:
      if (state.eventsIds[action.payload.name]) {
        return state;
      }

      state.eventsIds[action.payload.name] = action.payload.name;

      return {
        ...adapter.addOne(
          action.payload,
          state
        )
      };

    case EMIT_ACTION:
      if (isEmpty(state.eventsIds[action.payload.name])) {
        return state;
      }

      state.entities[action.payload.name].event.emit(action.payload.value);

      return state;

    default:
      return state;
  }
}

export const selectEventsState = createFeatureSelector<EventsState>('eventsReducer');
export const ids = (state: EventsState) => state.eventsIds;

const { selectIds, selectEntities } = adapter.getSelectors(selectEventsState);

export const selectEventIds = createSelector(selectEventsState, ids);

export const getGuestsFilterOpenEvent = createSelector(selectEntities, selectEventIds, (entities, selectIds) => {
  return values(selectIds).filter(e => e === 'guestFilterOpenEvent').map(e => entities[e]);
});

export const getDateFilterOpenEvent = createSelector(selectEntities, selectEventIds, (entities, selectIds) => {
  return values(selectIds).filter(e => e === 'dateFilterOpenEvent').map(e => entities[e]);
});

export const getOpenCalendly = createSelector(selectEntities, selectEventIds, (entities, selectIds) => {
  return values(selectIds).filter(e => e === OPEN_CALENDLY).map(e => entities[e]);
});

export const getOpenVideo = createSelector(selectEntities, selectEventIds, (entities, selectIds) => {
  return values(selectIds).filter(e => e === OPEN_VIDEO).map(e => entities[e]);
});
