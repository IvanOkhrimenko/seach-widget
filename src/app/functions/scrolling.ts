import { ElementRef } from '@angular/core';
import isNil from 'lodash-es/isNil';

/**
 * @deprecated use scrollToElementById(id)
 */
export function scrollingMethod(el, correction = 0) {

  const node = document.getElementById(el);

  if (node) {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': node.offsetTop
    });
  }
}

export function scrollToElementById(elementId: string, correction: number = 0): void {
  const offsetTop = getPositionByElementId(elementId);

  if (offsetTop === null) {
    return;
  }

  const scrollPoint = offsetTop - correction;
  scrollWindowToPoint(scrollPoint);
}

export function scrollWindowToPoint(top: number, left: number = 0) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': left,
    'top': top
  });
}

export function getPositionByElementId(elementId: string): number | null {
  const el = document.getElementById(elementId);

  if (isNil(el)) {
    return null;
  }

  return getPositionOfElement(el);
}

export function getPositionByElementRef(el: ElementRef): number {
  return getPositionOfElement(el.nativeElement);
}

export function getPositionOfElement(el): number {
  let pos = el.offsetTop;

  while (el.offsetParent && el.offsetParent !== document.body) {
    el = el.offsetParent;
    pos += el.offsetTop;
  }

  return pos;
}
