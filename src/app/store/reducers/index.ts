import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../states/application.state';
// import { GlobalReducer } from './global.reducer';
// import { ShoppingCartReducer } from './shopping-cart.reducer';
import { AuthorizationReducer } from './authorization.reducer';
import { HfRouterReducer } from './hf-router.reducer';
import { MyTripsReducer } from './my-trips.reducer';
// import { RoomsReducer } from './rooms.reducer';
// import { DealsReducer } from './deals.reducer';
// import { SearchDealsReducer } from './search-deal.reducer';
// import { CategoriesReducer } from './categories.reducer';
// import { CareersReducer } from './careers.reducer';
// import { StaticPagesReducer } from './static-pages.reducer';
import { FilterReducer } from './filter.reducer';
import { screenReducer } from './screen.reducer';
// import { tagsReducer } from './tags.reducer';
// import { topDealsReducer } from './top-deals.reducer';
// import { hotelStarsReducer } from './hotel-stars.reducer';
// import { facilitiesReducer } from './facilities.reducer';
// import { citiesReducer } from './cities.reducer';
// import { googleRatingReducer } from './google-rating.reducer';
// import { HeaderReducer } from './header.reducer';
// import { MyTripsDealsReducer } from './my-trips-deals.reducer';
import { eventsReducer } from './event.reducer';
// import { PricingReducer } from './pricing.reducer';
// import { tourTagsReducer } from './tour-categories.reducer';
// import { MyTripsToursReducer } from './my-trips-tours.reducer';
import { navMenuReducer } from './nav-menu.reducer';
import { MyTripsRoomsReducer } from './my-trips-rooms.reducer';

export const reducers = {
  routerState: HfRouterReducer,
  // globalState: GlobalReducer,
  filterState: FilterReducer,
  // shoppingCartState: ShoppingCartReducer,
  authorizationState: AuthorizationReducer,
  myTripsState: MyTripsReducer,
  // roomsState: RoomsReducer,
  // dealsState: DealsReducer,
  // searchDealsState: SearchDealsReducer,
  // categoriesState: CategoriesReducer,
  // careersState: CareersReducer,
  // staticPagesState: StaticPagesReducer,
  screen: screenReducer,
  // tagsState: tagsReducer,
  // topDealsState: topDealsReducer,
  // hotelStarsState: hotelStarsReducer,
  // facilitiesState: facilitiesReducer,
  // citiesState: citiesReducer,
  // googleRatingState: googleRatingReducer,
  // headerState: HeaderReducer,
  // myTripsDealsState: MyTripsDealsReducer,
  // myTripsToursState: MyTripsToursReducer,
  myTripsRoomsState: MyTripsRoomsReducer,
  eventsReducer: eventsReducer,
  // pricingState: PricingReducer,
  // tourTagsState: tourTagsReducer,
  navMenuState: navMenuReducer
};
