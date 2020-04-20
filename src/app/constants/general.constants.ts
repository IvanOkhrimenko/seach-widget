export const INFINITY = 'Infinity';
export const DECREASE = 'decrease';
export const INCREASE = 'increase';
import { environment } from '../../environments/environment';

/*######################################################################################################*/
/*                                      PRICE CONSTANTS:                                                */
/*######################################################################################################*/
export const NORMAL = 'normal';
export const FEATURED = 'featured';
export const FREE = 'free';
//////////////////////////////////////////////////////////////////////////////////////////////////////////

export const DATE_FORMAT = 'yyyy-MM-dd';
export const DATE_FORMAT_REVERSE = 'DD MMM YYYY';
export const TIME_FORMAT = `${DATE_FORMAT} HH:mm`;


/*######################################################################################################*/
/*                                      REGEXP CONSTANTS                                           */
/*######################################################################################################*/

export const EMAIL_REGEX = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
export const PHONE_REGEX = /^\+?[0-9]+$/;
export const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-zA-Z])/;
export const NUMBERS_REGEX = /[0-9]+/;
export const LETTERS_REGEX = /^[^0-9]*$/;
export const DATE_REGEX = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
export const WHITE_SPACE = /^\S*$/;
export const FULL_NAME_REGEX = /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;


/*######################################################################################################*/
/*                                      LANGUAGE CONSTANTS:                                             */
/*######################################################################################################*/
export const EN = 'en';
export const DE = 'de';
export const RU = 'ru';
export const UK = 'uk';
export const PL = 'pl';
export const ZH = 'zh';
export const RO = 'ro';
export const TH = 'th';
export const FR = 'fr';
export const ES = 'es';
export const KA = 'ka';
export const IT = 'it'
export const PT = 'pt';
// export const defaultLanguage = [
//   { code: "en", file: `${environment.API_URL}/images/flags/32/GB.png`, name: "English" },
//   { code: "de", file: `${environment.API_URL}/images/flags/32/DE.png`, name: "Deutsch" }
// ];
export const LANGUAGES = [EN, DE, RU, UK, PL, ZH, RO, TH, FR, ES, KA, IT, PT];

/*######################################################################################################*/
/*                                      CURRENCY CONSTANTS:                                             */
/*######################################################################################################*/
export const USD = { name: 'U.S. dollar', symbol: '$', position: 'left' };
export const EUR = { name: 'Euro', symbol: '&euro;', position: 'left' };
export const JPY = { name: 'Japanese yen', symbol: 'JPY' };
export const BGN = { name: 'Bulgarian lev', symbol: 'BGN' };
export const CZK = { name: 'Czech koruna', symbol: 'CZK' };
export const DKK = { name: 'Danish krone', symbol: 'DKK' };
export const GBP = { name: 'Pound sterling', symbol: '&#163;', position: 'left' };
export const HUF = { name: 'Hungarian forint', symbol: 'HUF' };
export const PLN = { name: 'Polish zloty', symbol: 'PLN' };
export const RON = { name: 'Romanian leu', symbol: 'RON' };
export const SEK = { name: 'Swedish krona', symbol: 'SEK' };
export const CHF = { name: 'Swiss franc', symbol: 'CHF' };
export const ISK = { name: 'Icelandic krona', symbol: 'ISK' };
export const NOK = { name: 'Norwegian krone', symbol: 'NOK' };
export const HRK = { name: 'Croatian kuna', symbol: 'HRK' };
export const RUB = { name: 'Russian rouble', symbol: 'RUB' };
export const TRY = { name: 'Turkish lira', symbol: 'TRY' };
export const AUD = { name: 'Australian dollar', symbol: 'AUD' };
export const BRL = { name: 'Brazilian real', symbol: 'BRL' };
export const CAD = { name: 'Canadian dollar', symbol: 'CA$' };
export const CNY = { name: 'Chinese yuan renminbi', symbol: 'CNY' };
export const HKD = { name: 'Hong Kong dollar', symbol: 'HK$' };
export const IDR = { name: 'Indonesian rupiah', symbol: 'IDR' };
export const ILS = { name: 'Israeli shekel', symbol: 'ILS' };
export const INR = { name: 'Indian rupee', symbol: 'INR' };
export const KRW = { name: 'South Korean won', symbol: 'KRW' };
export const MXN = { name: 'Mexican peso', symbol: 'MXN' };
export const MYR = { name: 'Malaysian ringgit', symbol: 'MYR' };
export const NZD = { name: 'New Zealand dollar', symbol: 'NZD' };
export const PHP = { name: 'Philippine piso', symbol: 'PHP' };
export const SGD = { name: 'Singapore dollar', symbol: 'SG$' };
export const THB = { name: 'Thai baht', symbol: 'THB' };
export const ZAR = { name: 'South African rand', symbol: 'ZAR' };
export const GEL = { name: 'Georgian Lari', symbol: 'GEL' };

export const ALL_CURRENCIES = {
  USD, EUR, JPY, BGN, CZK, DKK, GBP, HUF,
  PLN, RON, SEK, CHF, ISK, NOK, HRK, RUB,
  TRY, AUD, BRL, CAD, CNY, HKD, IDR, ILS,
  INR, KRW, MXN, MYR, NZD, PHP, SGD, THB,
  ZAR, GEL
};

