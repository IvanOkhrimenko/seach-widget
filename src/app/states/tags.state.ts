// import {any} from '../../models/tag-model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface TagsState extends EntityState<any> {
  selectedTagId: string | null;
  isSuccess: boolean;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: (tag: any) => tag.id
});

export const initialState: TagsState = adapter.getInitialState({
  selectedTagId: null,
  isSuccess: false
});
