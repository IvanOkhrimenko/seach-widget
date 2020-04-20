

export interface MyTripsRoomsState {
    myTripsRooms: Array<any>;
    pagesCount: number;
    totalRooms: number;
    currentPage: number;
    isSuccess: boolean;
    isRooms: boolean;
}


export const initialState: MyTripsRoomsState = {
    myTripsRooms: [],
    pagesCount: null,
    totalRooms: null,
    currentPage: null,
    isSuccess: false,
    isRooms: false
};
