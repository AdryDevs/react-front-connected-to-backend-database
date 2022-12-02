
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
        addSearch: (state, action) => {
            return {
                ...state,
                search: action.payload,
            };
        },
        addLoan: (state, action) => {
            return {
                ...state,
                loan: action.payload,
            };
        }
    },
});

export const { addMovie, addSearch, addLoan } = movieSlice.actions;
export const movieData = (state) => state.movie;
export default movieSlice.reducer;