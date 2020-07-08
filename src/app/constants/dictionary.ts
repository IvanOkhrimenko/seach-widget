// import { PaymentSystemItem } from '../store/repositories/dictionary/items/payment-system-item';
// import { StripeComponent } from '../modules/checkout/checkout-payment-methods/stripe/stripe.component';
// import { PayPalComponent } from '../modules/checkout/checkout-payment-methods/pay-pal/pay-pal.component';
// import { TagPriorityItem } from '../store/repositories/dictionary/items/tag-priority-item';
// import { Item } from '../store/repositories/dictionary/item';
// import { ProductPaymentItem } from '../store/repositories/dictionary/items/product-payment-item';
// import { BuyDealProcessor } from '../store/repositories/dictionary/processors/product-payment/buy-deal.processor';
// import { AddDealToCartProcessor } from '../store/repositories/dictionary/processors/product-payment/add-deal-to-cart.processor';
// import { SofortComponent } from '../modules/checkout/checkout-payment-methods/sofort/sofort.component';
// import { BuyTourProcessor } from '../store/repositories/dictionary/processors/product-payment/buy-tour.processor';
// import { BBStripeComponent } from '../modules/booking-engine/components/booking-engine-payment/booking-engine-payment-methods/stripe/stripe.component';


// /**
//  * @type {{}}
//  */
// export let dictionary = {
//   payment: {
//     itemClass: PaymentSystemItem,
//     data: [
//       {
//         id: 0,
//         key: 'Stripe',
//         text: 'TITLE.credit-card',
//         card_required: true,
//         // formComponent: StripeComponent,
//         paymentType: 'Card',
//         deferredPayment: true,
//         logos: [
//           {
//             src: '/assets/icons/stripe.svg',
//             alt: 'Stripe',
//             imgClass: 'checkout_pay-visa-electron'
//           },
//         ]
//       },
//       // {
//       //   id: 1,
//       //   key: 'PayPal',
//       //   text: '',
//       //   card_required: false,
//       //   formComponent: PayPalComponent,
//       //   paymentType: 'PayPal',
//       //   deferredPayment: false,
//       //   logos: [
//       //     {
//       //       src: '/assets/icons/icon-paypal.png',
//       //       alt: 'PayPal',
//       //       imgClass: 'checkout_pay-paypal'
//       //     },
//       //   ]
//       // },
//       {
//         id: 2,
//         key: 'Sofort',
//         text: '',
//         card_required: false,
//         // formComponent: SofortComponent,
//         paymentType: 'Sofort',
//         deferredPayment: true,
//         logos: [
//           {
//             src: '/assets/icons/logo-sofort-klein.png',
//             alt: 'Sofort',
//             imgClass: 'checkout_sofort-logo'
//           },
//         ]
//       },
//     ]
//   },

