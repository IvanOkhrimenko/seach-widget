

export const LOAD_MY_TRIPS_ROOMS = 'LOAD_MY_TRIPS_ROOMS';
export const LOAD_MY_TRIPS_ROOMS_SUCCESS = 'LOAD_MY_TRIPS_ROOMS_SUCCESS';
export const LOAD_MY_TRIPS_ROOMS_ERROR = 'LOAD_MY_TRIPS_ROOMS_ERROR';

export interface LoadMyTripsRoomsPayloadModel {
    language?: string;
    accessToken?: string;
}

export class LoadMyTripsRooms {
    readonly type = LOAD_MY_TRIPS_ROOMS;

    constructor(public payload: LoadMyTripsRoomsPayloadModel) { }
}

export class LoadMyTripsRoomsSuccess {
    readonly type = LOAD_MY_TRIPS_ROOMS_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadMyTripsRoomsError {
    readonly type = LOAD_MY_TRIPS_ROOMS_ERROR;

    constructor(public payload: any) { }
}

export type Action = LoadMyTripsRooms
    | LoadMyTripsRoomsSuccess
    | LoadMyTripsRoomsError;
