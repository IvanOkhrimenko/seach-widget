// import {dictionary} from '../../../config/dictionary';
// import {Range} from './range';
// import {Item} from './item';
// import {Injectable} from '@angular/core';

// @Injectable()
// /**
//  * @typedef {Array<Range[]>} Dictionary
//  */
// export class Dictionary extends Array {
//   /**
//    * @constructor
//    */
//   constructor() {
//     super();

//     if (typeof dictionary === 'undefined') {
//       return;
//     }
//     Object.keys(dictionary).map((key) => {
//       this[key] = new Range();

//       Object.keys(dictionary[key]['data']).map(key2 => {
//         /* Create item class */
//         const item: Item = new dictionary[key]['itemClass']();
//         item.load(Object.assign({}, dictionary[key]['data'][key2], {
//           tagField: dictionary[key]['tag'] || null
//         }));

//         this[key].addItem(item);
//       });

//       this[key] = this[key].finalize();
//     });
//   }
// }
