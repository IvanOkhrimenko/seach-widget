import { Action } from '@ngrx/store';

export const SET_PRODUCTS_HEADER_FIELDS = 'SET_PRODUCTS_HEADER_FIELDS';
export const SET_MAIN_HEADER_FIELDS = 'SET_MAIN_HEADER_FIELDS';
export const SET_OFFER_HEADER_FIELDS = 'SET_OFFER_HEADER_FIELDS';
export const SET_COMPANY_HEADER_FIELDS = 'SET_COMPANY_HEADER_FIELDS';
export const SET_CUSTOM_HEADER_BOOKING_ENGINE = 'SET_CUSTOM_HEADER_BOOKING_ENGINE';

export class SetProductsHotelFilterAction implements Action {
    readonly type = SET_PRODUCTS_HEADER_FIELDS;
}
export class SetMainHotelFilterAction implements Action {
    readonly type = SET_MAIN_HEADER_FIELDS;
}
export class SetCompanyHotelFilterAction implements Action {
    readonly type = SET_COMPANY_HEADER_FIELDS;
}
export class SetOfferHotelFilterAction implements Action {
    readonly type = SET_OFFER_HEADER_FIELDS;
}

export class SetCustomHeaderBookingEngine implements Action {
    constructor(public payload) { }
    readonly type = SET_CUSTOM_HEADER_BOOKING_ENGINE;
}

export type HeaderActions =
    | SetProductsHotelFilterAction
    | SetMainHotelFilterAction
    | SetCompanyHotelFilterAction
    | SetOfferHotelFilterAction
    | SetCustomHeaderBookingEngine;
