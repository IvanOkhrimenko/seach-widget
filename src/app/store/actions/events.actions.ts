
import { EventModel } from '../states/events.state';

export const ADD_EVENT = '[EventModel] Load';
export const EMIT_ACTION = '[EventModel] Emit event';

export class AddEvent {
  readonly type = ADD_EVENT;

  constructor(public payload: EventModel) { }
}

export class EmitEventAction {
  readonly type = EMIT_ACTION;

  constructor(public payload: { name: string, value: any }) { }
}

export type Action = AddEvent | EmitEventAction;

export const OPEN_CALENDLY = 'OPEN_CALENDLY';

export const OPEN_VIDEO = 'OPEN_VIDEO';
