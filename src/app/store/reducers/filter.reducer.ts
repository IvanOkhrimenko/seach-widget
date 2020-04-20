import * as dateFns from 'date-fns';
import cloneDeep from 'lodash-es/cloneDeep';
import { DATE_FORMAT } from '../../constants/general.constants';
import { CHANGE_HOTEL_FILTER, FilterActions, SET_DATE, SET_GUESTS, SET_NEARLY_DATE } from '../actions/filter.actions';
import { FilterState, INITIAL_SEARCH_FILTER_STATE } from '../states/filter.state';

export function FilterReducer(
  state: FilterState = INITIAL_SEARCH_FILTER_STATE,
  action: FilterActions
): FilterState {
  const newState = cloneDeep(state);

  switch (action.type) {

    case CHANGE_HOTEL_FILTER:
      return cloneDeep(action.payload);

    case SET_DATE:
      // @ts-ignore
      newState.from = dateFns.format(action.payload.from, DATE_FORMAT);
      // @ts-ignore
      newState.to = dateFns.format(action.payload.to, DATE_FORMAT);
      return newState;

    case SET_NEARLY_DATE:
      newState.from = dateFns.format(dateFns.addDays(new Date(), 1), DATE_FORMAT);
      newState.to = dateFns.format(dateFns.addDays(new Date(), 2), DATE_FORMAT);
      return newState;

    case SET_GUESTS:
      newState.adults = action.payload.adults;
      newState.children = action.payload.children ? action.payload.children : 0;
      newState.kidsAge = action.payload.kidsAge ? action.payload.kidsAge : [];
      return newState;

    default:
      return state;
  }
}
