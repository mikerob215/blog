import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsActionsUnion, PostsActionTypes } from './posts.actions';

export interface Post {
    id: number;
    title: string;
    content: string;
}

export interface PostsState extends EntityState<Post> {}

export const postsAdapter = createEntityAdapter<Post>();

export const initialState = postsAdapter.getInitialState({});

export function PostsReducer(state: PostsState, action: PostsActionsUnion): PostsState {
    switch (action.type) {
        case PostsActionTypes.ADD_POSTS:
            return postsAdapter.addAll(action.payload.posts, state);
        default:
            return state;
    }
}

const { selectAll } = postsAdapter.getSelectors();

export const postsSelector = createFeatureSelector('Posts');

export const selectAllPosts = createSelector(postsSelector, selectAll);
