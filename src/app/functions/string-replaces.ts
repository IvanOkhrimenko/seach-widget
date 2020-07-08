export function stringReplacer(el: string, searchValues: Array<RegExp | string>, replaceArr: string[]): string {
  searchValues.forEach((sItem) => {
    replaceArr.forEach((rItem) => {
      el = el.replace(sItem, rItem);
    });
  });

  return el;
}
