import { createSlice } from '@reduxjs/toolkit';

export const serieSlice = createSlice({
    name: 'serie',
    insitialState: {
        details: {},
        search: []
    },
    reducers:{
    addSerie: (sate,action) => {
        return {
            ...sate,
            ...action.payload
        }
    },
    addSearch: (state,action) => {
        return {
            ...state,
            ...action.payload
        }
    },
  }
});

export const { addSerie, addSearch } = serieSlice.actions;
export const serieData = (state) => state.serie;
export default serieSlice.reducer;