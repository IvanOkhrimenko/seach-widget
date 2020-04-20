import { Action } from '@ngrx/store';
// import { VacancyModel } from '../../models/careers.model';

export const UPDATE_CAREERS = 'UPDATE_CAREERS';

export class UpdateCareersAction implements Action {
  readonly type = UPDATE_CAREERS;

  constructor(public payload: any) {
  }
}

export type CareersActions = UpdateCareersAction;
