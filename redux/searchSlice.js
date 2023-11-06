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
    },
});

export const {
    toggleSearch
} = searchSlice.actions;

export default searchSlice.reducer;