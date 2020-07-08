// import { any } from     . '../../models/room.model';

export interface LoadedRoom {
  room: any;
  language: string;
  timestamp: number;
}

export interface RoomsState {
  roomsLoaded: {
    [dates: string]: {
      [roomId: string]: LoadedRoom
    }
  };
  relations: {
    [relationKeys: string]: string[]
  };
}

export const INITIAL_ROOMS_STATE: RoomsState = {
  roomsLoaded: {},
  relations: {}
};