//   paymentBookingEngine: {
//     // itemClass: PaymentSystemItem,
//     data: [
//       {
//         id: 0,
//         key: 'Stripe',
//         text: 'CHECKOUT.card',
//         card_required: true,
//         // formComponent: BBStripeComponent,
//         paymentType: 'Card',
//         deferredPayment: true,
//         logos: [
//           {
//             src: '/assets/icons/visa:mastercard.svg',
//             alt: 'MasterCard',
//             imgClass: ''
//           }
//           // },
//           // {
//           //   src: '/assets/icons/icon-visa.png',
//           //   alt: 'Visa',
//           //   imgClass: 'checkout_pay-visa'
//           // },
//           // {
//           //   src: '/assets/icons/icon-visa-electron.png',
//           //   alt: 'Visa Electron',
//           //   imgClass: 'checkout_pay-visa-electron'
//           // },
//         ]
//       },
//     ]
//   },
//   tagsPriority: {
//     itemClass: TagPriorityItem,
//     tag: 'tags',
//     data: [
//       {
//         id: 4,
//         key: 'TOP_DEALS',
//         text: 'top deals',
//         unid: '24bdc4818816bdc20718b763ea5bc7be0496fce4',
//         tags: []
//       },
//       {
//         id: 2,
//         key: 'SHORT_BREAKS',
//         text: 'short breaks',
//         unid: 'aa04a7833100f9212c0fe50cae53a8d584a2edb1',
//         tags: []
//       },
//       {
//         id: 0,
//         key: 'WELLNESS',
//         text: 'wellness',
//         unid: '5a502cc7893d42d8f31202999a54b440707fe5c7',
//         tags: ['strictFiltered']
//       },
//       {
//         id: 3,
//         key: 'CITY_TOURS',
//         text: 'city tours',
//         unid: 'd7ebdbf7a1bfef3c1b5bca80658f1403b2f97565',
//         tags: []
//       },
//       {
//         id: 1,
//         key: 'FAMILY',
//         text: 'family',
//         unid: '9cff7b4e842ca473c0c39bccfd13ce2f05e2890e',
//         tags: ['strictFiltered']
//       },
//       {
//         id: 5,
//         key: 'ROMANTIC',
//         text: 'romantic',
//         unid: '3427de1383b354cb1daa748ffbbc2989b0297a92',
//         tags: ['strictFiltered']
//       }
//     ]
//   },
//   nightsRanges: {
//     itemClass: Item,
//     data: [
//       {
//         id: 12,
//         key: '1-14',
//         text: '1-14'
//       },
//       {
//         id: 0,
//         key: '1-2',
//         text: '1-2'
//       },
//       {
//         id: 1,
//         key: '2-4',
//         text: '2-4'
//       },
//       {
//         id: 2,
//         key: '3-5',
//         text: '3-5'
//       },
//       {
//         id: 3,
//         key: '4-6',
//         text: '4-6'
//       },
//       {
//         id: 4,
//         key: '5-7',
//         text: '5-7'
//       },
//       {
//         id: 5,
//         key: '6-8',
//         text: '6-8'
//       },
//       {
//         id: 6,
//         key: '7-9',
//         text: '7-9'
//       },
//       {
//         id: 7,
//         key: '8-10',
//         text: '8-10'
//       },
//       {
//         id: 8,
//         key: '9-11',
//         text: '9-11'
//       },
//       {
//         id: 9,
//         key: '10-12',
//         text: '10-12'
//       },
//       {
//         id: 10,
//         key: '11-13',
//         text: '11-13'
//       },
//       {
//         id: 11,
//         key: '12-14',
//         text: '12-14'
//       },
//     ]
//   },
//   productPayment: {
//     itemClass: ProductPaymentItem,
//     data: [
//       {
//         id: 1,
//         key: 'dealBuy',
//         text: 'Buy Deal',
//         processor: BuyDealProcessor
//       },
//       {
//         id: 2,
//         key: 'dealAddToCart',
//         text: 'Add to cart Deal',
//         processor: AddDealToCartProcessor
//       },
//       {
//         id: 3,
//         key: 'tourBuy',
//         text: 'Buy Tour',
//         processor: BuyTourProcessor
//       },
//     ]
//   },
//   productBreadcrumbs: {
//     itemClass: Item,
//     data: [
//       {
//         key: 'products',
//         id: 1,
//         'breadcrumbs': [{
//           name: 'TITLE.products',
//           url: '/b/products'
//         }]
//       },
//       {
//         key: 'arrangement-manager',
//         id: 2,
//         'breadcrumbs': [
//           {
//             name: 'TITLE.products',
//             url: '/b/products'
//           },
//           {
//             name: 'PRODUCTS.n020',
//             url: '/deal-manager'
//           },
//         ]
//       },
//       {
//         key: 'real-time-messaging',
//         id: 3,
//         'breadcrumbs': [
//           {
//             name: 'TITLE.products',
//             url: '/b/products'
//           },
//           {
//             name: 'LINK.mobile-app',
//             url: '/hotel-mobile-app'
//           },
//         ]
//       },
//       {
//         key: 'reservation-management',
//         id: 4,
//         'breadcrumbs': [
//           {
//             name: 'TITLE.products',
//             url: '/b/products'
//           },
//           {
//             name: 'PRODUCTS.n060',
//             url: '/hotel-pms'
//           },
//         ]
//       },
//       {
//         key: 'company',
//         id: 5,
//         'breadcrumbs': [{
//           name: 'TITLE.company',
//           url: '/company'
//         }]
//       },
//       {
//         key: 'housekeeping',
//         id: 6,
//         'breadcrumbs': [
//           {
//             name: 'TITLE.company',
//             url: '/company'
//           },
//           {
//             name: 'LINK.software-for-small-hotels',
//             url: '/software'
//           }
//         ]
//       }]
//   }
// };