export const TOP_CURRENCIES = {
  USD, EUR, GBP, CAD, INR, JPY, CHF, RUB, GEL
};

/*######################################################################################################*/
/*                                      GOOGLE API KEY:                                                 */
/*######################################################################################################*/
export const GOOGLE_API_KEY = 'AIzaSyAvBSEZphqXBsC2KFDRw6irKJx741a3ofg';

export const GOOGLE_MAP_STYLE = [
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#d6e2e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#cfd4d5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#7492a8"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "lightness": 25
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dde2e3"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#cfd4d5"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dde2e3"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#7492a8"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#dde2e3"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#588ca4"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "saturation": -100
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a9de83"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#bae6a1"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c6e8b3"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#bae6a1"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#41626b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "saturation": -45
      },
      {
        "lightness": 10
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c1d1d6"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#a6b5bb"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#9fb6bd"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [
      {
        "saturation": -70
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b4cbd4"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#588ca4"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#008cb5"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": -5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a6cbe3"
      }
    ]
  }
]

/*######################################################################################################*/
/*                                      DEFAULT ADULTS AMOUNT                                           */
/*######################################################################################################*/

export const DEFAULT_ADULTS_AMOUNT = 2;

/*######################################################################################################*/
/*                                      SEO STRUCTURED DATA OBJECTS                                     */
/*######################################################################################################*/

export const ORGANIZATION_DATA = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  'name': 'HotelFriend AG',
  'url': 'https://hotelfriend.com',
  'logo': 'https://hotelfriend.com/assets/icons/structured-data/logo_112x112@2x.png',
  'contactPoint': [
    {
      '@type': 'ContactPoint',
      'telephone': '+49-30-46999-5418',
      'contactType': 'customer support',
      'availableLanguage': ['English', 'German']
    }
  ],
  'sameAs': [
    'https://www.linkedin.com/company/hotelfriend/',
    'https://www.instagram.com/hotelfriend/',
    'https://www.facebook.com/HotelFriendApp/',
    'https://twitter.com/HotelFriendAG'
  ]
};

export const SEARCHBOX = {
  '@context': 'http://schema.org',
  '@type': 'WebSite',
  'url': 'https://hotelfriend.com/',
  'potentialAction': {
    '@type': 'SearchAction',
    'target': 'https://hotelfriend.com/s?substring={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

/*######################################################################################################*/
/*                                      SEO-SCHEMA DIRECTIVE CONSTANTS                                  */
/*######################################################################################################*/

export const HOTEL = 'HOTEL',
  DEAL = 'DEAL',
  JOB_POSTING = 'JOB_POSTING',
  JOBS_LIST = 'JOBS_LIST';

/*######################################################################################################*/
/*                                      ENVIRONMENT CONSTANTS                                           */
/*######################################################################################################*/

export const DEV = 'dev';
export const STAGE = 'stage';

/*######################################################################################################*/
/*                                      BLOG CONSTANTS                                                  */
/*######################################################################################################*/

export const POSTS_PER_PAGE = 10;

/*######################################################################################################*/
/*                                      TOUR CONSTANTS                                                  */
/*######################################################################################################*/

export const TOURS_PER_PAGE = 7;


/*######################################################################################################*/
/*                                      DEALS CONSTANTS                                                 */
/*######################################################################################################*/

export const DEALS_PER_PAGE = 16;
export const DEALS_PER_PAGE_12 = 12;

/*######################################################################################################*/
/*                                    PER PAGE CONSTANTS                                                */
/*######################################################################################################*/

export const REGIONS_PER_PAGE = 50;
export const CITIES_PER_PAGE = 50;
export const PLACES_PER_PAGE = 50;
export const EVENTS_PER_PAGE = 50;


export const TRANSFER_STATE_KEY = '@state';
export const TRANSFER_KEY_AUTHORIZATION_SERVER_CLIENT = 'TRANSFER_KEY_AUTHORIZATION_SERVER_CLIENT';

/*######################################################################################################*/
/*                                    DICTIONARY CONSTANTS                                                */
/*######################################################################################################*/
export const TOP_DEALS = "TOP_DEALS";

/*######################################################################################################*/
/*                                      APP LINK                                                        */
/*######################################################################################################*/
export const APP_LINK = 'https://hotelfriend.app.link';
export const APP_LINK_TITLE = 'HotelFriend - travel deals';
export const APP_LINK_DESCRIPTION = 'With HotelFriend concierge app you can choose a hotel that suits you best, buy a deal at a discount price and order any hotel service - everything in one place. The app is easy to use, intuitive and comfortable, enabling you to save time and plan your trip in advance using smartphone only.';

/*######################################################################################################*/
/*                                      SOURCES                                                       */
/*######################################################################################################*/
export const BOOKING_BUTTON_SOURCE = 'BOOKING_BUTTON';

export const SOFTWARE_VIDEO = 'https://www.youtube.com/embed/V9sk89QEOb0?autoplay=1';
