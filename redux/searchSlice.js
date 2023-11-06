import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: {
            isSearch: false
        }
    },
    reducers: {
        toggleSearch: (state) => {
            state.search.isSearch = !state.search.isSearch;
        },
        closeSearch: (state) => {
            state.search.isSearch = false;
        },
    },
});

export const {
    toggleSearch,
    closeSearch
} = searchSlice.actions;

export default searchSlice.reducer;