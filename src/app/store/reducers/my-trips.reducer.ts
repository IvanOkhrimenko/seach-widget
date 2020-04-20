import { INITIAL_MY_TRIPS_STATE, MyTripsState } from '../states/my-trips.state';
import {
  ADD_COMMENT,
  CANCEL_USER_PRECHECKINS_SUCCESS,
  DESELECT_PRECHECKIN,
  FILTER_SERVICE_LOCALLY,
  GET_COMMENT_SUCCESS,
  GET_DEAL_SUCCESS,
  GET_USER_ORDERS,
  GET_USER_ORDERS_ERROR,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_PRECHECKINS,
  GET_USER_PRECHECKINS_AND_ORDERS,
  GET_USER_PRECHECKINS_AND_ORDERS_SUCCESS,
  GET_USER_PRECHECKINS_ERROR,
  GET_USER_PRECHECKINS_SUCCESS,
  MyTripsActions,
  REMOVE_SERVICE_LOCALLY,
  REMOVE_SERVICE_ORDER_ERROR,
  REMOVE_SERVICE_ORDER_SUCCESS,
  SELECT_PRECHECKIN,
  TOGGLE_PRECHECKIN_HISTORY
} from '../actions/my-trips.actions';
import isEmpty from 'lodash-es/isEmpty';
import keyBy from 'lodash-es/keyBy';
import findIndex from 'lodash-es/findIndex';
import cloneDeep from 'lodash-es/cloneDeep';
import filter from 'lodash-es/filter';

export function MyTripsReducer(state: MyTripsState = INITIAL_MY_TRIPS_STATE,
  action: MyTripsActions): MyTripsState {

  const newState = cloneDeep(state);

  switch (action.type) {

    case GET_USER_PRECHECKINS:
      return newState;

    case GET_USER_PRECHECKINS_SUCCESS:
      newState.prechekins = action.payload;
      return newState;

    case GET_USER_PRECHECKINS_ERROR:
      return newState;

    case GET_USER_ORDERS:
      return newState;

    case GET_USER_ORDERS_SUCCESS:
      newState.orders = action.payload;
      return newState;

    case GET_USER_PRECHECKINS_AND_ORDERS:
      newState.orders = null;
      newState.prechekins = null;
      newState.selectedPrechekin = null;
      newState.deals = null;
      return newState;

    case CANCEL_USER_PRECHECKINS_SUCCESS:
      const index = findIndex(newState.prechekins, { id: action.payload.id });
      newState.prechekins.splice(index, 1);
      return newState;

    case GET_USER_PRECHECKINS_AND_ORDERS_SUCCESS:
      newState.orders = keyBy(action.payload[0], 'id');
      newState.prechekins = action.payload[1];
      newState.selectedPrechekin = null;
      newState.deals = null;
      return newState;

    case SELECT_PRECHECKIN:
      newState.selectedPrechekin = action.payload;
      return newState;

    case DESELECT_PRECHECKIN:
      newState.selectedPrechekin = null;
      newState.deals = null; // temp
      return newState;

    case GET_DEAL_SUCCESS:
      let precheckinDeals = newState.dealsCollection[action.payload.precheckinId];
      if (isEmpty(precheckinDeals)) {
        precheckinDeals = {};
      }

      precheckinDeals[action.payload.deal.id] = action.payload.deal;
      newState.dealsCollection[action.payload.precheckinId] = precheckinDeals;
      return newState;

    // case GET_DEALS_SUCCESS:
    //   newState.deals = action.payload;
    //   return newState;

    case GET_COMMENT_SUCCESS:
      newState.orders[action.payload.orderId].messages = action.payload.messages;
      return newState;

    case ADD_COMMENT:
      return newState;

    case TOGGLE_PRECHECKIN_HISTORY:
      newState.showHistory = action.payload;
      // newState.selectedPrechekin.showHistory = action.payload;
      return newState;

    case GET_USER_ORDERS_ERROR:
      return newState;
    case REMOVE_SERVICE_ORDER_SUCCESS:
      delete newState.orders[action.payload];
      return newState;

    case REMOVE_SERVICE_ORDER_ERROR:
      return newState;

    case REMOVE_SERVICE_LOCALLY:
      delete newState.orders[action.payload];
      return newState;

    case FILTER_SERVICE_LOCALLY:
      newState['orders'] = filter(newState.orders, (order) => {
        return order['precheckin_id'] !== action.payload;
      });
      return newState;

    default:
      return state;
  }
}
