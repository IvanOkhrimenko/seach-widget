// import { DealOrderModel, RoomOrderModel, ServiceOrderModel } from '../../models/orders.model';
// import { ShoppingCartModel } from '../../models/shopping-cart.model';

export interface ShoppingCartState {
  cart: any;
  showSpinner: boolean;
  quedServiceOrder: {
    serviceOrder: any;
    madeRequest: boolean;
    failedRequest: boolean;
  };
  quedRoomOrders: {
    roomOrders: any[];
    madeRequest: boolean;
    failedRequest: boolean;
  };
  quedDealOrder: {
    dealOrder: any;
    madeRequest: boolean;
    failedRequest: boolean;
  };
}

export const INITIAL_SHOPPING_CART_STATE: ShoppingCartState = {
  cart: {
    services: {},
    rooms: {},
    deals: {}
  },
  showSpinner: true,
  quedServiceOrder: {
    serviceOrder: undefined,
    madeRequest: undefined,
    failedRequest: undefined
  },
  quedRoomOrders: {
    roomOrders: [],
    madeRequest: undefined,
    failedRequest: undefined
  },
  quedDealOrder: {
    dealOrder: undefined,
    madeRequest: undefined,
    failedRequest: undefined
  }
};
