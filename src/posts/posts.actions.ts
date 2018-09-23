import { Action } from '@ngrx/store';
import { Post } from './posts.reducer';

export enum PostsActionTypes {
    ADD_POSTS = '[POSTS] POSTS_ADDED',
}

export class LoadPosts implements Action {
    readonly type = PostsActionTypes.ADD_POSTS;

    constructor(public payload: { posts: Post[] }) {}
}

export type PostsActionsUnion = LoadPosts;
