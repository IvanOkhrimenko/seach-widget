import {Item} from './item';

/**
 * @class Range
 */
export class Range {
  /**
   * @type {Map<string, Item>}
   */
  protected items = new Map<string, Item>();

  /**
   * @type {Map<string, any>}
   */
  protected namesMap = new Map<string, any>();

  /**
   * @type {string}
   */
  public tagField: string;

  /**
   * @return {Map<string, Item>}
   */
  public listData(): Map<string, Item> {
    const list = new Map<string, Item>();

    this.items.forEach((value: Item, key: string) => {
      list.set(key, value);
    });

    return list;
  }

  /**
   * @return {Array<Item>}
   */
  public toArray(): Array<Item> {
    const arr = [];

    this.items.forEach((value: Item, key: string) => {
      arr.push(value);
    });

    return arr;
  }

  /**
   * @param {Item} item
   */
  public addItem(item: Item): void {
    const id = item.id;
    const name = item.text;

    this.items.set(id, item);
    this.namesMap.set(name, id);
  }

  /**
   * @param id
   * @return {Item | undefined}
   */
  public findById(id): Item {
    return this.items.get(id);
  }

  /**
   * @param key
   */
  public findByKey(key): Item {
    let result = new Item();
    this.items.forEach((value: Item, keyLc: string) => {
      if (value.key === key) {
        result = value;
      }
    });

    return result;
  }

  /**
   * @param key
   * @param value
   */
  public findByValueKey(key, value): Item {
    let result = new Item();
    this.items.forEach((valueLc: Item, keyLc: string) => {
      if (valueLc[key] === value) {
        result = valueLc;
      }
    });

    return result;
  }

  /**
   * @returns {Range}
   */
  public finalize(): Range {
    const range = new Range();
    range.items = this.items;
    range.namesMap = this.namesMap;

    return range;
  }

  /**
   * Return range key - text
   * @return {{}}
   */
  public range(strictOrder: boolean = false) {
    const listArr = {};

    if (strictOrder) {
      this.items.forEach((value: Item, key: string) => {
        listArr[value.id] = value.text;
      });
    } else {
      const iterator = this.items.keys();

      for (let i = 0; i < this.items.size; i++) {
        listArr[i] = this.items.get(iterator.next().value).text;
      }
    }

    return listArr;
  }

  /**
   * Filter range data by tag field and tag key exist
   * @param tagKey
   */
  public filterByTag(tagKey: string) {
    const range = new Range();
    this.items.forEach(e => {
      if (e.tagExistByKey(tagKey)) {
        range.addItem(e);
      }
    });

    return range.finalize();
  }

  /**
   * Return list of
   */
  public getKeyList(): Array<string> {
    const listArr = [];
    this.items.forEach((value: Item, key: string) => {
      listArr.push(value.key);
    });

    return listArr;
  }

  /**
   * Return quantity of items
   */
  public size(): number {
    return this.items.size;
  }

  /**
   * @param separator
   * @return string
   */
  public toString(separator?: string): string {
    const resultArr = new Array<string>();
    const range = this.range();

    Object.keys(range).forEach(key => {
      resultArr.push(range[key]);
    });

    return resultArr.join((separator ? separator : ''));
  }
}
