// import * as moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022.min';
// import { DATE_FORMAT, TIME_FORMAT } from '../constants/general.constants';

// export function convertToUTC(time: string, timeZone: string): string {
//   return moment.utc(moment.tz(moment(time).format(TIME_FORMAT), timeZone).format()).format(TIME_FORMAT);
// }

// function convertToTimestamp(time: string, timeZone: string): number {
//   return moment.tz(time, timeZone).valueOf();
// }

// export function convertFromUTC(time: string, timeZone: string, format?: string): string {
//   if (!time) {
//     return '';
//   }
//   if (format) {
//     return moment.tz(moment.utc(time), timeZone).format(format);
//   }
//   return moment.tz(moment.utc(time), timeZone).format(TIME_FORMAT);
// }

// export function convertDate(date: string, format?: string, lang?: string): string {
//   if (format) {
//     return moment(date).locale(lang || '').format(format);
//   }
//   return moment(date).locale(lang || '').format(DATE_FORMAT);
// }
