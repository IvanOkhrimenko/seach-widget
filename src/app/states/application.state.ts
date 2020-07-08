
import { AuthorizationState } from './authorization.state';
import { HfRouterState } from './hf-router.state';

import { FilterState } from './filter.state';
import { ScreenState } from './screen.state';
import { TagsState } from './tags.state';

import { EventsState } from './events.state';

import { NavMenuState } from './nav-menu.state';



export interface ApplicationState {

  filterState: FilterState;
  routerState: HfRouterState;
 
  authorizationState: AuthorizationState;


  screen: ScreenState;
  tagsState: TagsState;
  
  eventsReducer: EventsState;

  navMenuState: NavMenuState;
}
