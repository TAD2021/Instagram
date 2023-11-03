import { createSlice } from '@reduxjs/toolkit';

export const sidebar = createSlice({
    name: 'sidebar',
    initialState: {
        search: {
            isSearch: false
        }
    },
    reducer: {
        toggleSearch: (state) => {
            state.search.isSearch = !state.search.isSearch
        }
    }
})

export const {
    toggleSearch,
} = sidebar.actions;

export default sidebar.reducer;