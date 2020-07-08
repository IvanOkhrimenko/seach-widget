
import { EN, LANGUAGES } from '../constants/general.constants';
import trim from 'lodash-es/trim';
import head from 'lodash-es/head';
import includes from 'lodash-es/includes';
import { Config } from '../constants/config';
import cloneDeep from 'lodash-es/cloneDeep';

export function getLanguageFromPath(path: string): string {
  const url = trim(path, '/').split('/');
  return getLanguageFromUrlSegments(url);
}

export function getLanguageUrlPrefix(language: string): string {
  return language === EN ? '/' : `/${language}`;
}

export function getLanguageFromUrlSegments(url: string[]): string {
  const languagePart = head(url);
  return includes(LANGUAGES, languagePart) ? languagePart : EN;
}

export function isLanguageImplicitlySetInPath(path: string): boolean {
  const url = trim(path, '/').split('/');
  return isLanguageImplicitlySetInUrlSegments(url);
}

export function isLanguageImplicitlySetInUrlSegments(url: string[]): boolean {
  const languagePart = head(url);
  return includes(LANGUAGES, languagePart);
}

/**
 * @param {string} path
 * @param {boolean} skipSeparatorIfLangNotExist
 * @return {string}
 */
export function getLangStartLinkFromPath(path: string, skipSeparatorIfLangNotExist: boolean = false): string {
  const lang = getLanguageFromPath(path);
  const url = getLanguageUrlPrefix(lang);

  if (url === '/' && skipSeparatorIfLangNotExist) {
    return '';
  }

  return url;
}

const langsList = Config.USED_LANGS;

export function langConcat(str: string) {
  let result = [];
  langsList
    .map(e => {
      let cloned = cloneDeep(str);

      cloned = e + '/' + cloned;

      result.push(cloned);
    });

  return result;
}

