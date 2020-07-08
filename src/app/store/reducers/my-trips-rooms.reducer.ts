import { Action, LOAD_MY_TRIPS_ROOMS, LOAD_MY_TRIPS_ROOMS_SUCCESS, LOAD_MY_TRIPS_ROOMS_ERROR } from '../actions/my-trips-rooms.actions';
import { MyTripsRoomsState, initialState } from '../states/my-trips-rooms.state';

export function MyTripsRoomsReducer(state: MyTripsRoomsState = initialState, action: Action): MyTripsRoomsState {
    switch (action.type) {
        case LOAD_MY_TRIPS_ROOMS:
            return state;

        case LOAD_MY_TRIPS_ROOMS_SUCCESS:
            return {
                myTripsRooms: action.payload.userOrderRooms,
                pagesCount: action.payload.pagesCount,
                totalRooms: action.payload.totalRooms,
                currentPage: action.payload.currentPage,
                isSuccess: true,
                isRooms: !!action.payload.userOrderRooms.length
            };
        case LOAD_MY_TRIPS_ROOMS_ERROR:
            return state;

        default:
            return state;
    }
}