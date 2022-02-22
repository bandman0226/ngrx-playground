import { NgModule } from '@angular/core';
import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
    StoreModule,
} from '@ngrx/store';
import * as fromBooks from './books.reducer';

export const FEATURE_KEY = 'shared-books';

/**
 * State Shape
 **/
export interface State {
    books: fromBooks.State
}

export const reducers: ActionReducerMap<State> = {
    books: fromBooks.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

/**
 * Module
 **/
@NgModule({
    imports: [StoreModule.forFeature(FEATURE_KEY, reducers, {metaReducers})],
})
export class SharedStateBooksModule {
}

/**
 * Feature Selector
 **/
export const selectSharedBooksState = createFeatureSelector<State>(FEATURE_KEY);

/**
 * Books Selectors
 */
export const selectBookState = createSelector(
    selectSharedBooksState,
    (selectSharedBooksState) => selectSharedBooksState.books
);

export const selectAllBooks = createSelector(
    selectBookState,
    fromBooks.selectAll
);

export const selectActiveBook = createSelector(
    selectBookState,
    fromBooks.selectActiveBook
);

export const selectBookEarningsTotals = createSelector(
    selectBookState,
    fromBooks.selectEarningsTotals
);

