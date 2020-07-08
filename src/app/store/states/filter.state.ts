import { DEFAULT_ADULTS_AMOUNT } from "../../constants/general.constants";

export const SEARCH_ITEMS_PER_PAGE = 6;

export enum FilterType {
  seoPage = 'seoPage',
  dealPage = 'dealPage',
  hotelPage = 'hotelPage',
  destinationsPage = 'destinationsPage',
  citiesPage = 'citiesPage',
  eventsPage = 'eventsPage',
  placesPage = 'placesPage',
  bookingEnginePage = 'bookingEnginePage'
}

export interface FilterState {
  page: number;
  per_page: number;
  items_per_page: number;

  lat: string;
  long: string;
  distance: string;
  location: string;

  nw: string;
  se: string;

  from: string;
  to: string;
  rooms: number;

  language: string;

  substring: string;
  tag: string;
  nights: string;
  id: string;
  type: string;
  seo_block: string;
  url: string;
  min_price: any;
  max_price: any;
  hotel_facilities: string;
  facility: string;
  cities: string;
  room_facilities: string;
  children: any;
  adults: number;
  exclude: string;
  google_rating: string;
  hotel_stars: any;
  hotels: string;
  seo_page: string;
  kidsAge: Array<number>;
  uc?: number;
  tags: string;
  filter_tag: number;
  booking_id?: string;
  duration?: string;
  min_persons?: number;
  max_persons?: number;
  persons?: any;
  map?: any;
  checkin?: string;
  checkout: string;
  sort: string;
}

export const INITIAL_SEARCH_FILTER_STATE: FilterState = {
  page: 1,
  per_page: SEARCH_ITEMS_PER_PAGE,
  items_per_page: SEARCH_ITEMS_PER_PAGE,
  lat: null,
  long: null,
  distance: null,
  nw: '',
  se: '',
  from: '',
  to: '',
  rooms: null,
  language: '',
  substring: '',
  seo_block: '',
  id: null,
  type: null,
  url: null,
  min_price: 0,
  max_price: 0,
  hotel_facilities: '',
  room_facilities: '',
  adults: DEFAULT_ADULTS_AMOUNT,
  exclude: '',
  tag: '',
  location: '',
  nights: '',
  google_rating: '',
  hotel_stars: '',
  cities: '',
  facility: '',
  hotels: '',
  seo_page: '',
  kidsAge: [],
  uc: 0,
  tags: '',
  filter_tag: 0,
  duration: null,
  persons: null,
  map: '',
  checkin: '',
  checkout: '',
  children: 0,
  sort: 'price'
};