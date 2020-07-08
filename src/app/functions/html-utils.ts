// import { ImageModel } from '../models/hotel.model';
// import * as URL from 'url-parse';

// const imageSizeRegExp = /^(\/\d+x\d+)/;

// export function parseHtml(html: string) {
//   const doc = document.createElement('div');
//   doc.innerHTML = html;
//   return doc;
// }

// export function addClickHandlerToImages(doc, onClick): ImageModel[] {
//   const images = [];
//   const coll = doc.getElementsByTagName('img');
//   for (const elem of coll) {
//     const nextIndex = images.length;
//     elem.addEventListener('click', () => onClick(nextIndex));
//     elem.style = 'cursor: pointer';
//     images.push({ file: elem.src, alt: elem.alt });
//   }
//   return images;
// }

// export function removeSizeFromImage({ file, alt }: ImageModel): ImageModel {
//   const url = new URL(file);
//   url.pathname = url.pathname.replace(imageSizeRegExp, '');
//   return { file: url.toString(), alt };
// }

// export function getPathUrlFromString(url: string): any[] {
//   if (!url) {
//     return [''];
//   }

//   const path = url;
//   const mainPathArr: any = path.split('?')[0].split('(')[0].split('?')[0].split('#')[0].split('/');
//   const auxPathObj = Object.assign({}, { outlets: {} });

//   if (path.split('?')[0].split('(')[1]) {
//     path.split('?')[0].split(')')[0].split('(')[1].split('//')
//       .forEach(auxSegment => {
//         const outlet = auxSegment.split(':')[0];
//         const auxPath = auxSegment.split(':')[1].split('/');
//         auxPathObj.outlets[outlet] = auxPath;
//       });

//     mainPathArr.splice(-1, 1);
//     mainPathArr.push(auxPathObj);
//   }

//   return mainPathArr;
// }
