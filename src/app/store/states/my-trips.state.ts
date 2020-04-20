// import { UserOrder, UserPrecheckin } from '../../models/myTrips';

export interface MyTripsState {
  prechekins: [any];
  orders: { };
  selectedPrechekin: any;
  showHistory: boolean;
  deals: any;
  comments: any;
  dealsCollection: {  };
  availableServices: { [key: string]: any };
}

export const INITIAL_MY_TRIPS_STATE: MyTripsState = {
  prechekins: null,
  orders: null,
  selectedPrechekin: null,
  showHistory: false,
  deals: null,
  comments: null,
  dealsCollection: {},
  availableServices: {}
};
