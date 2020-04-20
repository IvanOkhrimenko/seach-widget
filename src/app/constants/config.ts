
import { EN, DE } from '../constants/general.constants';


export class Config {

  IS_WEB_DEV = false;
  static USED_LANGS = [EN, DE];

  // THESE ARE MANUALLY SET VARIABLES
  MODE;
  API_VERSION = 'v2/';
  EXPIRATION_DAY = 86400000; // 1 Day in milliseconds
  EXPIRATION_20_SEC = 20000;
  EXPIRATION_10_MIN = 600000;

  ROUTE_LIST = {
    'hotel': 'a/:hotelUrl',
    'deal': 'd',
    'checkout': 'checkout'
  };

  REQUEST_WARNING_THRESHOLD = this.EXPIRATION_10_MIN;

  // THESE ARE AUTOMATICALLY SET VARIABLES
  BASE_URL: string;
  // stripe_key: string;
  SELF_DOMAIN: string;
  UNIVERSAL_PORT: number;


   environment = {
    production: false,
    envName: 'stage',
    SELF_DOMAIN: 'http://localhost:4200',
    API_URL: 'https://app-dev.hotelfriend.com/',
    API_VERSION: 'v2/',
    UNIVERSAL_PORT: 8000,
    STRIPE_KEY: 'pk_test_yYyHJzGBG4hcBPQyM7aaylQn',
    PAY_PAL_SANDBOX_KEY: 'AdA1Gj8ndyjG_Xn82B8X3uwKLEDA4REUy3TwdtjSHfw3VAQEYmSJzViWUYEHR4YQ4OigUtN1a0YXNYIM',
    PAY_PAL_PROD_KEY: 'AdA1Gj8ndyjG_Xn82B8X3uwKLEDA4REUy3TwdtjSHfw3VAQEYmSJzViWUYEHR4YQ4OigUtN1a0YXNYIM',
    REDIS_PORT: 6379,
    REDIS_HOST: 'localhost'
  };

  readonly PREDICTION_API_URL = 'https://predictionio.hotelfriend.co/';
  readonly PREDICTION_API_KEY = 'KLk5CIV4NtpjbpsyGuGlZpR5iojmUiSXS6ictu_mgxayNpQJwjmEXLAHuQ4rA_I2';

  constructor() {
    this.IS_WEB_DEV = this.environment.production;
    this.MODE = this.environment.envName;
    this.API_VERSION = this.environment.API_VERSION;
    this.BASE_URL = this.environment.API_URL;
    this.SELF_DOMAIN = this.environment.SELF_DOMAIN;
    this.UNIVERSAL_PORT = this.environment.UNIVERSAL_PORT;
  }
}
