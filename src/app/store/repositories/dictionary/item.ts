/**
 * @class Item
 */
export class Item {
  protected _id?: string;
  protected _key?: string;
  protected _tagField?: string|null;
  protected value?: object;

  /**
   * @param data
   */
  load(data) {
    this._id = data['id'];
    this._key = data['key'];
    this._tagField = data['tagField'];

    this.value = data;
  }

  /**
   * @return {*}
   */
  get id() {
    return this._id;
  }

  /**
   * @return {*}
   */
  get key() {
    return this._key;
  }

  /**
   * @return {*}
   */
  get text() {
    return this.value['text'];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return typeof (this._id) === 'undefined';
  }

  /**
   * @return {boolean}
   */
  tagExistByKey(key: string): boolean {
    return this.value[this._tagField].indexOf(key) !== -1;
  }
}
