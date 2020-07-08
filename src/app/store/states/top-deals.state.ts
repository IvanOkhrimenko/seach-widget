// import { any } from '../../models/deal.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface TopDealsState extends EntityState<any> {
  selectedTopDealId: string | null;
  selectedTopDealIds: Array<string>;
  isSuccess: boolean;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: (deal: any) => deal.id
});

export const initialState: TopDealsState = adapter.getInitialState({
  selectedTopDealId: null,
  selectedTopDealIds: [],
  isSuccess: false
});
