import { Injectable } from '@angular/core';
import { langConcat } from '../functions/language';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  public externalUrl: string;
  public accessKey: string;

  /**
   * Stack of access path
   */
  private accessRules = {};

  constructor() { }

  /**
   * @param path
   */
  setAccessTo(path: string): void {
    langConcat(path)
      .map(e => this.accessRules[e] = true);
    this.accessRules[path] = true;
  }

  /**
   * @param path
   */
  removeAccessTo(path: string): void {
    this.accessRules[path] = false;
  }

  /**
   * @param path
   */
  isAvailable(path: string): boolean {
    return typeof this.accessRules[path] !== 'undefined' && !!this.accessRules[path];
  }
}
