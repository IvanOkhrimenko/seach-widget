import { Action } from '@ngrx/store';
// import { ServiceCategoryModel } from '../../models/category.model';


export const CATEGORIES_FETCH_SUCCESS = 'CATEGORIES_FETCH_SUCCESS';
export const CATEGORIES_FETCH_ERROR = 'CATEGORIES_FETCH_ERROR';

export interface CategoriesFetchSuccessActionPayload {
  categories: { [categoryId: string]: any },
  hotelUrl: string,
  language: string
}


export class CategoriesFetchSuccessAction implements Action {
  readonly type = CATEGORIES_FETCH_SUCCESS;

  constructor(public payload: CategoriesFetchSuccessActionPayload) {
  }
}

export class CategoriesFetchErrorAction implements Action {
  readonly type = CATEGORIES_FETCH_ERROR;

  constructor(public payload?: any) {
  }
}

export type CategoriesActions =
  | CategoriesFetchSuccessAction
  | CategoriesFetchErrorAction;
