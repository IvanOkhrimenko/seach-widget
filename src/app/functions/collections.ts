import isEmpty from "lodash-es/isEmpty";
import last from "lodash-es/last";

export function splitBy<T>(coll: T[], func: (t: T) => boolean): T[][] {
  if (isEmpty(coll)) {
    return [];
  }

  const [firstItem, ...restItems] = coll;

  let prevResult = func(firstItem);
  const acc = [[firstItem]];

  restItems.forEach(item => {
    const result = func(item);
    if (result !== prevResult) {
      acc.push([]);
      prevResult = result;
    }
    last(acc).push(item);
  });

  return acc;
}
