
import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        details: {},
    },
    reducers: {
        addMovie: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    }
});

export const { addMovie } = movieSlice.actions;
export const movieData = (state) => state.movie;
export default movieSlice.reducer;