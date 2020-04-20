import mapKeys from "lodash-es/mapKeys";


export interface RenameKeysMap {
  [keys: string]: string;
}

export function renameObjectKeys(object: any, rename: RenameKeysMap): any {
  return mapKeys(object, (_, key) => {
    return rename[key] ? rename[key] : key;
  });
}
